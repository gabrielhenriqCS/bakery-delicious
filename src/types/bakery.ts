export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    ingredients: string[];
    menuCategoryId: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export type OrderStatus = 'PENDING' | 'IN_PREPARATION' | 'PAYMENT_CONFIRMED' | 'PAYMENT_FAILED' | 'FINISHED';
  export type PaymentMethod = 'PIX' | 'CREDIT_CARD' | 'DEBIT_CARD' | 'CASH';
  export type ConsumptionMethod = 'TAKEAWAY' | 'DELIVERY';