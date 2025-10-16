import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/fetchProducts';
import type { Product } from '../api/fetchProducts';


type ProductListProps = { category?: string };

export default function ProductList({ category }: ProductListProps) {
  const { data: products = [], isLoading } = useQuery<Product[], Error>({
    queryKey: ['products', category],
    queryFn: () => fetchProducts(category)
  });

  if (isLoading) return <div>Loading...</div>;
  if (!products.length) return <div>No products found.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.sourceId} className="bg-white p-4 shadow rounded">
          <img src={product.imageUrl} alt={product.title} className="h-48 w-full object-cover rounded"/>
          <h2 className="font-bold mt-2">{product.title}</h2>
          <p className="text-gray-600">{product.author}</p>
          <p className="text-blue-600 font-semibold">{product.price}</p>
        </div>
      ))}
    </div>
  );
}
