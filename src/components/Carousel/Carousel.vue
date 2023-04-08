<template>
  <div class="carousel w-100 h-50" :class="locale === 'ar' ? ' text-end' : ''">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="text-white w-100 w-lg-50 py-3">
            <h2 class="fw-bold mb-5">{{ t(`home.carousel.head`) }}</h2>
            <p>
              {{ t(`home.carousel.desc`) }}
            </p>
            <p
              class="fw-bold mt-5 more"
              :class="locale === 'ar' ? ' ms-auto' : ''"
            >
              {{ t(`home.carousel.more`) }}
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div>
            <img src="../../assets/mobile.png" class="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "carousel",
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale,
    };
  },
});
</script>

<style lang="scss" scoped>
.carousel {
  background: rgb(255, 72, 88);
  background: linear-gradient(
    90deg,
    rgba(255, 72, 88, 1) 0%,
    rgba(138, 46, 198, 1) 100%,
    rgba(34, 38, 42, 1) 100%
  );
  .more {
    position: relative;
    width: fit-content;
    &::after {
      position: absolute;
      content: "";
      bottom: -2px;
      left: 0px;
      width: 100%;
      height: 3px;
      background-color: white;
    }
  }
}
</style>
