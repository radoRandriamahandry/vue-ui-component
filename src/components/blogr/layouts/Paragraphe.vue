<template>
  <div class="pr-28">
    <h3
      class="text-xl font-semibold"
      :class="[
        background == 'light' ? 'text-blogr-primary-blue' : 'text-white',
      ]"
    >
      <slot name="title"></slot>
    </h3>
    <p
      class="mt-5"
      :class="[
        background == 'light'
          ? 'text-blogr-neutral-dark-gray-blue'
          : 'text-white',
      ]"
    >
      <slot name="content"></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: "light",
      required: false,
      validator: (value) => {
        return ["light", "dark"].indexOf(value) !== -1
      },
    },
  },
}
</script>
