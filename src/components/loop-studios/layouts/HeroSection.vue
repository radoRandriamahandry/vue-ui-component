<template>
  <div class="relative mx-auto overflow-hidden bg-gray-400">
    <img
      src="/src/assets/LPageLoopStudio/image-hero.jpg"
      alt="Hero image "
      class="object-cover w-full"
    />
    <HeroContent />
  </div>
</template>

<script>
import HeroContent from "./HeroContent.vue"
export default {
  components: { HeroContent },
}
</script>
