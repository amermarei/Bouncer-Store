<template>
  <div>
    <div
      class="row product-grid"
      :class="locale === 'ar' ? ' flex-row-reverse' : ''"
    >
      <div class="col-lg-3 d-lg-block d-none">
        <div class="best-seller mt-5">
          <SingleBestSeller />
        </div>
      </div>
      <div class="col-lg-9">
        <div class="products">
          <CarouselTwo class="overflow-hidden rounded-1" />
          <div class="row g-4 text-center">
            <div v-if="loading" class="mt-5 pt-5">
              <i class="fa-solid fa-spinner fa-spin fa-3x"></i>
            </div>
            <div
              class="col-md-6 col-lg-4"
              v-for="item in products"
              :key="item.id.toString()"
              v-else
            >
              <CategoriesItems :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CarouselTwo from "../Carousel/CarouselTwo.vue";
import SingleBestSeller from "../ProductDetails/SingleBestSeller.vue";
import CategoriesItems from "../CategoryItems/CategoriesItems.vue";
import { defineComponent, PropType } from "vue";
import { ProdType } from "../../Store/Store";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "ProductGrid",
  components: { SingleBestSeller, CarouselTwo, CategoriesItems },
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale,
    };
  },
  props: {
    loading: {
      type: Boolean,
    },
    products: {
      required: true,
      type: Object as PropType<ProdType[]>,
    },
  },
});
</script>

<style lang="scss" scoped></style>
