"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import CustomBreadcrumbs from "@/components/shared/custom-breadcrumbs";
import EstateFilterPanel from "@/components/estates/estates-filter";
import EstatesGrid from "@/components/estates/estates-grid";
import { motion } from "motion/react";

const EstatsPage = () => {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({});
  const [totalResults, setTotalResults] = useState(0);

  // Fetch properties based on search params
  const fetchProperties = async (page = 1, append = false) => {
    if (append) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      // Build query string from search params
      const params = new URLSearchParams();
      params.set("page", page.toString());

      // Add all search params to API call
      searchParams.forEach((value, key) => {
        if (key !== "page") {
          params.set(key, value);
        }
      });

      const response = await fetch(
        `https://halool.tsd-education.com/api/properties/search?${params.toString()}`,
        {
          headers: {
            "Accept-Language": locale,
          },
        }
      );

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error("Server returned non-JSON response:", response.status);
        setError("حدث خطأ في الخادم. يرجى المحاولة مرة أخرى.");
        if (!append) {
          setProperties([]);
        }
        setLoading(false);
        setLoadingMore(false);
        return;
      }

      const result = await response.json();

      if (result.code === 200) {
        // Check if data is an array (empty results) or has data property
        const propertiesData = Array.isArray(result.data)
          ? result.data
          : result.data?.data || [];

        if (append) {
          setProperties((prev) => [...prev, ...propertiesData]);
        } else {
          setProperties(propertiesData);
        }

        setPagination(result.data?.meta || {});
        setTotalResults(result.data?.meta?.total || propertiesData.length || 0);
      } else {
        setError(result.message || "فشل في تحميل العقارات");
        if (!append) {
          setProperties([]);
        }
      }
    } catch (err) {
      console.error("Error fetching properties:", err);
      setError("حدث خطأ أثناء تحميل العقارات");
      if (!append) {
        setProperties([]);
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Fetch properties when search params change
  useEffect(() => {
    fetchProperties(1, false);
  }, [searchParams, locale]);

  // Handle load more
  const handleLoadMore = () => {
    const nextPage = (pagination.currentPage || 1) + 1;
    fetchProperties(nextPage, true);
  };

  // Handle filter submission
  const handleFilterSubmit = (filters) => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        params.set(key, value.toString());
      }
    });

    router.push(`?${params.toString()}`);
  };

  return (
    <main className="space-y-12">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container"
      >
        <CustomBreadcrumbs items={[{ label: "العقارات" }]} />
        <h1 className="text-main-navy text-2xl font-bold">العقارات</h1>
      </motion.div>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container space-y-12"
      >
        <EstateFilterPanel onSubmit={handleFilterSubmit} />
        {error && <div className="text-center py-4 text-red-500">{error}</div>}
        <EstatesGrid
          properties={properties}
          loading={loading}
          totalResults={totalResults}
          pagination={pagination}
          onLoadMore={handleLoadMore}
          loadingMore={loadingMore}
        />
      </motion.section>
    </main>
  );
};

export default EstatsPage;
