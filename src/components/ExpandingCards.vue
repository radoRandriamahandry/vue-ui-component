<template>
  <h2 class="pb-4 text-lg font-semibold">Expanding Cards</h2>
  <div class="flex gap-2">
    <div
      v-for="card in cards"
      :key="card.num"
      class="flex-1 text-white transition-all duration-300 ease-in rounded-md  hover:opacity-70"
      :class="[card.isActive ? 'flex-5' : `bg-blue-${card.num + 1}00`]"
      :style="{ 'background-color': card.color }"
      @click="changeActiveCard(card.num)"
    >
      <div class="grid font-semibold cursor-pointer place-items-center h-96">
        Card {{ card.num }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    // TODO add these colors as primary secondary-1 secondary-2
    // #3be8b0 #68acff #ff8453
    // From Asana colors
    const cards = ref([
      { num: 0, isActive: true, color: "#3be8b0" },
      { num: 1, isActive: false, color: "#1aafd0" },
      { num: 2, isActive: false, color: "#6a67ce" },
      { num: 3, isActive: false, color: "#ffb900" },
      { num: 4, isActive: false, color: "#fc636b" },
    ])
    const activeCard = ref(0)
    const changeActiveCard = (newActiveCard) => {
      cards.value[activeCard.value].isActive = false
      cards.value[newActiveCard].isActive = true
      activeCard.value = newActiveCard
    }

    return { cards, changeActiveCard }
  },
}
</script>

<style></style>
