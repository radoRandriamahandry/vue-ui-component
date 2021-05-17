<template>
  <div class="grid h-full grid-rows-auto-1fr">
    <div class="pt-10">
      <NavBar />
    </div>
    <div class="grid gap-10 text-center place-content-center">
      <h1 class="text-6xl font-semibold">A modern publishing platform</h1>
      <h3>Grow your audience and build your online brand</h3>
      <div class="flex justify-center space-x-5">
        <button
          class="px-4 py-1 font-semibold text-red-500 bg-white border rounded-full "
        >
          Start for Free
        </button>
        <button
          class="px-4 py-1 font-semibold border border-white rounded-full"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../blogr/layouts/NavBar.vue"
export default {
  components: {
    NavBar,
  },
}
</script>
