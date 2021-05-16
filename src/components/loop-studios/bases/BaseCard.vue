<template>
  <div class="relative overflow-hidden group">
    <img
      class="transition-transform duration-200 ease-in transform  group-hover:scale-105"
      :src="card.image"
      :alt="card.title"
    />
    <div
      class="absolute inset-0 transition-opacity duration-200 ease-in  group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-gray-900 opacity-80"
    ></div>
    <p
      class="absolute px-10 text-3xl text-white uppercase break-words bottom-5"
    >
      {{ card.title }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
}
</script>
