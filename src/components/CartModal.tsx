import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}


interface CartModalProps {
  cartItems: Product[];
  total: number;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  isDelivery: boolean;
  setIsDelivery: (delivery: boolean) => void;
  deliveryAddress: string;
  setDeliveryAddress: (address: string) => void;
  removeFromCart: (all: Product) => void;
  checkout: () => void;
  setShowCart: (show: boolean) => void;
}

export default function CartModal() {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [showCart, setShowCart] = useState<boolean>(false);
    const [paymentMethod, setPaymentMethod] = useState<string>('pix');
    const [isDelivery, setIsDelivery] = useState<boolean>(false);
    const [deliveryAddress, setDeliveryAddress] = useState<string>('');
    const [total, setTotal] = useState<number>(0);
    const handleClickCheckout = () => {
      if (isDelivery && !deliveryAddress) {
        alert('Por favor, informe o endereço de entrega');
      }
      alert('Compra finalizada com sucesso!');
      setCartItems([]);
      setShowCart(false);
    };
    const handleClickRemoveFromCart = (product: Product) => {
      setCartItems(cartItems.filter(item => item.id !== product.id));
    };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
        {cartItems.length === 0 ? (
          <div className="text-center py-4">Carrinho vazio</div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => handleClickRemoveFromCart(item)} className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
            <div className="border-t pt-4">
              <p className="text-xl font-bold">Total: R$ {total.toFixed(2)}</p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Forma de Pagamento:</h3>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="pix">PIX</option>
                <option value="credit">Cartão de Crédito</option>
                <option value="debit">Cartão de Débito</option>
                <option value="cash">Dinheiro</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isDelivery}
                  onChange={(e) => setIsDelivery(e.target.checked)}
                  className="mr-2"
                />
                Delivery
              </label>
              {isDelivery && (
                <div className="mt-2">
                  <textarea
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Digite seu endereço completo"
                    rows={3}
                    className="w-full p-2 border rounded"
                  />
                </div>
              )}
            </div>
            <div className="mt-6 flex space-x-4">
              <button
                onClick={() => setShowCart(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
              >
                Fechar
              </button>
              <button
                onClick={handleClickCheckout}
                className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors"
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    );  
};

