<template>
  <div class="container">
    <NavBar />
    <BreadCrumb
      :name="singleProduct.title"
      :category="singleProduct.category"
      :route="
        singleProduct.category !== `women's clothing` &&
        singleProduct.category !== `men's clothing`
          ? singleProduct.category
          : singleProduct.category === `men's clothing`
          ? `menClothing`
          : `womenClothing`
      "
    />
    <Details :product="singleProduct" />
    <relatedProducts :product="singleProduct" />
    <ContactUs />
    <Links />
  </div>
</template>

<script lang="ts">
import { useCategoriesStore } from "../../Store/Store";
import { useRoute } from "vue-router";
import NavBar from "../NavBar/NavBar.vue";
import Details from "./Details.vue";
import relatedProducts from "./RelatedProducts.vue";
import ContactUs from "../../components/Footer/ContactUs.vue";
import Links from "../../components/Footer/Links.vue";
import { storeToRefs } from "pinia";
import BreadCrumb from "./BreadCrumb.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductDetails",
  setup() {
    const categoriesStore = useCategoriesStore();
    const { singleProduct } = storeToRefs(categoriesStore);
    const route = useRoute();
    categoriesStore.getSingleProduct(+route.params.productId);
    return {
      categoriesStore,
      route,
      singleProduct,
    };
  },
  components: {
    NavBar,
    Details,
    relatedProducts,
    ContactUs,
    Links,
    BreadCrumb,
  },
});
</script>

<style lang="scss" scoped></style>
