<template>
  <HeroSection></HeroSection>
  <div class="max-w-screen-lg mx-auto container--loopStudio">
    <OverlappingContent>
      <template #firstContent>
        <img
          src="/src/assets/LPageLoopStudio/image-interactive.jpg"
          alt=""
          srcset=""
        />
      </template>
      <template #secondContent>
        <h2 class="text-4xl leading-9 tracking-wider uppercase">
          The leader in interactive VR
        </h2>
        <p class="mt-3">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
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
