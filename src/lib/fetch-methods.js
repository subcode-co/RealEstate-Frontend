"use server";

import { getToken } from "@/services";
import { getLocale } from "next-intl/server";

// تجهيز الهيدر
async function getHeaders(isFormData = false, locale) {
  const headers = {};

  // content type
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  // اللغة
  const currentLocale = locale || (await getLocale());
  headers["Accept-Language"] = currentLocale;

  // token من الكوكي
  const token = await getToken();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
}

// جلب البيانات (GET)
export async function getData({ url, locale, revalidate }) {
  try {
    const headers = await getHeaders(false, locale);
    const response = await fetch(`https://halool.tsd-education.com/api${url}`, {
      headers,
      ...(revalidate !== undefined && { next: { revalidate } }),
    });

    // التحقق من نوع المحتوى المُرجع
    const contentType = response.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      const textResponse = await response.text();
      return {
        code: response.status,
        success: false,
        message: `Server returned ${response.status}: Expected JSON but got ${
          contentType || "unknown type"
        }`,
        rawResponse: textResponse.substring(0, 200),
      };
    }

    const data = await response.json();
    return { code: response.status, success: true, data };
  } catch (err) {
    return {
      code: 500,
      success: false,
      message: err?.message || "Unexpected error",
    };
  }
}

// إرسال البيانات (POST)
export async function postData({ url, data, isFormData, locale }) {
  try {
    const headers = await getHeaders(isFormData, locale);
    const body = isFormData
      ? getFormData(data || {})
      : JSON.stringify(data || {});

    const response = await fetch(`https://halool.tsd-education.com/api${url}`, {
      method: "POST",
      headers,
      body,
    });

    const resData = await response.json();
    return { code: response.status, success: true, data: resData };
  } catch (err) {
    return {
      code: 500,
      success: false,
      message: err?.message || "Unexpected error",
    };
  }
}

// helper لتحويل object لـ FormData
function getFormData(data) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
}
// حذف البيانات (DELETE)
export async function deleteData({ url, data = null, locale }) {
  try {
    const headers = await getHeaders(false, locale);

    const options = {
      method: "DELETE",
      headers,
    };

    // لو فيه بيانات محتاج تبعتها في body
    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(
      `https://halool.tsd-education.com/api${url}`,
      options
    );
    const resData = await response.json();

    return { code: response.status, success: true, data: resData };
  } catch (err) {
    return {
      code: 500,
      success: false,
      message: err?.message || "Unexpected error",
    };
  }
}
