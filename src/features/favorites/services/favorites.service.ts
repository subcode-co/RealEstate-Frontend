import { CrudBase } from "@/shared/lib/crud-base";
import {
  Favorite,
  FavoritesResponse,
  ToggleFavoriteResponse,
} from "../types/favorite.types";
import { getData, postData, deleteData } from "@/shared/lib/fetch-methods";

class FavoritesService extends CrudBase<Favorite> {
  constructor() {
    super("/favorites");
  }

  /**
   * Get all user favorites
   * @returns Array of favorite properties
   */
  async getFavorites(): Promise<Favorite[]> {
    const response = await getData<FavoritesResponse>({
      url: "/favorites/",
    });

    if (response?.success && response?.data?.success) {
      return response.data.data || [];
    }

    return [];
  }

  /**
   * Add property to favorites
   * @param propertyId - Property ID to add
   */
  async addFavorite(
    propertyId: number | string
  ): Promise<ToggleFavoriteResponse> {
    const response = await postData<ToggleFavoriteResponse>({
      url: `/favorites/${propertyId}`,
      data: {},
    });

    return {
      success: response?.success && response?.data?.success,
      message: response?.data?.message || "",
    };
  }

  /**
   * Remove property from favorites
   * @param propertyId - Property ID to remove
   */
  async removeFavorite(
    propertyId: number | string
  ): Promise<ToggleFavoriteResponse> {
    const response = await deleteData<ToggleFavoriteResponse>({
      url: `/favorites/${propertyId}`,
    });

    return {
      success: response?.success && response?.data?.success,
      message: response?.data?.message || "",
    };
  }

  /**
   * Check if property is in favorites
   * @param propertyId - Property ID to check
   */
  async checkFavorite(propertyId: number | string): Promise<boolean> {
    try {
      const response = await getData<any>({
        url: `/favorites/${propertyId}`,
      });
      return response?.success && response?.data?.success;
    } catch {
      return false;
    }
  }
}

export const favoritesService = new FavoritesService();
