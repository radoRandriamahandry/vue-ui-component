<template>
  <div class="relative w-full mt-20">
    <div class="absolute bottom-0 w-full h-full bg-black"></div>

    <div class="relative max-w-screen-lg py-10 mx-auto">
      <div class="grid text-gray-200 justify-items-center">
        <div class="flex items-center justify-between w-full">
          <section class="grid gap-3">
            <h2 class="text-3xl font-bold hero-logo">loopstudios</h2>
            <div class="flex gap-x-2">
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
          </section>
          <section>
            <div>Something else</div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { links } from "/src/composables/loop-studios/useLinks.js"
export default {
  setup() {
    return { links }
  },
}
</script>
