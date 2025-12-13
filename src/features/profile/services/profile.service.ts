import { CrudBase } from "@/shared/lib/crud-base";
import { ProfileData, UpdateProfileRequest } from "../types/profile.types";
import { ApiResponse } from "@/types";

class ProfileService extends CrudBase<ProfileData> {
  constructor() {
    super("/profile");
  }

  // Override to match specific profile response structure if needed, or use generic
  async getProfile(): Promise<ProfileData | null> {
    const response = await this.custom("", "GET");
    if (response?.status && response?.data) {
      const apiData = response.data as any; // The 'data' field in the JSON response
      return {
        ...apiData,
        phone: apiData.mobile || apiData.phone, // Map mobile to phone for consistency
        points: apiData.pointsBalance,
      };
    }
    return null;
  }

  async updateProfile(data: UpdateProfileRequest): Promise<boolean> {
    // Handle file upload if avatar is present
    let payload: any = data;
    let isFormData = false;

    if (data.avatar instanceof File) {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });
      payload = formData;
      isFormData = true;
    }

    const response = await this.custom("", "POST", {
      data: payload,
      isFormData,
    });

    return !!(response?.success || response?.code === 200);
  }
}

export const profileService = new ProfileService();
