<template>
  <div class="grid grid-cols-9 grid-rows-4 mt-5">
    <div class="col-start-1 col-end-6 row-start-1 row-end-4">
      <slot name="firstContent"></slot>
    </div>
    <div
      class="col-start-5 col-end-10 row-start-2 row-end-5 px-16 py-20  bg-gray-50"
    >
      <slot name="secondContent"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>
