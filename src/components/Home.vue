<template>
  <div class="max-w-screen-lg mx-auto">
    <h1 class="text-4xl font-semibold text-primary">Home page</h1>
    <ExpandingCards />
    <ProgressSteps />
  </div>
</template>

<script>
import ExpandingCards from "./ExpandingCards.vue"
import ProgressSteps from "./ProgressSteps.vue"

export default {
  components: {
    ExpandingCards,
    ProgressSteps,
  },
}
</script>

<style></style>
