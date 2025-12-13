import { CrudBase } from "@/shared/lib/crud-base";
import { NewsletterSubscription } from "../types/newsletter.types";

class NewsletterService extends CrudBase<NewsletterSubscription> {
  constructor() {
    super("/newsletter");
  }

  async subscribe(email: string): Promise<boolean> {
    const response = await this.create({ email });
    return response?.success || false;
  }
}

export const newsletterService = new NewsletterService();
