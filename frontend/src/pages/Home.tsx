import Header from "../components/Header";
import { products } from "../data/products";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="grid grid-cols-3 gap-6 p-6">
        {products.map((p: any) => (
          <div key={p.id} className="bg-white p-4 shadow rounded">
            <img
              src={p.imageUrl}
              alt={p.title}
              className="h-48 w-full object-cover mb-2 rounded"
            />
            <h2 className="font-bold text-lg">{p.title}</h2>
            <p className="text-sm text-gray-600">{p.author}</p>
            <p className="text-green-700 font-semibold mt-1">{p.price}</p>
            <p className="text-xs text-gray-500 mt-1">{p.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
