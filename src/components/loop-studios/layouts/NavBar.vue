<template>
  <div class="grid text-white justify-items-center">
    <div class="flex items-center justify-between w-full">
      <h2 class="text-3xl font-bold hero-logo">loopstudios</h2>
      <div class="flex gap-x-3">
        <div
          v-for="link in links"
          :key="link.name"
          class="relative grid cursor-pointer justify-items-center group"
        >
          <span class="px-2 py-2">{{ link.name }}</span>
          <div
            class="
              absolute
              bottom-0
              w-6
              h-0.5
              bg-white
              group-hover:opacity-100
              opacity-0
              transition
              duration-500
              ease-out
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const links = ref([
      { name: "About", to: "#" },
      { name: "Careers", to: "#" },
      { name: "Events", to: "#" },
      { name: "Products", to: "#" },
      { name: "Support", to: "#" },
    ])

    return { links }
  },
}
</script>
