import { CrudBase } from "@/shared/lib/crud-base";
import { Review } from "../types/review.types";

class ReviewsService extends CrudBase<Review> {
  constructor() {
    super("/testimonials");
  }

  async getReviews(): Promise<Review[]> {
    const response = await this.getAll();
    if (!response?.success || !response?.data) return [];

    const data = response.data;
    // Handle extra nesting for testimonials endpoint
    // Structure seems to be: response.data.data.data
    if (!Array.isArray(data)) {
      const nestedData = (data as any).data;
      if (
        nestedData &&
        !Array.isArray(nestedData) &&
        (nestedData as any).data
      ) {
        return Array.isArray((nestedData as any).data)
          ? (nestedData as any).data
          : [];
      }
      return Array.isArray(nestedData) ? nestedData : [];
    }

    return data;
  }
}

export const reviewsService = new ReviewsService();
