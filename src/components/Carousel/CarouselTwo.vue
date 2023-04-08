<template>
  <div
    class="carouselTwo w-100 h-50 position-relative my-5"
    :class="locale === 'ar' ? ' text-end' : ''"
  >
    <div class="container">
      <div class="row">
        <div
          class="text-white col-md-6 py-4 d-flex flex-column align-self-center"
        >
          <div class="w-75 mx-auto">
            <h2 class="h1">{{ t(`home.carousel2.head`) }}</h2>
            <p class="lh-lg">
              {{ t(`home.carousel2.desc`) }} <br />
              {{ t(`home.carousel2.desc2`) }}
            </p>
            <p
              class="fw-bold mt-4 more"
              :class="locale === 'ar' ? ' ms-auto' : ''"
            >
              {{ t(`home.carousel2.more`) }}
            </p>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <img src="../../assets/pic.png" class="w-75" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "carouselTwo",
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
.carouselTwo {
  background: #2e90e5;
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
  img {
    margin-top: -13%;
    height: 120%;
  }
}
</style>
