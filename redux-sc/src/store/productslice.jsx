import items from "../storageProducts/storageProducts.json";
const { createSlice } = require("@reduxjs/toolkit");

const productslice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addBill(state, action) {
      state.products = state.products.map((el) => {
        if (el.id === action.payload.id) {
          el.addionalExpenses =
            Number(el.addionalExpenses) + Number(action.payload.value);
        }
        return el;
      });
    },
    removeBill(state, action) {
      state.products = state.products?.map((el) => {
        if (el.id === action.payload.id) {
          el.addionalExpenses =
            Number(el.addionalExpenses) - Number(action.payload.value);
        }
        return el;
      });
    },
    addToCart(state, action) {
      if (!state.products.find((el) => el.id === action.payload.id)) {
        state.products.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      state.products = state.products.filter(
        (el) => el.id !== action.payload.id
      );
    },
    resetCart(state) {
      state.products = [];
    },
  },
});

export const productAction = productslice.actions;
export default productslice;
