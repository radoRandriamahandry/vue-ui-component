<template>
  <HeroSection></HeroSection>
  <div class="max-w-screen-lg mx-auto container--loopStudio">
    <OverlappingContent class="mt-28">
      <template #firstContent>
        <img
          src="/src/assets/LPageLoopStudio/image-interactive.jpg"
          alt=""
          srcset=""
        />
      </template>
      <template #secondContent>
        <div class="w-full h-full py-20 pl-24 bg-gray-50">
          <h2 class="text-4xl leading-9 tracking-wider uppercase">
            The leader in interactive VR
          </h2>
          <p class="mt-7">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </template>
    </OverlappingContent>
    <section class="mt-12">
      <div class="flex justify-between">
        <h2 class="text-4xl leading-9 uppercase">Our Creations</h2>
        <button
          class="py-1 text-sm uppercase border border-gray-400  px-7 hover:border-gray-600"
        >
          See all
        </button>
      </div>
      <div class="grid grid-cols-4 gap-6 mt-10">
        <div v-for="card in cards" :key="card.title">
          <BaseCard :card="card" />
        </div>
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
        image: "/src/assets/LPageLoopStudio/image-deep-earth.jpg",
      },
      {
        title: "night arcade",
        image: "/src/assets/LPageLoopStudio/image-night-arcade.jpg",
      },
      {
        title: "soccer team vr",
        image: "/src/assets/LPageLoopStudio/image-soccer-team.jpg",
      },
      {
        title: "the grid",
        image: "/src/assets/LPageLoopStudio/image-grid.jpg",
      },
      {
        title: "from up above vr",
        image: "/src/assets/LPageLoopStudio/image-from-above.jpg",
      },
      {
        title: "pocket borealis",
        image: "/src/assets/LPageLoopStudio/image-pocket-borealis.jpg",
      },
      {
        title: "the curiosity",
        image: "/src/assets/LPageLoopStudio/image-curiosity.jpg",
      },
      {
        title: "make it fisheye",
        image: "/src/assets/LPageLoopStudio/image-fisheye.jpg",
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
