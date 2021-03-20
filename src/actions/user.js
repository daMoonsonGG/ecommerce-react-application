import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT,
} from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function addCartProduct(product) {
  return {
    type: ADD_CART_PRODUCT,
    payload: product,
  };
}

export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        _id: 0,
        product: {
          _id: 0,
          title: "JavaScript in the Browser",
          description:
            "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
          price: 1.99,
          belongsTo: [0, 1],
        },
        quantity: 2,
      },
      {
        _id: 1,
        product: {
          _id: 1,
          title: "Graph Database",
          description:
            "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
          price: 1.99,
          belongsTo: [0, 6],
        },
        quantity: 1,
      },
    ],
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 8.02,
        orderNumber: "A004847493",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 1,
        total: 18.02,
        orderNumber: "B01840724",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "William Hudgens",
          shippingAddress: "21455 West State Street",
        },
      },
      {
        _id: 2,
        total: 8.89,
        orderNumber: "C723589475",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Sophie Hudgens",
          shippingAddress: "2133 West State Street",
        },
      },
      {
        _id: 3,
        total: 8.67,
        orderNumber: "D937423074",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Philipo",
          shippingAddress: "2344 West State Street",
        },
      },
      {
        _id: 4,
        total: 28.02,
        orderNumber: "T8923658962",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 5,
        total: 48.02,
        orderNumber: "S723472304",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Julliete Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 6,
        total: 86.02,
        orderNumber: "H72893472375",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Alex Alonso",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 7,
        total: 128.02,
        orderNumber: "F57872350",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Marlon Gonsales",
          shippingAddress: "1234 West State Street",
        },
      },
    ],
  };
}
