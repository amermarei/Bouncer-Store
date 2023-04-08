<template>
  <div class="card py-3 text-center">
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
      <img :src="item.image" class="w-50 mx-auto" alt="" />
    </div>
    <router-link
      :to="{
        name: 'ProductDetails',
        params: { productId: item.id },
      }"
      class="text-decoration-none text-black"
    >
      <div class="card-body">
        <p>
          {{ item.title.slice(0, 37) }}
        </p>
        <p>
          <span v-for="i of 5" :key="i">
            <template v-if="i <= Math.round(item.rating.rate)">
              <i class="fa-solid fa-star text-warning"></i>
            </template>
            <template v-else>
              <i class="fa-solid fa-star disabled"></i>
            </template>
          </span>
        </p>
        <p class="fw-light text-danger mb-0">${{ item.price }}</p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { useCartStore } from "../../Store/CartStore";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoriesItems",
  setup() {
    const cartStore = useCartStore();
    return {
      cartStore,
    };
  },
  props: ["item"],
});
</script>

<style lang="scss" scoped>
.card {
  img {
    height: 100px;
    object-fit: contain;
  }
  & p {
    font-size: 14px;
  }
  .disabled {
    color: #c1c8ce;
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
      & span {
        cursor: pointer;
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
</style>
