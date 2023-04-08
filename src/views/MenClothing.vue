<template>
  <div class="container-md">
    <NavBar />
    <ProductGrid :products="products" :loading="loading" />
    <ContactUs />
    <Links />
  </div>
</template>

<script lang="ts">
import NavBar from "../components/NavBar/NavBar.vue";
import ContactUs from "../components/Footer/ContactUs.vue";
import Links from "../components/Footer/Links.vue";
import ProductGrid from "../components/ProductGrid/ProductGrid.vue";
import { useCategoriesStore } from "../Store/Store";
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "Store",
  setup() {
    const categoriesStore = useCategoriesStore();
    const { loading, products } = storeToRefs(categoriesStore);
    categoriesStore.getProducts("men's clothing", "category");
    return { categoriesStore, products, loading };
  },
  components: {
    NavBar,
    ContactUs,
    Links,
    ProductGrid,
  },
});
</script>
