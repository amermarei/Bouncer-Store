<template>
  <NavBar />
  <carousel />
  <Advertise />
  <BestSeller />
  <carouselTwo />
  <Features />
  <LatestNews />
  <FeaturedProducts />
  <ContactUs />
  <Links />
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import carousel from "@/components/Carousel/Carousel.vue";
import carouselTwo from "@/components/Carousel/CarouselTwo.vue";
import Advertise from "@/components/Carousel/Advertise.vue";
import BestSeller from "@/components/Home/BestSeller.vue";
import Features from "@/components/Home/Features.vue";
import LatestNews from "@/components/Home/LatestNews.vue";
import FeaturedProducts from "@/components/Home/FeaturedProducts.vue";
import ContactUs from "@/components/Footer/ContactUs.vue";
import Links from "@/components/Footer/Links.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
    carousel,
    Advertise,
    BestSeller,
    carouselTwo,
    Features,
    LatestNews,
    FeaturedProducts,
    ContactUs,
    Links,
  },
};
</script>
