<template>
  <div class="grid grid-cols-9 grid-rows-4">
    <div class="col-start-1 col-end-6 row-start-1 row-end-4">
      <slot name="firstContent"></slot>
    </div>
    <div class="col-start-5 col-end-10 row-start-2 row-end-5">
      <slot name="secondContent"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>
