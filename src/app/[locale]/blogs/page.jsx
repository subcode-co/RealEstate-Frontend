import React from "react";
import CustomBreadcrumbs from "@/components/shared/custom-breadcrumbs";
import BlogCard from "@/components/shared/blog-card";
import { getTranslations } from "next-intl/server";
import { getBlogs } from "@/lib/blog-actions";

const BlogsPage = async ({ searchParams }) => {
  const t = await getTranslations("breadcrumbs");

  // Get page from search params, default to 1
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  // Fetch blogs data
  const response = await getBlogs(page, 12);
  const blogs = response?.data?.data || [];
  const pagination = response?.data?.pagination || null;

  return (
    <main className="space-y-12">
      <div className="bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container">
        <CustomBreadcrumbs items={[{ label: t("blogs") }]} />
        <h1 className="text-main-navy text-2xl font-bold">{t("blogs")}</h1>
      </div>
      <div className="container space-y-8">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog.id} item={blog} />)
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              No blogs available
            </div>
          )}
        </div>

        {/* Pagination */}
        {pagination && pagination.last_page > 1 && (
          <div className="flex justify-center items-center gap-4">
            {pagination.current_page > 1 && (
              <a
                href={`?page=${pagination.current_page - 1}`}
                className="px-4 py-2 bg-main-navy text-white rounded-lg hover:bg-main-navy/80 transition-colors"
              >
                Previous
              </a>
            )}

            <span className="text-gray-600">
              Page {pagination.current_page} of {pagination.last_page}
            </span>

            {pagination.current_page < pagination.last_page && (
              <a
                href={`?page=${pagination.current_page + 1}`}
                className="px-4 py-2 bg-main-navy text-white rounded-lg hover:bg-main-navy/80 transition-colors"
              >
                Next
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogsPage;
