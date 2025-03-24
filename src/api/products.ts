import { Product } from '../types/bakery';


export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
};