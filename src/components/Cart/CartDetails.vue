<template>
  <div class="cart">
    <table
      class="table table-responsive"
      :class="locale === 'ar' ? ' direc-rtl' : ''"
    >
      <thead>
        <tr class="p-0 pb-4">
          <th scope="col">{{ t(`home.cart.product`) }}</th>
          <th scope="col">{{ t(`home.cart.price`) }}</th>
          <th scope="col">{{ t(`home.cart.qty`) }}</th>
          <th scope="col">{{ t(`home.cart.unit_price`) }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in testCart" :key="item.id">
          <td scope="row">
            <span
              class="text-danger btn-color mx-3"
              @click="cartStore.removeProduct(item)"
              >x</span
            >
            <img :src="item.image" alt="" />
            <p class="d-inline-block mx-3">
              {{ item?.title.toLowerCase().slice(0, 60) }}
            </p>
          </td>
          <td>${{ (item?.price * item?.quantity).toFixed(2) }}</td>
          <td>
            <p class="p-2 px-3 count mb-0">
              <span
                class="mx-3 fs-5 btn-color"
                @click="cartStore.decremQuantity(item)"
                >-</span
              >
              {{ item?.quantity }}
              <span
                class="mx-3 fs-5 btn-color"
                @click="cartStore.incremQuantity(item)"
                >+</span
              >
            </p>
          </td>
          <td>${{ item?.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { useCartStore } from "../../Store/CartStore";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "CartDetails",
  setup() {
    const { t, locale } = useI18n();
    const cartStore = useCartStore();
    const { testCart } = storeToRefs(cartStore);
    return { testCart, cartStore, t, locale };
  },
});
</script>

<style lang="scss" scoped>
.cart {
  .direc-rtl {
    direction: rtl;
  }
  table {
    thead {
      th {
        padding-bottom: 20px !important;
      }
    }
    tbody {
      img {
        height: 100px;
        width: 100px;
        object-fit: contain;
      }
      tr {
        vertical-align: middle;
      }
    }
    .count {
      background-color: #f6f7f8;
      width: fit-content;
    }
    .btn-color {
      color: #33a0ff;
      cursor: pointer;
    }
  }
}
</style>
