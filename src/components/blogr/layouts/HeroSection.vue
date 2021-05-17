<template>
  <div class="relative h-screen overflow-hidden rounded-bl-blogr">
    <HeroBackground />
    <div
      class="absolute inset-0 max-w-screen-lg mx-auto overflow-hidden text-white "
    >
      <HeroContent />
    </div>
  </div>
</template>

<script>
import HeroBackground from "./HeroBackground.vue"
import HeroContent from "./HeroContent.vue"
export default {
  components: {
    HeroContent,
    HeroBackground,
  },
}
</script>
