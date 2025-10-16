import axios from 'axios';

export type Product = {
  sourceId: string;
  title: string;
  author: string;
  price: string;
  imageUrl: string;
  category: string;
};

export const fetchProducts = async (category?: string): Promise<Product[]> => {
  try {
    const url = category ? `/api/products?category=${encodeURIComponent(category)}` : '/api/products';
    const response = await axios.get<Product[]>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
