<template>
  <div class="container my-5 FeaturedProducts">
    <h2 class="text-center my-5">{{ t(`home.products.head`) }}</h2>
    <div class="row justify-content-center g-4">
      <div class="col-md-6 col-lg-4">
        <div class="card mb-3 border-0">
          <div class="row g-0">
            <div class="col-4">
              <img
                src="../../assets/c04297141.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-8">
              <div class="p-2">
                <p class="fw-bold mb-0">
                  Beats Solo 2 On Ear <br />
                  Headphones - Black
                </p>
                <p class="mb-1">
                  <span v-for="i of 4" :key="i">
                    <i class="fa-solid fa-star text-warning"></i>
                  </span>
                  <i class="fa-solid fa-star disabled"></i>
                </p>
                <p class="price">
                  $499 <span class="disabled ms-2">$599</span>
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
                src="../../assets/50050995_530579.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-8">
              <div class="p-2">
                <p class="fw-bold">Netatmo Rain Gauge</p>
                <p class="mb-1">
                  <span v-for="i of 4" :key="i">
                    <i class="fa-solid fa-star text-warning"></i>
                  </span>
                  <i class="fa-solid fa-star disabled"></i>
                </p>
                <p class="price">
                  $499 <span class="disabled ms-2">$599</span>
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
                src="../../assets/PR-104-0015-002-8A.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-8">
              <div class="p-2">
                <p class="fw-bold">H-Squared tvTray</p>
                <p class="mb-1">
                  <span v-for="i of 4" :key="i">
                    <i class="fa-solid fa-star text-warning"></i>
                  </span>
                  <i class="fa-solid fa-star disabled"></i>
                </p>
                <p class="price">
                  $499 <span class="disabled ms-2">$599</span>
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
  name: "FeaturedProducts",
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
.FeaturedProducts {
  & img {
    object-fit: cover;
    height: 100%;
  }
  & p {
    font-size: 14px;
  }
  & i {
    font-size: 8px;
  }
  .disabled {
    color: #c1c8ce;
  }
  .price {
    color: #ff4858;
    span {
      text-decoration: line-through;
    }
  }
}
</style>
