<template>
  <div class="relative mx-auto overflow-hidden bg-gray-400">
    <img
      src="/src/assets/LPageLoopStudio/image-hero.jpg"
      alt="Hero image "
      class="object-cover w-full"
    />
    <TheHeader />
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue"
export default {
  components: { TheHeader },
}
</script>
