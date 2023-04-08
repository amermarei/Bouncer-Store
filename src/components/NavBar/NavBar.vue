<template>
  <div class="mb-5 container-lg Navbar position-relative pt-3">
    <div
      class="px-md-5 ps-1 d-flex justify-content-between align-items-center top-0 py-3 position-fixed start-0 Nav"
      :class="{ change_color: scrollPosition > 50 }"
    >
      <div class="ps-md-5 mx-md-5 fw-light d-none d-md-flex">
        <div class="btn-group">
          <p data-bs-toggle="dropdown" aria-expanded="false" class="me-3 mb-0">
            {{ t(`lang.lang`) }}
            <i class="fa-solid fa-caret-down ms-2"></i>
          </p>
          <ul class="dropdown-menu">
            <li @click="locale = 'en'">
              <p class="dropdown-item">{{ t(`lang.EN`) }}</p>
            </li>
            <li @click="locale = 'ar'">
              <p class="dropdown-item mb-0">{{ t(`lang.AR`) }}</p>
            </li>
          </ul>
        </div>
        <p class="me-3 mb-0">
          {{ locale === "en" ? "USD" : "دولار" }}
          <i class="fa-solid fa-caret-down ms-2"></i>
        </p>
      </div>
      <div class="pe-1 pe-md-5 align-items-center me-md-5 d-none d-md-flex">
        <p class="mb-0 me-3">
          <img src="../../assets/profile_close_2.png" alt="" class="me-2" />{{
            t("home.nav.my_profile")
          }}
        </p>
        <p class="mb-0">
          <router-link
            :to="{
              name: 'Cart',
            }"
            class="text-decoration-none"
          >
            <span class="me-2 cart position-relative">
              <img src="../../assets/bag_3.png" alt="" />
              <span
                class="position-absolute top-0 start-100 translate-middle text-center bg-danger rounded-circle text-white"
              >
                {{ testCart.length }}
              </span>
            </span>
          </router-link>
          <span class="ms-2 secondary">${{ totalCount.toFixed(2) }}</span>
          <i class="fa-solid fa-magnifying-glass ms-4"></i>
        </p>
      </div>
    </div>
    <div
      class="mt-md-5 text-md-center pt-4 d-flex d-md-block justify-content-between align-items-center"
    >
      <img src="../../assets/logoo.png" alt="" />
      <div>
        <BurgerMenu
          class="d-md-none"
          :categories="categories"
          :Routes="Routes"
          :cartLen="testCart.length"
          :cartCount="totalCount"
        />
      </div>
    </div>
    <ul
      class="nav mb-3 mt-5 justify-content-center d-none d-md-flex"
      :class="locale === 'ar' ? ' flex-row-reverse' : ''"
    >
      <li
        class="nav-item me-3 text-uppercase"
        v-for="(category, i) in categories"
        :key="i"
      >
        <router-link
          :to="{
            name: `${Routes[i]}`,
          }"
          :class="i === 0 ? '.router-link-active' : ''"
          class="text-decoration-none fw-bold me-xl-3"
        >
          {{ locale === "ar" ? t(`home.nav.${Routes[i]}`) : category }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { useCartStore } from "../../Store/CartStore";
import { storeToRefs } from "pinia";
import { defineComponent, ref, onMounted, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import BurgerMenu from "./BurgerMenu.vue";
export default defineComponent({
  name: "Navbar",
  setup() {
    const scrollPosition = ref<number>(0);
    const { t, locale } = useI18n();
    const categories = ref([
      "Home",
      "Store",
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ]);
    const Routes = ref([
      "home",
      "store",
      "electronics",
      "jewelery",
      "menClothing",
      "womenClothing",
    ]);
    const cartStore = useCartStore();
    const { testCart, totalCount } = storeToRefs(cartStore);
    onMounted(() => {
      window.addEventListener("scroll", updateScroll);
    });
    watchEffect(() => {
      localStorage.setItem("language", locale.value);
    });
    function updateScroll() {
      scrollPosition.value = window.scrollY;
    }
    return {
      locale,
      t,
      testCart,
      cartStore,
      totalCount,
      categories,
      Routes,
      scrollPosition,
      updateScroll,
    };
  },
  components: {
    BurgerMenu,
  },
});
</script>

<style lang="scss" scoped>
.Navbar {
  .change_color {
    background-color: #33a0ff;
    color: white !important;
  }
  @media screen and (max-width: 768px) {
    .change_color {
      background-color: transparent;
      color: white !important;
    }
  }
  .Nav {
    z-index: 999999;
    transition: 0.5s;
    min-width: 100%;
  }
  .cart {
    cursor: pointer;
    span {
      width: 20px;
      height: 20px;
    }
  }
  li {
    & a {
      cursor: pointer;
      color: black;
    }
  }
  .router-link-active {
    color: #33a0ff !important;
  }
  .dropdown-menu {
    --bs-dropdown-min-width: 4rem !important;
  }
}
</style>
