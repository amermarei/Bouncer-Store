<template>
  <div class="container text-center">
    <NavBar />
    <h2 class="mb-3">Error Page</h2>
    <router-link to="home"
      ><button class="btn btn-primary mt-3">Back To Home Page</button>
    </router-link>
    <ContactUs />
    <Links />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../components/NavBar/NavBar.vue";
import ContactUs from "../components/Footer/ContactUs.vue";
import Links from "../components/Footer/Links.vue";
export default defineComponent({});
</script>
