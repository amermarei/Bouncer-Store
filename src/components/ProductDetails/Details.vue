<template>
  <div class="row details mt-5">
    <div class="row col-lg-9 col-12 g-0 content">
      <div class="col-lg-5 col-md-4 pb-3 text-center text-md-start pb-md-0">
        <div>
          <img :src="product.image" class="w-75" alt="" />
        </div>
      </div>
      <div class="col-lg-7 col-md-8 pb-0">
        <div>
          <h4 class="mb-4 fw-bold">{{ product.title }}</h4>
          <div
            class="d-flex mb-3 border-bottom"
            :class="locale === 'ar' ? 'text-end flex-row-reverse' : ''"
          >
            <p class="me-3" :class="locale === 'ar' ? 'ms-3' : ''">
              <span v-for="i of 5" :key="i">
                <template v-if="i <= Math.round(product.rating.rate)">
                  <i class="fa-solid fa-star text-warning me-2"></i>
                </template>
                <template v-else>
                  <i class="fa-solid fa-star disabled me-2"></i>
                </template>
              </span>
            </p>
            <p class="disabled">
              {{ locale === "ar" ? "ملاحظات 0" : "0 reviews" }}
            </p>
          </div>
          <div class="mb-3 border-bottom">
            <h5
              class="price mb-3"
              :class="locale === 'ar' ? 'text-end me-3' : ''"
            >
              ${{ product.price }}
            </h5>
            <p
              class="me-3 fw-bold"
              :class="locale === 'ar' ? 'd-flex flex-row-reverse' : ''"
            >
              {{ t(`home.product_details.category`) }}
              <span class="ms-3 fw-normal">{{ product.category }}</span>
            </p>
            <p
              class="me-3 fw-bold"
              :class="locale === 'ar' ? 'd-flex flex-row-reverse' : ''"
            >
              {{ t(`home.product_details.availability`) }}
              <span class="ms-3 fw-normal"
                >{{ locale === "ar" ? "متوفر في المخزون" : "In stock" }}
              </span>
            </p>
            <p class="fw-bold" :class="locale === 'ar' ? 'text-end me-3' : ''">
              {{ t(`home.cart.check_out.Shipping_fee`) }}
            </p>
          </div>
          <div class="mb-3 border-bottom">
            <p
              class="me-3 fw-bold"
              :class="
                locale === 'ar' ? 'text-end me-3 d-flex flex-row-reverse' : ''
              "
            >
              {{ t(`home.product_details.count`) }}
              <span class="ms-3 fw-normal">{{ product.rating.count }}</span>
            </p>
            <div class="d-flex justify-content-between">
              <h6 class="p-2 count">
                <span
                  class="me-3 fs-5 btn-color"
                  @click="cartStore.decremQuantity(product)"
                  >-</span
                >
                {{
                  testCart.find((item) => product.id === item.id)
                    ? testCart.find((item) => product.id === item.id)?.quantity
                    : quantity
                }}
                <span
                  class="ms-3 fs-5 btn-color"
                  @click="cartStore.incremQuantity(product)"
                  >+</span
                >
              </h6>
              <div class="d-flex">
                <h6
                  class="py-2 px-3 count btn-color me-3"
                  @click="cartStore.addToCart(product)"
                >
                  <i class="fa-solid fa-cart-shopping me-2"></i>
                  {{ locale === "ar" ? "أضف إلى العربة" : "Add To Cart" }}
                </h6>
                <h6 class="py-2 px-3 count btn-color">
                  <i class="fa-regular fa-heart fs-5"></i>
                </h6>
              </div>
            </div>
          </div>
          <div class="mb-3 d-flex justify-content-between">
            <button class="me-3 btn text-white facebook rounded-0 px-5 py-2">
              <i class="fa-brands fa-facebook-f me-3"></i>
              Share on Facebook
            </button>
            <button class="btn text-white twitter rounded-0 px-5 py-2">
              <i class="fa-brands fa-twitter"></i>
              Share on Twitter
            </button>
          </div>
        </div>
      </div>
      <div class="">
        <div class="information p-4 shadow-sm">
          <h6
            class="mb-4 btn-color fw-bold border-bottom pb-4 position-relative"
            :class="locale === 'ar' ? 'ms-auto' : ''"
          >
            {{ t(`home.product_details.product_information`) }}
          </h6>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
    <div class="row col-lg-3">
      <singleBestSeller />
    </div>
  </div>
</template>

<script lang="ts">
import { useCartStore } from "../../Store/CartStore";
import { ProdType } from "../../Store/Store";
import { storeToRefs } from "pinia";
import singleBestSeller from "./SingleBestSeller.vue";
import { defineComponent, PropType, ref } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "Details",
  setup() {
    const { t, locale } = useI18n();
    const cartStore = useCartStore();
    const { testCart, quantity } = storeToRefs(cartStore);
    return { testCart, cartStore, quantity, t, locale };
  },
  props: {
    product: {
      required: true,
      type: Object as PropType<ProdType>,
    },
  },
  components: {
    singleBestSeller,
  },
});
</script>

<style lang="scss" scoped>
.details {
  .content {
    align-content: flex-start;
    @media screen and (max-width: 767px) {
      img {
        height: 200px;
        width: 200px !important;
      }
    }
    .information {
      background-color: #fafafb;
      h6 {
        width: fit-content;
        h6::after {
          content: "";
          position: absolute;
          left: 1%;
          bottom: 0px;
          width: 15%;
          height: 2px;
          background-color: #33a0ff !important;
        }
      }
    }
  }
  & p {
    font-size: 14px;
  }
  & i {
    font-size: 12px;
  }
  .disabled {
    color: #c1c8ce;
  }
  .border {
    border-color: #f6f7f8 !important;
  }
  .count {
    background-color: #f6f7f8;
  }
  .btn-color {
    color: #33a0ff;
    cursor: pointer;
  }
  .twitter {
    background-color: #03a9f4;
  }
  .facebook {
    background-color: #385c8e;
  }
  .price {
    color: #ff4858;
    span {
      text-decoration: line-through;
    }
  }
}
</style>
