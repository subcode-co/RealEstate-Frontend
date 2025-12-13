import { CrudBase } from "@/shared/lib/crud-base";
import { Review } from "../types/review.types";

class ReviewsService extends CrudBase<Review> {
  constructor() {
    super("/testimonials");
  }

  async getReviews(): Promise<Review[]> {
    try {
      // Use revalidate: 0 to ensure fresh data on every request
      const response = await this.getAll({ revalidate: 0 });

      if (!response?.success || !response?.data) {
        console.log("Reviews API response unsuccessful:", response);
        return [];
      }

      // The structure is:
      // getData returns: { code: 200, success: true, data: <API response> }
      // API response is: { status: true, message: "...", data: { current_page: 1, data: [...testimonials] } }
      //
      // So the path is: response.data.data.data to get the testimonials array
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const apiResponse = response.data as any;

      // apiResponse = { status: true, message: "...", data: { current_page: 1, data: [...] } }
      const paginatedData = apiResponse?.data;

      // paginatedData = { current_page: 1, data: [...] }
      if (paginatedData?.data && Array.isArray(paginatedData.data)) {
        return paginatedData.data;
      }

      // Fallback: maybe it's directly an array
      if (Array.isArray(apiResponse)) {
        return apiResponse;
      }

      // Another fallback: maybe it's { data: [...] } directly
      if (apiResponse?.data && Array.isArray(apiResponse.data)) {
        return apiResponse.data;
      }

      console.log("Unexpected reviews data structure:", apiResponse);
      return [];
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return [];
    }
  }
}

export const reviewsService = new ReviewsService();
