import { CrudBase } from "@/shared/lib/crud-base";
import { Blog } from "../types/blog.types";

class BlogsService extends CrudBase<Blog> {
  constructor() {
    super("/blogs");
  }

  async getBlogs(): Promise<Blog[]> {
    const response = await this.getAll();
    if (!response?.success || !response?.data) return [];

    const data = response.data;
    if (Array.isArray(data)) {
      return data;
    }

    // Check if it's a paginated response
    if (
      data &&
      typeof data === "object" &&
      "data" in data &&
      Array.isArray((data as any).data)
    ) {
      return (data as any).data;
    }

    return [];
  }
}

export const blogsService = new BlogsService();
