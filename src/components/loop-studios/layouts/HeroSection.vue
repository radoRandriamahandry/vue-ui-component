<template>
  <div>
    <div class="absolute inset-0">
      <img
        src="/src/assets/LPageLoopStudio/image-hero.jpg"
        alt="Hero image "
        class="object-cover h-full sm:h-auto sm:object-cover sm:w-full"
      />
    </div>
    <div class="relative h-screen max-w-screen-lg mx-auto overflow-hidden">
      <HeroContent />
    </div>
  </div>
</template>

<script>
import HeroContent from "./HeroContent.vue"
export default {
  components: { HeroContent },
}
</script>
