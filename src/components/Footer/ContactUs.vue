<template>
  <div
    class="container my-5 ContactUs"
    :class="locale === `ar` ? ` text-end` : ``"
  >
    <div
      class="row g-4 mt-5"
      :class="locale === 'ar' ? ' flex-row-reverse' : ''"
    >
      <div class="col-md-6 col-lg-4">
        <div>
          <img src="../../assets/logo.png" alt="" />
          <p class="mt-4 w-75" :class="locale === `ar` ? ` ms-auto` : ``">
            {{ t("footer.contact.letter") }}
          </p>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div>
          <h6 class="mb-4 mt-2">{{ t("footer.contact.follow.head") }}</h6>
          <p class="w-75" :class="locale === `ar` ? ` ms-auto` : ``">
            {{ t("footer.contact.follow.desc") }}
          </p>
          <p class="mt-4">
            <i class="fa-brands fa-facebook-f facebook me-4"></i>
            <i class="fa-brands fa-twitter twitter"></i>
          </p>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div>
          <h6 class="mb-4 mt-2">{{ t("footer.contact.Contact_Us.head") }}</h6>
          <p>
            {{ t("footer.contact.Contact_Us.add") }} <br />
            {{ t("footer.contact.Contact_Us.call") }} <br />
            {{ t("footer.contact.Contact_Us.email") }}
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
  name: "ContactUs",
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
});
</script>

<style lang="scss" scoped>
.ContactUs {
  & p {
    font-size: 12px;
  }
  .twitter {
    color: #03a9f4;
  }
  .facebook {
    color: #385c8e;
  }
}
</style>
