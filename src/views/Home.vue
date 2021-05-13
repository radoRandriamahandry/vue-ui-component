<template>
  <h1 class="title">Home page</h1>
  <div class="pt-7">
    <ExpandingCards />
  </div>
  <div class="pt-7">
    <ProgressSteps />
  </div>
  <div class="pt-7">
    <RangeSlider />
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
