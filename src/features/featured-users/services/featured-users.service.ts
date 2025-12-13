import { CrudBase } from "@/shared/lib/crud-base";
import { FeaturedUser } from "../types/featured-users.types";

class FeaturedUsersService extends CrudBase<FeaturedUser> {
  constructor() {
    super("/featured-users");
  }

  /**
   * Get all featured users with pagination and optional search
   * @param page - Page number
   * @param perPage - Items per page
   * @param search - Optional search query
   * @returns Array of featured users
   */
  async getFeaturedUsers(
    page?: number,
    perPage?: number,
    search?: string
  ): Promise<FeaturedUser[]> {
    const params: Record<string, unknown> = {
      page,
      per_page: perPage,
    };

    if (search) {
      params.search = search;
    }

    const response = await this.getAll(params);
    return response?.success && response?.data
      ? Array.isArray(response.data)
        ? response.data
        : response.data.data || []
      : [];
  }

  /**
   * Get a single featured user by ID
   * @param id - Featured user ID
   * @returns FeaturedUser object or null
   */
  async getFeaturedUserById(id: string | number): Promise<FeaturedUser | null> {
    const response = await this.getById(id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = response?.data as any;
    return response?.success && data?.data ? data.data : null;
  }
}

export const featuredUsersService = new FeaturedUsersService();
