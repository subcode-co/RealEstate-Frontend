"use client";

import { useQuery } from "@tanstack/react-query";
import { partnersService } from "../services/partners.service";
import { Partner } from "../types/partner.types";
import { PaginatedResponse } from "@/shared/types/api.types";

/**
 * Hook to fetch paginated partners/companies
 */
export function usePartners(page = 1, perPage = 10) {
  return useQuery({
    queryKey: ["partners", page, perPage],
    queryFn: async () => {
      const response = await partnersService.getAll({
        page,
        per_page: perPage,
      });

      if (response?.success && response?.data) {
        return response.data as PaginatedResponse<Partner>;
      }

      return null;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

/**
 * Hook to fetch a single partner/company by ID
 */
export function usePartner(id: string | number) {
  return useQuery({
    queryKey: ["partner", id],
    queryFn: async () => {
      const response = await partnersService.getById(id);

      if (response?.success && response?.data) {
        return response.data as Partner;
      }

      return null;
    },
    enabled: !!id,
    staleTime: 15 * 60 * 1000, // 15 minutes
  });
}
