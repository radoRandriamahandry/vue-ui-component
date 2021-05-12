<template>
  <h2 class="pb-4 mt-3 text-lg font-semibold">Progress step</h2>
  <UIWrapper>
    <div class="grid w-1/2 place-items-center gap-y-3">
      <div class="relative flex justify-between w-3/4">
        <div class="absolute self-center w-full h-1 bg-gray-300"></div>
        <div
          class="absolute self-center h-1 transition-all duration-300 ease-out  bg-asana-yellow"
          :style="{ width: `${progressBar}%` }"
        ></div>
        <div
          v-for="item in items"
          :key="item.val"
          class="z-0 transition-colors duration-200 ease-out delay-300 bg-white  circle"
          :class="[item.isActive ? 'border-asana-yellow' : 'border-gray-300']"
        >
          {{ item.val }}
        </div>
      </div>
      <div class="flex justify-between w-1/4">
        <button
          class="text-gray-500  btn focus:outline-none focus:ring-1 border-asana-purple disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="prevIsDisabled"
          @click="handleClick('prev')"
        >
          Prev
        </button>
        <button
          class="text-gray-500  btn focus:outline-none focus:ring-1 border-asana-blue disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="nextIsDisabled"
          @click="handleClick('next')"
        >
          Next
        </button>
      </div>
    </div>
  </UIWrapper>
</template>

<script>
import UIWrapper from "./UI/UIWrapper.vue"
import { ref } from "vue"

export default {
  components: {
    UIWrapper,
  },
  setup() {
    const items = ref([
      { val: 1, isActive: true },
      { val: 2, isActive: false },
      { val: 3, isActive: false },
      { val: 4, isActive: false },
      { val: 5, isActive: false },
    ])

    const prevIsDisabled = ref(true)
    const nextIsDisabled = ref(false)

    const activeItem = ref(0)
    const progressBar = ref(0)

    const total = items.value.length - 1

    const updateUI = () => {
      items.value[activeItem.value].isActive = true
      progressBar.value = (activeItem.value / total) * 100

      items.value.forEach((item, index) => {
        index <= activeItem.value
          ? (item.isActive = true)
          : (item.isActive = false)
      })
    }

    const handleClick = (action) => {
      items.value[activeItem.value].isActive = false

      if (action === "next" && !nextIsDisabled.value) {
        activeItem.value++
        nextIsDisabled.value = false
        prevIsDisabled.value = false
        updateUI()

        if (activeItem.value >= total) {
          nextIsDisabled.value = true
          return
        }
      }

      if (action === "prev" && !prevIsDisabled.value) {
        activeItem.value--
        prevIsDisabled.value = false
        nextIsDisabled.value = false
        updateUI()

        if (activeItem.value <= 0) {
          prevIsDisabled.value = true
          return
        }
      }
    }

    return {
      items,
      progressBar,
      handleClick,
      prevIsDisabled,
      nextIsDisabled,
    }
  },
}
</script>

<style scoped>
.circle {
  @apply flex items-center justify-center w-10 h-10 text-gray-500 border-2 rounded-full;
}
.btn {
  @apply px-2 py-1 text-sm font-semibold  uppercase transition duration-300 ease-in border rounded-md cursor-pointer;
}
</style>
