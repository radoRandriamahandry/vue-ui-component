<template>
  <div class="relative overflow-hidden group">
    <img
      class="hidden object-none w-auto h-auto transition-transform duration-200 ease-in transform  sm:block group-hover:scale-105"
      :src="card.desktopImage"
      :alt="card.title"
    />
    <img
      class="object-bottom w-full h-32 transition-transform duration-200 ease-in transform  sm:hidden group-hover:scale-105"
      :src="card.mobileImage"
      :alt="card.title"
    />
    <div
      class="absolute inset-0 transition-opacity duration-200 ease-in  group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-gray-900 opacity-80"
    ></div>
    <p
      class="absolute pl-5 text-2xl text-white uppercase break-words  sm:text-3xl pr-36 sm:px-10 bottom-5"
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
