<template>
  <h2 class="pb-4 text-lg font-semibold">Range Slider</h2>
  <UIWrapper>
    <div class="relative flex w-1/3">
      <!-- <div
        class="absolute w-6 h-6 bg-gray-500 bottom-6"
        :style="{ left: `${rangeValue / 2}%` }"
      >
        <span>{{ rangeValue }}</span>
      </div> -->
      <div
        class="absolute z-0 self-center transform -translate-x-1/2 rounded-full  h-9 w-9 left-1/2 bg-asana-red"
      >
        <div></div>
      </div>
      <input
        v-model="rangeValue"
        class="w-full h-2 border rounded-md outline-none  border-asana-yellow slider"
        type="range"
        min="0"
        max="100"
        step="1"
        @change="handleRangeValue"
      />
    </div>
  </UIWrapper>
</template>

<script>
import { ref } from "vue"
import UIWrapper from "./UI/UIWrapper.vue"

export default {
  components: {
    UIWrapper,
  },
  setup() {
    const rangeValue = ref(50)

    const handleRangeValue = () => {
      console.log(rangeValue.value)
    }

    return { rangeValue, handleRangeValue }
  },
}
</script>

<style scoped>
.slider {
  -webkit-appearance: none;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  @apply z-10 w-12 h-12 cursor-pointer relative;
}
.slider::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(106, 103, 206, 0.25);
}

.slider::-webkit-slider-thumb:active {
  box-shadow: 0 0 0 15px rgba(106, 103, 206, 0.25);
}

.slider::-moz-range-thumb {
  -moz-appearance: none;
  -webkit-appearance: none;
  @apply w-12 z-10 h-12 cursor-pointer relative border-none bg-transparent rounded-none;
}

.slider::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(106, 103, 206, 0.25);
}
.slider::-moz-range-thumb:active {
  box-shadow: 0 0 0 15px rgba(106, 103, 206, 0.25);
}
</style>
