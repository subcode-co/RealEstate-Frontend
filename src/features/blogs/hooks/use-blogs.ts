"use client";

import { useQuery } from "@tanstack/react-query";
import { blogsService } from "../services/blogs.service";
import { PaginatedResponse } from "@/shared/types/api.types";
import { Blog } from "../types/blog.types";

/**
 * Hook to fetch paginated blogs
 * @param page - Page number (default: 1)
 * @param perPage - Items per page (default: 12)
 */
export function useBlogs(page = 1, perPage = 12) {
  return useQuery({
    queryKey: ["blogs", page, perPage],
    queryFn: async () => {
      const response = await blogsService.getAll({ page, per_page: perPage });

      // Handle the API response structure
      if (response?.success && response?.data) {
        return response.data as PaginatedResponse<Blog>;
      }

      return null;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

/**
 * Hook to fetch a single blog by ID
 * @param id - Blog ID
 */
export function useBlog(id: string | number) {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const response = await blogsService.getById(id);

      // Handle the API response structure
      if (response?.success && response?.data) {
        return response.data as Blog;
      }

      return null;
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}
