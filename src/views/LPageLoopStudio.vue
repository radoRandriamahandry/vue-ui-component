<template>
  <HeroSection></HeroSection>
  <div class="max-w-screen-xl mx-auto px-14 container--loopStudio">
    <OverlappingContent class="mt-28">
      <template #firstContent>
        <img
          src="/src/assets/LPageLoopStudio/image-interactive.jpg"
          alt=""
          srcset=""
        />
      </template>
      <template #secondContent>
        <div class="w-full h-full py-20 pl-24 pr-28 bg-gray-50">
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
  </div>
</template>

<script>
import OverlappingContent from "../components/loop-studios/layouts/OverlappingContent.vue"
import HeroSection from "../components/loop-studios/layouts/HeroSection.vue"
export default {
  components: { OverlappingContent, HeroSection },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");

.container--loopStudio {
  font-family: "Josefin Sans", sans-serif;
}
</style>
