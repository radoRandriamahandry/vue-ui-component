<template>
  <div class="absolute top-0 grid w-screen h-full grid-rows-6">
    <div class="self-end">
      <NavBar />
    </div>
    <div
      class="w-full max-w-screen-xl row-start-3 row-end-6 mx-auto text-white  px-14"
    >
      <div class="w-7/12 py-8 border-2 border-white px-9">
        <h1 class="font-light uppercase text-7xl">
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
