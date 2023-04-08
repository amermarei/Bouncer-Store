<template>
  <div class="container my-5 Links" :class="locale === `ar` ? ` text-end` : ``">
    <div
      class="row g-4 mt-5"
      :class="locale === 'ar' ? ' flex-row-reverse' : ''"
    >
      <div class="col-md-3 col-6 col-lg-2">
        <div>
          <h5 class="mb-3">{{ t("footer.links.informations") }}</h5>
          <p class="mb-2">{{ t("footer.links.About_Us") }}</p>
          <p class="mb-2">{{ t("footer.links.informations") }}</p>
          <p class="mb-2">{{ t("footer.links.Privacy_Policy") }}</p>
          <p class="mb-2">{{ t("footer.links.Terms") }}</p>
        </div>
      </div>
      <div class="col-md-3 col-6 col-lg-2">
        <div>
          <h5 class="mb-3">{{ t("footer.links.Service") }}</h5>
          <p class="mb-2">{{ t("footer.links.About_Us") }}</p>
          <p class="mb-2">{{ t("footer.links.informations") }}</p>
          <p class="mb-2">{{ t("footer.links.Privacy_Policy") }}</p>
          <p class="mb-2">{{ t("footer.links.Terms") }}</p>
        </div>
      </div>
      <div class="col-md-3 col-6 col-lg-2">
        <div>
          <h5 class="mb-3">{{ t("footer.links.Extras") }}</h5>
          <p class="mb-2">{{ t("footer.links.About_Us") }}</p>
          <p class="mb-2">{{ t("footer.links.informations") }}</p>
          <p class="mb-2">{{ t("footer.links.Privacy_Policy") }}</p>
          <p class="mb-2">{{ t("footer.links.Terms") }}</p>
        </div>
      </div>
      <div class="col-md-3 col-6 col-lg-2">
        <div>
          <h5 class="mb-3">{{ t("footer.links.My_Account") }}</h5>
          <p class="mb-2">{{ t("footer.links.About_Us") }}</p>
          <p class="mb-2">{{ t("footer.links.informations") }}</p>
          <p class="mb-2">{{ t("footer.links.Privacy_Policy") }}</p>
          <p class="mb-2">{{ t("footer.links.Terms") }}</p>
        </div>
      </div>
      <div class="col-md-3 col-6 col-lg-2">
        <div>
          <h5 class="mb-3">{{ t("footer.links.Userful_Links") }}</h5>
          <p class="mb-2">{{ t("footer.links.About_Us") }}</p>
          <p class="mb-2">{{ t("footer.links.informations") }}</p>
          <p class="mb-2">{{ t("footer.links.Privacy_Policy") }}</p>
          <p class="mb-2">{{ t("footer.links.Terms") }}</p>
        </div>
      </div>
      <div class="col-md-3 col-6 col-lg-2">
        <div>
          <h5 class="mb-3">{{ t("footer.links.Our_Offers") }}</h5>
          <p class="mb-2">{{ t("footer.links.About_Us") }}</p>
          <p class="mb-2">{{ t("footer.links.informations") }}</p>
          <p class="mb-2">{{ t("footer.links.Privacy_Policy") }}</p>
          <p class="mb-2">{{ t("footer.links.Terms") }}</p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end mt-5">
      <img
        src="../../assets/Brands.png"
        alt=""
        :class="locale === 'ar' ? ' me-auto' : ''"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "Links",
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
});
</script>

<style lang="scss" scoped>
.Links {
  & p {
    font-size: 14px;
  }
}
</style>
