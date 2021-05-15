<template>
  <div class="relative">
    <img class="" :src="card.image" :alt="card.title" />
    <div
      class="absolute inset-0  bg-gradient-to-b from-transparent via-transparent to-gray-900 opacity-80"
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
