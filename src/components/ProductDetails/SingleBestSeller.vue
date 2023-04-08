<template>
  <div class="single-best-seller">
    <h6
      class="disabled text-start fw-bold mb-4"
      :class="locale === 'ar' ? ' text-end' : ''"
    >
      {{ t(`home.best_seller.head`) }}
    </h6>
    <div class="card py-3 text-center text-black">
      <div class="position-relative overflow-hidden image">
        <div
          class="position-absolute top-0 h-100 overlay d-flex align-items-center justify-content-center"
        >
          <span
            ><i
              class="fa-solid fa-cart-shopping fs-4"
              @click="cartStore.addToCart(item)"
            ></i
          ></span>
          <span><i class="fa-regular fa-heart fs-4"></i></span>
        </div>
        <img :src="item?.image" class="w-50 mx-auto mb-4" alt="" />
      </div>
      <router-link
        :to="{
          name: 'ProductDetails',
          params: { productId: 13 },
        }"
        class="text-decoration-none"
      >
        <div class="card-body">
          <p>
            {{ item?.title?.slice(0, 20) }}
          </p>
          <p>
            <span v-for="i of 5" :key="i">
              <template v-if="i <= Math.round(item?.rating?.rate)">
                <i class="fa-solid fa-star text-warning"></i>
              </template>
              <template v-else>
                <i class="fa-solid fa-star disabled"></i>
              </template>
            </span>
          </p>
          <p class="fw-light text-danger mb-0">${{ item?.price }}</p>
        </div>
      </router-link>
    </div>
    <div class="three pt-5 p-3 mt-4">
      <div class="px-2 text-black">
        <h4 class="fw-bold">GoPro Hero 6</h4>
        <p class="mb-0">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
        </p>
        <h4 class="mt-3 mb-3">$299</h4>
        <div class="text-center">
          <img src="../../assets/50051823_540375.png" class="w-100" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { defineComponent } from "vue";
import { ProdType } from "../../Store/Store.js";
import { useCartStore } from "../../Store/CartStore";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "singleBestSeller",
  setup() {
    const { t, locale } = useI18n();
    const item = ref();
    const cartStore = useCartStore();
    onMounted(() => {
      getProduct(13);
    });
    async function getProduct(id: number) {
      let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      item.value = data;
    }
    return {
      item,
      getProduct,
      cartStore,
      t,
      locale,
    };
  },
});
</script>

<style lang="scss" scoped>
.single-best-seller {
  .card {
    img {
      height: 100px;
      object-fit: contain;
    }
    .image {
      transition: 0.5s;
      &:hover .overlay {
        left: 0px;
      }
      .overlay {
        background-color: rgba(255, 255, 255, 0.801);
        transition: 0.5s;
        width: 100%;
        height: 100%;
        left: -100%;
        cursor: pointer;
        & span {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 2px solid #33a0ff;
          margin-left: 5px;
          & i {
            color: #33a0ff;
          }
        }
      }
    }
  }
  & p {
    font-size: 14px;
  }
  .disabled {
    color: #c1c8ce;
  }
  .three {
    background-color: #c1c8ce;
  }
}
</style>
