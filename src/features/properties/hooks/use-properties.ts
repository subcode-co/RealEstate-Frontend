"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { propertiesService } from "../services/properties.service";
import { Property, PropertyFilters } from "../types/property.types";
import { PaginatedResponse } from "@/shared/types/api.types";

/**
 * Hook to fetch paginated properties with filters
 */
export function useProperties(filters?: PropertyFilters) {
  return useQuery({
    queryKey: ["properties", filters],
    queryFn: async () => {
      const response = await propertiesService.getAll(filters);

      if (response?.success && response?.data) {
        return response.data as PaginatedResponse<Property>;
      }

      return null;
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}

/**
 * Hook to fetch a single property by ID
 */
export function useProperty(id: string | number) {
  return useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      const response = await propertiesService.getById(id);

      if (response?.success && response?.data) {
        return response.data as Property;
      }

      return null;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

/**
 * Hook to fetch a property by slug
 */
export function usePropertyBySlug(slug: string) {
  return useQuery({
    queryKey: ["property", "slug", slug],
    queryFn: async () => {
      const response = await propertiesService.getBySlug(slug);

      if (response?.success && response?.data?.success) {
        return response.data.data as Property;
      }

      return null;
    },
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

/**
 * Hook to fetch featured properties
 */
export function useFeaturedProperties() {
  return useQuery({
    queryKey: ["properties", "featured"],
    queryFn: async () => {
      const response = await propertiesService.getFeatured();

      if (response?.success && response?.data?.success) {
        return response.data.data as Property[];
      }

      return [];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

/**
 * Hook to fetch similar properties
 */
export function useSimilarProperties(propertyId: string | number) {
  return useQuery({
    queryKey: ["properties", "similar", propertyId],
    queryFn: async () => {
      const response = await propertiesService.getSimilar(propertyId);

      if (response?.success && response?.data?.success) {
        return response.data.data as Property[];
      }

      return [];
    },
    enabled: !!propertyId,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

/**
 * Hook to create a new property
 */
export function useCreateProperty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await propertiesService.addProperty(formData);

      if (!response?.success) {
        throw new Error(response?.message || "Failed to create property");
      }

      return response.data;
    },
    onSuccess: () => {
      // Invalidate properties list to refetch
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
  });
}
