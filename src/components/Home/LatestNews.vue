<template>
  <div
    class="container my-5 latest"
    :class="locale === 'ar' ? ' text-end' : ''"
  >
    <h2 class="text-center my-5">{{ t(`home.news.head`) }}</h2>
    <div class="row justify-content-center g-4">
      <div class="col-md-6 col-lg-4">
        <div class="card mb-3 border-0">
          <div class="row g-0">
            <div class="col-4">
              <img
                src="../../assets/Rectangle1.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-8">
              <div class="p-2">
                <h6 class="fw-bold">{{ t(`home.news.card.head`) }}</h6>
                <p class="">
                  {{ t(`home.news.card.desc`) }}
                </p>
                <p class="card-text">
                  <small class="text-muted">{{
                    t(`home.news.card.last_update`)
                  }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card mb-3 border-0">
          <div class="row g-0">
            <div class="col-4">
              <img
                src="../../assets/Rectangle2.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-8">
              <div class="p-2">
                <h6 class="fw-bold">{{ t(`home.news.card.head`) }}</h6>
                <p class="">
                  {{ t(`home.news.card.desc`) }}
                </p>
                <p class="card-text">
                  <small class="text-muted">{{
                    t(`home.news.card.last_update`)
                  }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="card mb-3 border-0">
          <div class="row g-0">
            <div class="col-4">
              <img
                src="../../assets/Rectangle3.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-8">
              <div class="p-2">
                <h6 class="fw-bold">{{ t(`home.news.card.head`) }}</h6>
                <p class="">
                  {{ t(`home.news.card.desc`) }}
                </p>
                <p class="card-text">
                  <small class="text-muted">{{
                    t(`home.news.card.last_update`)
                  }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "latestNews",
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale,
    };
  },
});
</script>

<style lang="scss" scoped>
.latest {
  & img {
    object-fit: cover;
    height: 100%;
  }
  & p {
    font-size: 14px;
  }
}
</style>
