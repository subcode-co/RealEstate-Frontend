import { CrudBase } from "@/shared/lib/crud-base";
import { UserGuide, UserGuideSection } from "../types/user-guide.types";

class UserGuideService extends CrudBase<UserGuide> {
  constructor() {
    super("/user-guide");
  }

  /**
   * Get user guide sections
   * No caching to ensure fresh content
   * @returns Array of user guide sections
   */
  async getUserGuide(): Promise<UserGuideSection[]> {
    const response = await this.custom("", "GET");

    // Parse response and return clean sections array
    // getData wraps: { code, success, data: { success, message, data: { sections: [...] } } }
    // So we need response.data.data.sections
    return response?.success && response?.data?.data?.sections
      ? response.data.data.sections
      : [];
  }
}

export const userGuideService = new UserGuideService();
