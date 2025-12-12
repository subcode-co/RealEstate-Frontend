import { CrudBase } from "@/shared/lib/crud-base";
import { Blog } from "../types/blog.types";

class BlogsService extends CrudBase<Blog> {
  constructor() {
    super("/blogs");
  }
}

export const blogsService = new BlogsService();
