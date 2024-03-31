import Vuex from "vuex";
import { headphones } from "@/helpers/headphones";
import { wirelessHeadphones } from "@/helpers/wirelessHeadphones";

export default new Vuex.Store({
  state: {
    headphones,
    wirelessHeadphones,
    cartProductsData: [],
  },
  getters: {
    totalPrice: (state) => {
      return state.cartProductsData.reduce(
        (total, item) => item.price.new * item.quantity + total,
        0
      );
    },
  },
  mutations: {
    deleteCartProduct(state, productId) {
      state.cartProductsData = state.cartProductsData.filter(
        (item) => item.id !== productId
      );
    },
  },
});
