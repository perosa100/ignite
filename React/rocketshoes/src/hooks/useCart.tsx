import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const LOCAL_STORAGE_CART_KEY = '@RocketShoes:cart';

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem(LOCAL_STORAGE_CART_KEY);

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const [stockResponse, productResponse] = await Promise.all([
        api.get(`stock/${productId}`),
        api.get(`products/${productId}`),
      ]);

      if (stockResponse.data.amount <= 1) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      const updatedCart = [...cart];
      const foundProduct = updatedCart.find(
        product => product.id === productId
      );

      if (foundProduct) {
        foundProduct.amount += 1;
      } else {
        updatedCart.push({
          ...productResponse.data,
          amount: 1,
        });
      }

      setCart(updatedCart);
      localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(updatedCart));
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const foundProductIndex = cart.findIndex(
        product => product.id === productId
      );

      if (foundProductIndex === -1) {
        throw new Error('Product not found');
      }

      const updatedCart = cart.filter(
        (_, index) => index !== foundProductIndex
      );

      setCart(updatedCart);
      localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(updatedCart));
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    if (amount <= 0) {
      return;
    }

    try {
      const stockResponse = await api.get(`stock/${productId}`);
      const availableStockAmount = stockResponse.data.amount;

      if (availableStockAmount - amount < 0) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      const updatedCart = cart.map(product => ({
        ...product,
        amount: product.id === productId ? amount : product.amount,
      }));

      setCart(updatedCart);
      localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(updatedCart));
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
