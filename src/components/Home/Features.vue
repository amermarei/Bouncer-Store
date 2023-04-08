<template>
  <div class="container my-5 Features">
    <div class="row justify-content-center g-4">
      <div class="col-md-6 col-lg-4 text-center">
        <div>
          <img src="../../assets/shipping.png" alt="" />
          <h4 class="mb-3 mt-4">{{ t(`home.Features.shipping`) }}</h4>
          <p>
            {{ t(`home.Features.desc`) }}
          </p>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 text-center">
        <div>
          <img src="../../assets/refund.png" alt="" />
          <h4 class="mb-3 mt-4">{{ t(`home.Features.refund`) }}</h4>
          <p>
            {{ t(`home.Features.desc`) }}
          </p>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 text-center">
        <div>
          <img src="../../assets/support.png" alt="" />
          <h4 class="mb-3 mt-4">{{ t(`home.Features.support`) }}</h4>
          <p>
            {{ t(`home.Features.desc`) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "Features",
  setup() {
    const { t, locale } = useI18n();
    const data = ref([
      { head: "FREE SHIPPING", image: "shipping" },
      { head: "100% REFUND", image: "refund" },
      { head: "SUPPORT 24/7", image: "support" },
    ]);
    return { data, t, locale };
  },
});
</script>

<style lang="scss" scoped>
.Features {
  & p {
    font-size: 14px;
  }
  & img {
    height: 50px;
  }
}
</style>
