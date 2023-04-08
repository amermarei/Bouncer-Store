<template>
  <div class="container-md">
    <NavBar />
    <CartDetails />
    <Checkout />
    <ContactUs />
    <Links />
  </div>
</template>

<script lang="ts">
import ContactUs from "../components/Footer/ContactUs.vue";
import Links from "../components/Footer/Links.vue";
import NavBar from "../components/NavBar/NavBar.vue";
import CartDetails from "../components/Cart/CartDetails.vue";
import Checkout from "../components/Cart/Checkout.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Cart",
  components: {
    NavBar,
    ContactUs,
    Links,
    CartDetails,
    Checkout,
  },
});
</script>
