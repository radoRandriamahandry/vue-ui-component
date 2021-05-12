<template>
  <div class="max-w-screen-lg mx-auto pb-7">
    <h1 class="text-4xl font-semibold text-primary">Home page</h1>
    <div class="pt-7">
      <ExpandingCards />
    </div>
    <div class="pt-7">
      <ProgressSteps />
    </div>
    <div class="pt-7">
      <RangeSlider />
    </div>
  </div>
</template>

<script>
import ExpandingCards from "../components/ExpandingCards.vue"
import ProgressSteps from "../components/ProgressSteps.vue"
import RangeSlider from "../components/RangeSlider.vue"

export default {
  components: {
    ExpandingCards,
    ProgressSteps,
    RangeSlider,
  },
}
</script>

<style></style>
