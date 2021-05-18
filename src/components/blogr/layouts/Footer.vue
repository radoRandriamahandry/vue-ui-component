<template>
  <div class="grid max-w-screen-lg grid-cols-4 mx-auto my-14">
    <div class="text-3xl font-bold text-white">Blogr</div>
    <div>
      <h3 class="mb-8 text-white">Product</h3>
      <div class="grid gap-3">
        <div v-for="product in products" :key="product">{{ product }}</div>
      </div>
    </div>
    <div>
      <h3 class="mb-8 text-white">Company</h3>
      <div class="grid gap-3">
        <div v-for="company in companies" :key="company">{{ company }}</div>
      </div>
    </div>
    <div>
      <h3 class="mb-8 text-white">Connect</h3>
      <div class="grid gap-3">
        <div v-for="connect in connects" :key="connect">{{ connect }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const products = ref([
      "Overview",
      "Pricing",
      "Marketplace",
      "Features",
      "Integrations",
    ])
    const companies = ref(["About", "Team", "Blog", "Careers"])
    const connects = ref(["Contact", "Newsletter", "Linkedin"])

    return { products, companies, connects }
  },
}
</script>
