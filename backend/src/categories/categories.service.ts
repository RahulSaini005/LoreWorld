// backend/src/products/categories.service.ts
import { Injectable } from '@nestjs/common';

export type Category = {
  name: string;
  url: string;
};

@Injectable()
export class CategoriesService {
  private categories: Category[] = [];

  getCategories(): Category[] {
    return this.categories;
  }

  createCategory(name: string, url: string) {
    const exists = this.categories.find((c) => c.name === name);
    if (!exists) {
      this.categories.push({ name, url });
    }
    return { name, url };
  }
}
