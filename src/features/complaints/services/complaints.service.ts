import { CrudBase } from "@/shared/lib/crud-base";
import { Complaint, ComplaintType } from "../types/complaint.types";

class ComplaintsService extends CrudBase<Complaint> {
  constructor() {
    super("/complaints");
  }

  async getComplaintTypes(): Promise<ComplaintType[]> {
    const response = await this.custom("/types", "GET");
    return response?.success && response?.data
      ? Array.isArray(response.data)
        ? response.data
        : response.data.data || []
      : [];
  }

  async submitComplaint(data: Omit<Complaint, "id">): Promise<boolean> {
    const response = await this.create(data);
    return response?.success || false;
  }
}

export const complaintsService = new ComplaintsService();
