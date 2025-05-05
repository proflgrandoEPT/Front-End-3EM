import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product); // Adiciona um item ao carrinho
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product); // Chama a mutação para adicionar ao carrinho
    },
  },
  getters: {
    cartItemCount: (state) => state.cart.length, // Retorna a quantidade de itens no carrinho
  },
});
