<template>
  <div>
    <button @click="addItemToCart">Adicionar ao Carrinho</button>
    <p>Total de itens no carrinho: {{ cartItemCount }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ShoppingCart',
  methods: {
    ...mapActions(['addToCart']),  // Vincula a ação do Vuex
    addItemToCart() {
      const sampleProduct = {
        id: 1,
        name: 'Produto Teste',
        price: 10.0,
      };
      console.log('Produto sendo adicionado ao carrinho:', sampleProduct);
      this.addToCart(sampleProduct);  // Chama a ação para adicionar o produto ao carrinho
    },
  },
  computed: {
    ...mapGetters(['cartItemCount']),  // Mapeia o getter do Vuex
  },
};
</script>
