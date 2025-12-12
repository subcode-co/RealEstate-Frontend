"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { dealsService } from "../services/deals.service";
import { Deal } from "../types/deal.types";
import { PaginatedResponse } from "@/shared/types/api.types";

/**
 * Hook to fetch paginated deals
 */
export function useDeals(page = 1) {
  return useQuery({
    queryKey: ["deals", page],
    queryFn: async () => {
      const response = await dealsService.getAll({ page });

      if (response?.success && response?.data) {
        return response.data as PaginatedResponse<Deal>;
      }

      return null;
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}

/**
 * Hook to create a new deal
 */
export function useCreateDeal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await dealsService.addDeal(formData);

      if (!response?.success) {
        throw new Error(response?.message || "Failed to create deal");
      }

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["deals"] });
    },
  });
}

/**
 * Hook to update an existing deal
 */
export function useUpdateDeal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      dealId,
      formData,
    }: {
      dealId: string | number;
      formData: FormData;
    }) => {
      const response = await dealsService.updateDeal(dealId, formData);

      if (!response?.success) {
        throw new Error(response?.message || "Failed to update deal");
      }

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["deals"] });
    },
  });
}
