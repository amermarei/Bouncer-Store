<template>
  <div class="container py-5 my-5 text-center best-seller">
    <h2>{{ t(`home.best_seller.head`) }}</h2>
    <ul
      class="nav mb-3 mt-4 justify-content-center"
      :class="locale === 'ar' ? ' flex-row-reverse' : ''"
    >
      <li class="nav-item" v-for="(category, i) in categories" :key="i">
        <a
          :class="`me-3 text-decoration-none text-black fw-bold  ${
            active === i ? 'active' : ''
          }`"
          @click="
            setActive(i);
            i === 0
              ? categoriesStore.getProducts(``, '')
              : categoriesStore.getProducts(links[i], 'category');
          "
        >
          {{ t(`home.best_seller.links.${categories[i]}`) }}
        </a>
      </li>
    </ul>
    <div>
      <div>
        <div class="row g-4">
          <div v-if="categoriesStore.loading" class="mt-5 pt-5">
            <i class="fa-solid fa-spinner fa-spin fa-3x"></i>
          </div>
          <div
            class="col-md-6 col-lg-4 col-xl-3"
            v-for="item in products.slice(0, 8)"
            :key="item.id.toString()"
            v-else
          >
            <CategoriesItems :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useCategoriesStore } from "../../Store/Store";
import CategoriesItems from "../CategoryItems/CategoriesItems.vue";
export default defineComponent({
  name: "BestSeller",
  setup() {
    const categoriesStore = useCategoriesStore();
    const { products } = storeToRefs(categoriesStore);
    const { t, locale } = useI18n();
    const active = ref<number>(0);
    const categories = ref([
      "All",
      "electronics",
      "jewelery",
      "menClothing",
      "womenClothing",
    ]);
    const links = ref([
      "All",
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ]);
    categoriesStore.getProducts("", "");
    function setActive(i: number) {
      active.value = i;
    }
    return {
      categoriesStore,
      categories,
      active,
      setActive,
      links,
      products,
      t,
      locale,
    };
  },
  components: {
    CategoriesItems,
  },
});
</script>

<style lang="scss" scoped>
.best-seller {
  ul {
    .active {
      color: #33a0ff !important;
    }
    & a {
      cursor: pointer;
    }
  }
}
</style>
