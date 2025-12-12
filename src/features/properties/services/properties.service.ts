import { CrudBase } from "@/shared/lib/crud-base";
import { Property } from "../types/property.types";

class PropertiesService extends CrudBase<Property> {
  constructor() {
    super("/properties");
  }

  /**
   * Get featured properties
   */
  async getFeatured() {
    return this.custom<Property[]>("/featured", "GET", {
      revalidate: 60, // Cache for 1 minute
    });
  }

  /**
   * Get similar properties for a given property ID
   * @param propertyId - Property ID
   */
  async getSimilar(propertyId: string | number) {
    return this.custom<Property[]>(`/${propertyId}/similar`, "GET", {
      revalidate: 300, // Cache for 5 minutes
    });
  }

  /**
   * Get property by slug
   * @param slug - Property slug
   */
  async getBySlug(slug: string) {
    return this.custom<Property>(`/${slug}`, "GET", {
      revalidate: 60, // Cache for 1 minute
    });
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
