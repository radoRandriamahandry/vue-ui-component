<template>
  <div class="grid grid-cols-9">
    <div
      :class="[
        pushTo == 'right' ? 'col-start-2 col-end-6' : 'col-start-1 col-end-5',
      ]"
    >
      <slot name="left"></slot>
    </div>
    <div
      :class="[
        pushTo == 'right' ? 'col-start-6 col-end-10' : 'col-start-5 col-end-9',
      ]"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pushTo: {
      type: String,
      required: false,
      default: "left",
      validapushTor: function (value) {
        return ["left", "right"].indexOf(value) !== -1
      },
    },
  },
}
</script>
