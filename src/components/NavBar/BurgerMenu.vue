<template>
  <div class="burger position-relative">
    <i
      class="fa-solid fa-bars fs-3 cursor-pointer"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasWithBothOptions"
      aria-controls="offcanvasWithBothOptions"
    ></i>
    <div
      class="offcanvas offcanvas-end"
      data-bs-scroll="true"
      tabindex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          <img src="../../assets/logoo.png" alt="" class="w-50" />
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="align-items-center mb-5 justify-content-between d-flex">
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
                  {{ cartLen }}
                </span>
              </span>
            </router-link>
            <span class="ms-2 secondary">${{ cartCount.toFixed(2) }}</span>
          </p>
        </div>
        <ul class="list-unstyled" :class="locale === 'ar' ? 'text-end' : ''">
          <li
            class="nav-item me-4 text-uppercase mb-3"
            v-for="(category, i) in categories"
            :key="i"
          >
            <router-link
              :to="{
                name: `${Routes[i]}`,
              }"
              :class="i === 0 ? '.router-link-active' : ''"
              class="text-decoration-none fw-bold text-black me-lg-3"
            >
              {{ locale === "ar" ? t(`home.nav.${Routes[i]}`) : category }}
            </router-link>
          </li>
        </ul>
        <div class="mt-5 fw-light d-flex justify-content-between">
          <div class="btn-group">
            <p
              data-bs-toggle="dropdown"
              aria-expanded="false"
              class="me-3 mb-0"
            >
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { number } from "@intlify/core-base";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "burger",
  setup() {
    const { t, locale } = useI18n();
    return {
      locale,
      t,
    };
  },
  props: {
    categories: {
      required: true,
    },
    Routes: {
      required: true,
      type: Array,
    },
    cartLen: {
      required: true,
      type: Number,
    },
    cartCount: {
      required: true,
      type: Number,
    },
  },
});
</script>

<style lang="scss" scoped>
.burger {
  z-index: 999999999;
  .cursor-pointer {
    cursor: pointer;
  }
  .router-link-active {
    color: #33a0ff !important;
  }
  .cart {
    cursor: pointer;
    span {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
