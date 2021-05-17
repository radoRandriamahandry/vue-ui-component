<template>
  <div class="relative grid text-white justify-items-center">
    <!-- Mobile menu when click on the hamburger button -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      leave-active-class="transition duration-100 ease-in"
      enter-from-class="transform -translate-y-full"
      enter-to-class="transform translate-y-0"
      leave-to-class="transform -translate-y-full"
    >
      <div
        v-if="isOpen"
        v-click-away="onClickAway"
        class="absolute inset-0 z-0 grid items-center w-full h-screen px-6 bg-black "
      >
        <div class="grid gap-8">
          <span
            v-for="link in links"
            :key="link.name"
            class="cursor-pointer group"
          >
            <span
              class="text-3xl font-light text-gray-300 uppercase  hover:text-white"
              >{{ link.name }}</span
            >
          </span>
        </div>
      </div>
    </transition>
    <!-- End of Mobile menu -->
    <div
      class="flex items-center justify-between w-full px-6 py-12  sm:px-0 sm:py-0"
    >
      <!-- Desktop navigation -->
      <div class="flex space-x-10">
        <h2 class="z-10 text-3xl font-bold select-none hero-logo">Blogr</h2>
        <div class="hidden sm:flex gap-x-3">
          <div
            v-for="link in links"
            :key="link.name"
            class="relative grid cursor-pointer justify-items-center group"
          >
            <span class="px-2 py-2">{{ link.name }}</span>
            <!-- Line under the menu when hover -->
            <div
              class="absolute bottom-0 w-6 h-px transition duration-500 ease-out bg-white opacity-0  group-hover:opacity-100"
            ></div>
          </div>
        </div>
      </div>

      <div class="z-10 flex justify-center space-x-5">
        <button
          class="px-4 py-1 font-semibold border border-white border-opacity-0 rounded-full  hover:border-opacity-100"
        >
          Login
        </button>
        <button
          class="px-4 py-1 font-semibold text-red-500 bg-white border rounded-full "
        >
          Sign Up
        </button>
      </div>
      <!-- End desktop Navigation -->
      <div class="z-10 cursor-pointer sm:hidden" @click="handleClick">
        <fontAwesomeIcon
          v-if="!isOpen"
          class="transition-all duration-300 ease-in fa-2x"
          :icon="['fas', 'bars']"
        />
        <fontAwesomeIcon
          v-if="isOpen"
          class="transition-all duration-300 ease-in fa-2x"
          :icon="['fas', 'times']"
        />
      </div>
      <!-- End Mobile Hamburger menu -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import { directive } from "vue3-click-away"
import { links } from "/src/composables/loop-studios/useLinks.js"

export default {
  directives: {
    ClickAway: directive,
  },
  setup() {
    const isOpen = ref(false)
    const handleClick = () => {
      isOpen.value = !isOpen.value
    }

    // Handle v-click-away directive - when click outside the menu
    const onClickAway = () => {
      handleClick()
    }
    return { links, isOpen, handleClick, onClickAway }
  },
}
</script>
