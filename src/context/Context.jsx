import { createContext, useContext, useReducer } from "react";
import { cartReducer, ProductReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: "1",
      name: "Ergonomic Concrete Chair",
      price: "54.50",
      image:
        "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXJnb25vbWljJTIwQ29uY3JldGUlMjBDaGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      inStock: 7,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "2",
      name: "Luxury Granite Soap",
      price: "29.99",
      image:
        "https://images.unsplash.com/photo-1454873019514-eae2f086587a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8THV4dXJ5JTIwR3Jhbml0ZSUyMFNvYXB8ZW58MHx8MHx8fDA%3D",
      inStock: 5,
      fastDelivery: false,
      ratings: 3,
    },
    {
      id: "3",
      name: "Awesome Rubber Pants",
      price: "22.90",
      image:
        "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXdlc29tZSUyMFJ1YmJlciUyMFBhbnRzfGVufDB8fDB8fHww",
      inStock: 3,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "4",
      name: "Handcrafted Metal Shirt",
      price: "18.75",
      image:
        "https://media.istockphoto.com/id/475704910/photo/blue-jean-shirt.webp?a=1&b=1&s=612x612&w=0&k=20&c=CurkIFF6U0W-unj-jpGoMas-0_Ni6hOaP5_-ebaE7L8=",
      inStock: 6,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "5",
      name: "Sleek Wooden Keyboard",
      price: "39.99",
      image:
        "https://images.unsplash.com/photo-1536059540012-f2ed455bc0b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2xlZWslMjBXb29kZW4lMjBLZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
      inStock: 4,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "6",
      name: "Intelligent Fresh Carrot",
      price: "12.49",
      image:
        "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENhcnJvdHxlbnwwfHwwfHx8MA%3D%3D",
      inStock: 8,
      fastDelivery: true,
      ratings: 3,
    },
    {
      id: "7",
      name: "Rustic Plastic Soap",
      price: "5.99",
      image:
        "https://plus.unsplash.com/premium_photo-1736646021174-69bd1f96dc92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UnVzdGljJTIwUGxhc3RpYyUyMFNvYXB8ZW58MHx8MHx8fDA%3D",
      inStock: 10,
      fastDelivery: false,
      ratings: 4,
    },
    {
      id: "8",
      name: "Refined Cotton Cheese",
      price: "9.99",
      image:
        "https://plus.unsplash.com/premium_photo-1687975124229-e3ae49ea2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlfGVufDB8fDB8fHww",
      inStock: 0,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: "9",
      name: "Small Metal Pizza",
      price: "21.50",
      image:
        "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1ldGFsJTIwUGl6emF8ZW58MHx8MHx8fDA%3D",
      inStock: 1,
      fastDelivery: false,
      ratings: 2,
    },
    {
      id: "10",
      name: "Ergonomic Metal Shoes",
      price: "67.40",
      image:
        "https://images.unsplash.com/photo-1509717030864-56dcbd57463e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1ldGFsJTIwU2hvZXN8ZW58MHx8MHx8fDA%3D",
      inStock: 0,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "11",
      name: "Practical Cotton Pizza",
      price: "23.80",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1ldGFsJTIwUGl6emF8ZW58MHx8MHx8fDA%3D",
      inStock: 7,
      fastDelivery: false,
      ratings: 3,
    },
    {
      id: "12",
      name: "Handcrafted Steel Bike",
      price: "100.00",
      image:
        "https://plus.unsplash.com/premium_photo-1736286629990-d5eab5f88385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZGljcmFmdGVkJTIwU3RlZWwlMjBCaWtlfGVufDB8fDB8fHww",
      inStock: 4,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: "13",
      name: "Unbranded Rubber Mouse",
      price: "12.00",
      image:
        "https://plus.unsplash.com/premium_photo-1724745799156-d186120d547c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VW5icmFuZGVkJTIwUnViYmVyJTIwTW91c2V8ZW58MHx8MHx8fDA%3D",
      inStock: 0,
      fastDelivery: true,
      ratings: 4,
    },
  ];

  console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(ProductReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
