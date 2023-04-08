<template>
  <div class="my-5 text-center">
    <h2 class="text-center my-5">
      {{ t(`home.product_details.related_product`) }}
    </h2>
    <div class="row g-4">
      <div v-if="loading" class="mt-5 pt-5">
        <i class="fa-solid fa-spinner fa-spin fa-3x"></i>
      </div>
      <div
        class="col-md-6 col-lg-4 col-xl-3"
        v-for="item in products"
        :key="item.id"
        v-else
        @click="reloadPage"
      >
        <CategoriesItems :item="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useCategoriesStore, ProdType } from "../../Store/Store";
import { PropType, ref } from "vue";
import CategoriesItems from "../CategoryItems/CategoriesItems.vue";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "relatedProducts",
  setup(props) {
    const { t, locale } = useI18n();
    const categoriesStore = useCategoriesStore();
    const { loading, products } = storeToRefs(categoriesStore);
    const product = ref(props.product);
    categoriesStore.getProducts(product.value.category, "category");
    function reloadPage() {
      window.location.reload();
    }
    return {
      categoriesStore,
      props,
      product,
      loading,
      products,
      reloadPage,
      t,
      locale,
    };
  },
  props: {
    product: {
      required: true,
      type: Object as PropType<ProdType>,
    },
  },
  components: { CategoriesItems },
});
</script>

<style lang="scss" scoped></style>
