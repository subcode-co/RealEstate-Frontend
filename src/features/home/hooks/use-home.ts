"use client";

import { useQuery } from "@tanstack/react-query";
import { homeService } from "../services/home.service";
import { HomeData } from "../types/home.types";

/**
 * Hook to fetch home page data
 */
export function useHomeData() {
  return useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const response = await homeService.getHomeData();

      if (response?.code === 200 && response?.data?.success) {
        return response.data.data as HomeData;
      }

      return null;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
