<template>
  <div class="max-w-screen-lg mx-auto text-gray-700">
    <h1 class="text-4xl font-semibold text-primary">Home page</h1>
    <ExpandingCards></ExpandingCards>
  </div>
</template>

<script>
import ExpandingCards from "./ExpandingCards.vue"

export default {
  components: {
    ExpandingCards,
  },
}
</script>

<style></style>
