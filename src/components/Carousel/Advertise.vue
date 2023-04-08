<template>
  <div class="container pb-5 advertise position-relative">
    <div class="row">
      <div class="col-lg-4 col-md-6 h-100 p-0">
        <div class="one py-5">
          <div class="text-white px-2 w-75">
            <h4 class="fw-bold" :class="locale === 'ar' ? ' text-end' : ''">
              {{ t(`home.advertise.mobile`) }}
            </h4>
            <p :class="locale === 'ar' ? ' text-end' : ''">
              {{ t(`home.advertise.desc`) }}
            </p>
            <h4 class="mt-3">$399</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 h-100 p-0">
        <div class="two">
          <div class="text-center header">
            <img
              src="../../assets/Oculus-Rift-profile_grande@2x.png"
              class="w-75"
              alt=""
            />
          </div>
          <div
            class="d-flex justify-content-between px-2"
            :class="locale === 'ar' ? ' flex-row-reverse' : ''"
          >
            <h4 class="fw-bold text-black">{{ t(`home.advertise.vr`) }}</h4>
            <h4 class="text-black">$349</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 p-0">
        <div class="three pt-5 pb-4 d-flex">
          <div class="px-2 text-black">
            <h4 class="fw-bold" :class="locale === 'ar' ? ' ms-4' : ''">
              {{ t(`home.advertise.camera`) }}
            </h4>
            <p class="w-50 mb-0" :class="locale === 'ar' ? ' text-end' : ''">
              {{ t(`home.advertise.desc`) }}
            </p>
            <h4
              class="w-50 mt-3 mb-3"
              :class="locale === 'ar' ? ' text-end' : ''"
            >
              $299
            </h4>
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
  name: "Advertise",
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
.advertise {
  margin-top: -30px;
  .one {
    background-color: #ff6875;
    background-image: url(../../assets/mini-pic.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 100% 100%;
  }
  .two {
    background-color: #f1f3f4;
    .header {
      img {
        object-fit: cover;
        max-height: 187px;
      }
    }
  }
  .three {
    background-color: #c1c8ce;
    background-image: url(../../assets/50051823_540375.png);
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: 110% 100%;
  }
  & p {
    font-size: 12px;
  }
}
</style>
