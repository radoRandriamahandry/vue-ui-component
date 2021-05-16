<template>
  <HeroSection></HeroSection>
  <div class="max-w-screen-lg mx-auto container--loopStudio">
    <div class="mt-20 px-7 sm:mt-28">
      <OverlappingContent>
        <template #firstContent>
          <img
            class="hidden sm:block"
            src="/src/assets/LPageLoopStudio/desktop/image-interactive.jpg"
            alt=""
            srcset=""
          />
          <img
            class="sm:hidden"
            src="/src/assets/LPageLoopStudio/mobile/image-interactive.jpg"
            alt=""
            srcset=""
          />
        </template>
        <template #secondContent>
          <div
            class="w-full h-full text-center  mt-14 sm:mt-0 sm:py-20 sm:pl-24 bg-gray-50"
          >
            <h2 class="text-4xl leading-9 tracking-wider uppercase">
              The leader in interactive VR
            </h2>
            <p class="mt-7">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </template>
      </OverlappingContent>
    </div>
    <section class="mt-12">
      <div class="flex justify-between">
        <h2 class="mx-auto mt-5 text-4xl leading-9 uppercase sm:mx-0 sm:mt-0">
          Our Creations
        </h2>
        <button
          class="hidden py-1 text-sm uppercase border border-gray-400  sm:block px-7 hover:border-gray-600"
        >
          See all
        </button>
      </div>
      <div class="grid gap-6 mt-10 sm:grid-cols-4 px-7 sm:px-0">
        <div v-for="card in cards" :key="card.title">
          <BaseCard :card="card" />
        </div>
      </div>
      <div class="flex justify-center w-full mt-10 sm:hidden">
        <button
          class="block py-1 text-base uppercase border border-gray-600  px-7 hover:border-gray-600"
        >
          See all
        </button>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script>
import OverlappingContent from "../components/loop-studios/layouts/OverlappingContent.vue"
import HeroSection from "../components/loop-studios/layouts/HeroSection.vue"
import Footer from "../components/loop-studios/layouts/Footer.vue"
import BaseCard from "../components/loop-studios/bases/BaseCard.vue"
import { ref } from "vue"

export default {
  components: { OverlappingContent, HeroSection, BaseCard, Footer },
  setup() {
    const cards = ref([
      {
        title: "deep earth",
        desktopImage:
          "/src/assets/LPageLoopStudio/desktop/image-deep-earth.jpg",
        mobileImage: "/src/assets/LPageLoopStudio/mobile/image-deep-earth.jpg",
      },
      {
        title: "night arcade",
        desktopImage:
          "/src/assets/LPageLoopStudio/desktop/image-night-arcade.jpg",
        mobileImage:
          "/src/assets/LPageLoopStudio/mobile/image-night-arcade.jpg",
      },
      {
        title: "soccer team vr",
        desktopImage:
          "/src/assets/LPageLoopStudio/desktop/image-soccer-team.jpg",
        mobileImage: "/src/assets/LPageLoopStudio/mobile/image-soccer-team.jpg",
      },
      {
        title: "the grid",
        desktopImage: "/src/assets/LPageLoopStudio/desktop/image-grid.jpg",
        mobileImage: "/src/assets/LPageLoopStudio/mobile/image-grid.jpg",
      },
      {
        title: "from up above vr",
        desktopImage:
          "/src/assets/LPageLoopStudio/desktop/image-from-above.jpg",
        mobileImage: "/src/assets/LPageLoopStudio/mobile/image-from-above.jpg",
      },
      {
        title: "pocket borealis",
        desktopImage:
          "/src/assets/LPageLoopStudio/desktop/image-pocket-borealis.jpg",
        mobileImage:
          "/src/assets/LPageLoopStudio/mobile/image-pocket-borealis.jpg",
      },
      {
        title: "the curiosity",
        desktopImage: "/src/assets/LPageLoopStudio/desktop/image-curiosity.jpg",
        mobileImage: "/src/assets/LPageLoopStudio/mobile/image-curiosity.jpg",
      },
      {
        title: "make it fisheye",
        desktopImage: "/src/assets/LPageLoopStudio/desktop/image-fisheye.jpg",
        mobileImage: "/src/assets/LPageLoopStudio/mobile/image-fisheye.jpg",
      },
    ])

    return { cards }
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");

.container--loopStudio {
  font-family: "Josefin Sans", sans-serif;
}
</style>
