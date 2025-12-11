"use server";

import { getToken } from "@/services";
import { getLocale } from "next-intl/server";

export async function createDirectDeal(formData) {
  try {
    // Get token from cookies
    const token = await getToken();
    if (!token) {
      return {
        success: false,
        message: "غير مصرح. يرجى تسجيل الدخول.",
      };
    }

    // Get locale
    const locale = await getLocale();

    // Prepare form data
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // Make API request
    const response = await fetch(
      "https://halool.tsd-education.com/api/direct-deals/add",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Accept-Language": locale,
          Accept: "application/json",
        },
        body: data,
      }
    );

    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const textResponse = await response.text();
      console.error("Non-JSON response:", textResponse.substring(0, 500));
      return {
        success: false,
        message: `خطأ في الخادم: تم إرجاع ${response.status}`,
      };
    }

    const result = await response.json();

    if (response.ok && result.success) {
      return {
        success: true,
        message: result.message || "تم إضافة الصفقة بنجاح",
        data: result.data,
      };
    } else {
      return {
        success: false,
        message: result.message || "فشل في إضافة الصفقة",
      };
    }
  } catch (error) {
    console.error("Error creating deal:", error);
    return {
      success: false,
      message: "حدث خطأ أثناء إضافة الصفقة",
    };
  }
}

export async function getDirectDeals(page = 1) {
  try {
    // Get token from cookies
    const token = await getToken();
    if (!token) {
      return {
        success: false,
        message: "غير مصرح. يرجى تسجيل الدخول.",
      };
    }

    // Get locale
    const locale = await getLocale();

    // Make API request
    const response = await fetch(
      `https://halool.tsd-education.com/api/direct-deals?page=${page}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Accept-Language": locale,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const textResponse = await response.text();
      console.error("Non-JSON response:", textResponse.substring(0, 500));
      return {
        success: false,
        message: `خطأ في الخادم: تم إرجاع ${response.status}`,
      };
    }

    const result = await response.json();

    if (response.ok && result.success) {
      return {
        success: true,
        data: result.data,
        meta: result.meta,
      };
    } else {
      return {
        success: false,
        message: result.message || "فشل في جلب الصفقات",
      };
    }
  } catch (error) {
    console.error("Error fetching deals:", error);
    return {
      success: false,
      message: "حدث خطأ أثناء جلب الصفقات",
    };
  }
}
