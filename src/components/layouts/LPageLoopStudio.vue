<template>
  <div class="container--loopStudio">
    <p>Loop Studio</p>
    <div class="mt-5 overlap">
      <div class="overlap--image">
        <img
          src="/src/assets/LPageLoopStudio/image-interactive.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div class="px-16 py-20 bg-white overlap--text">
        <h2 class="text-4xl leading-9 uppercase">
          The leader in interactive VR
        </h2>
        <p class="mt-3">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alata&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");

/* p {
  font-family: "Josefin Sans", sans-serif;
}  */

.container--loopStudio {
  font-family: "Josefin Sans", sans-serif;
}

.overlap {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

.overlap--image {
  grid-column: 1 / 6;
  grid-row: 1/4;
}

.overlap--text {
  grid-column: 5 / -1;
  grid-row: 2 / -1;
}
</style>
