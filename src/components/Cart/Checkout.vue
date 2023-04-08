<template>
  <div class="row my-5 checkout justify-content-between">
    <div class="col-md-6">
      <div class="voucher text-center text-lg-start my-4 my-lg-0">
        <input
          type="text"
          class="form-control d-inline-block w-50 rounded-0 p-3 border-0"
          :placeholder="t(`home.cart.check_out.voucher_code`)"
        />
        <button
          class="btn btn-primary d-inline-block border-0 rounded-0 p-3 btn-color"
        >
          {{ t(`home.cart.check_out.Redeem`) }}
        </button>
      </div>
    </div>
    <div class="col-md-6">
      <div class="w-75 ms-lg-auto mx-auto">
        <div
          class="d-flex justify-content-between mb-3"
          :class="locale === 'ar' ? ' flex-row-reverse' : ''"
        >
          <h6>{{ t(`home.cart.check_out.subtotal`) }}</h6>
          <h6>${{ totalCount }}</h6>
        </div>
        <div
          class="d-flex justify-content-between mb-4"
          :class="locale === 'ar' ? ' flex-row-reverse' : ''"
        >
          <h6>{{ t(`home.cart.check_out.Shipping_fee`) }}</h6>
          <h6>0</h6>
        </div>
        <div
          class="d-flex justify-content-between border-bottom border-3 pb-3"
          :class="locale === 'ar' ? ' flex-row-reverse' : ''"
        >
          <h6>{{ t(`home.cart.check_out.Coupon`) }}</h6>
          <h6>{{ locale === "ar" ? "لا" : "No" }}</h6>
        </div>
        <div>
          <div
            class="d-flex justify-content-between fw-bold py-4"
            :class="locale === 'ar' ? ' flex-row-reverse' : ''"
          >
            <h2>{{ t(`home.cart.check_out.total`) }}</h2>
            <h2>${{ totalCount.toFixed(2) }}</h2>
          </div>
          <button
            class="btn btn-primary fw-bold form-control border-0 rounded-0 p-3 btn-color"
          >
            {{ t(`home.cart.check_out.checkout`) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useCartStore } from "../../Store/CartStore";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "Checkout",
  setup() {
    const { t, locale } = useI18n();
    const cartStore = useCartStore();
    const { totalCount } = storeToRefs(cartStore);
    return { cartStore, totalCount, t, locale };
  },
});
</script>

<style lang="scss" scoped>
.checkout {
  .btn-color {
    background-color: #33a0ff;
    cursor: pointer;
  }
  .border {
    border-color: #33a0ff !important;
  }
  h6,
  h2 {
    margin-bottom: 0px !important;
  }
}
</style>
