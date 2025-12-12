"use server";

/**
 * Blog Actions - Migrated to use CrudBase
 *
 * This file demonstrates the new pattern using the CRUD base class.
 * Compare this with the old implementation to see the benefits.
 *
 * Old version had ~31 lines with repetitive getData calls.
 * New version has ~40 lines but includes full CRUD operations (create, update, delete).
 */

import { CrudBase } from "./crud-base";
import { Blog, ApiResponse, PaginatedResponse } from "@/types";

// Create a singleton service instance
const blogsService = new CrudBase<Blog>("/blogs");

/**
 * Fetch all blogs with pagination
 * @param page - Page number (default: 1)
 * @param perPage - Items per page (default: 6)
 * @returns Response with blogs data and pagination
 */
export async function getBlogs(
  page = 1,
  perPage = 6
): Promise<ApiResponse<PaginatedResponse<Blog>>> {
  return await blogsService.getAll({ page, per_page: perPage });
}

/**
 * Fetch a single blog by ID
 * @param id - Blog ID
 * @returns Response with blog data
 */
export async function getBlogById(
  id: number | string
): Promise<ApiResponse<Blog>> {
  return await blogsService.getById(id);
}

/**
 * Create a new blog
 * @param data - Blog data
 * @returns Response with created blog
 */
export async function createBlog(
  data: Partial<Blog>
): Promise<ApiResponse<Blog>> {
  return await blogsService.create(data);
}

/**
 * Update an existing blog
 * @param id - Blog ID
 * @param data - Updated blog data
 * @returns Response with updated blog
 */
export async function updateBlog(
  id: number | string,
  data: Partial<Blog>
): Promise<ApiResponse<Blog>> {
  return await blogsService.update(id, data);
}

/**
 * Delete a blog
 * @param id - Blog ID
 * @returns Response confirming deletion
 */
export async function deleteBlog(
  id: number | string
): Promise<ApiResponse<Blog>> {
  return await blogsService.delete(id);
}

/**
 * Example: Get featured blogs (custom endpoint)
 * This would call GET /blogs/featured
 */
export async function getFeaturedBlogs(): Promise<ApiResponse<Blog[]>> {
  return await blogsService.custom<Blog[]>("/featured", "GET", {
    revalidate: 3600, // Cache for 1 hour
  });
}
