<template>
  <div>
    <div class="absolute inset-0">
      <img
        src="/src/assets/LPageLoopStudio/desktop/image-hero.jpg"
        alt="Hero image "
        class="hidden object-cover w-full h-auto sm:block"
      />
      <img
        src="/src/assets/LPageLoopStudio/mobile/image-hero.jpg"
        alt="Hero image "
        class="object-cover h-full  sm:hidden sm:h-auto sm:object-cover sm:w-full"
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
