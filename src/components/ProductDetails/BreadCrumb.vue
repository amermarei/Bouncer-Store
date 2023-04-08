<template>
  <div class="d-flex justify-content-center text-center">
    <nav aria-label="breadcrumb ">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link
            :to="{
              name: `home`,
            }"
            class="link"
            >Home</router-link
          >
        </li>
        <li class="breadcrumb-item">
          <router-link
            :to="{
              name: `${route}`,
            }"
            class="link"
            >{{ category }}</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ name?.slice(0, 40) }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BreadCrumb",
  props: ["category", "name", "route"],
});
</script>

<style lang="scss" scoped>
nav {
  padding: 0 !important;
  .breadcrumb-item:not(:last-of-type) .link {
    color: #33a0ff !important;
    text-decoration: none !important;
  }
}
</style>
