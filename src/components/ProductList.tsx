import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">R$ {product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-md w-full hover:bg-yellow-700 transition-colors"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;