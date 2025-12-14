import { CrudBase } from "@/shared/lib/crud-base";
import { Property } from "../types/property.types";

class PropertiesService extends CrudBase<Property> {
  constructor() {
    super("/properties");
  }

  /**
   * Get featured properties
   * @returns Array of featured properties
   */
  async getFeaturedProperties(): Promise<Property[]> {
    const response = await this.custom<Property[]>("/featured", "GET");
    return response?.success && response?.data
      ? Array.isArray(response.data)
        ? response.data
        : response.data.data || []
      : [];
  }

  /**
   * Get similar properties for a given property ID
   * @param propertyId - Property ID
   */
  async getSimilar(propertyId: string | number) {
    return this.custom<Property[]>(`/${propertyId}/similar`, "GET");
  }

  /**
   * Get property by slug
   * @param slug - Property slug
   */
  async getBySlug(slug: string) {
    return this.custom<Property>(`/${slug}`, "GET");
  }

  /**
   * Add a new property (requires FormData for images)
   * @param formData - Property form data
   */
  async addProperty(formData: FormData) {
    return this.custom("/add", "POST", {
      data: formData as any,
      isFormData: true,
    });
  }
}

export const propertiesService = new PropertiesService();
