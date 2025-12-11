"use server";

import { getData } from "./fetch-methods";

/**
 * Fetch all blogs with pagination
 * @param {number} page - Page number (default: 1)
 * @param {number} perPage - Items per page (default: 6)
 * @returns {Promise<Object>} Response with blogs data and pagination
 */
export async function getBlogs(page = 1, perPage = 6) {
  const url = `/blogs?page=${page}&per_page=${perPage}`;
  return await getData({ url });
}

/**
 * Fetch a single blog by ID
 * @param {number} id - Blog ID
 * @returns {Promise<Object>} Response with blog data
 */
export async function getBlogById(id) {
  const url = `/blogs/${id}`;
  return await getData({ url });
}
