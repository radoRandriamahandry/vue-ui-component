<template>
  <div class="hidden h-full grid-rows-6 sm:grid">
    <div class="self-end pb-6">
      <NavBar />
    </div>
    <div class="w-full row-start-3 row-end-6 mx-auto text-white">
      <div class="w-7/12 py-8 border-2 border-white px-9">
        <h1 class="font-light uppercase text-7xl">
          Immersive Experiences That deliver
        </h1>
      </div>
    </div>
  </div>
  <div class="h-full sm:hidden">
    <div class="grid grid-rows-5">
      <NavBar />
      <div class="self-center w-5/6 row-start-3 row-end-5 mx-auto">
        <h1
          class="p-5 text-5xl font-light text-white uppercase border-2 border-white "
        >
          Immersive Experiences That deliver
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue"
export default {
  components: { NavBar },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap");

.hero-logo {
  font-family: "Hammersmith One", sans-serif;
}
</style>
