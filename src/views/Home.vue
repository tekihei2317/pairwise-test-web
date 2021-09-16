<template>
  <div class="grid-container">
    <div class="grid">
      <div class="grid-header">
        <div class="grid-item"></div>
        <div v-for="(item, index) in factors.flat()" :key="index" class="grid-item">{{ item }}</div>
      </div>
      <div v-for="(item, index) in factors.flat()" :key="index" class="grid-row">
        <div class="grid-item">{{ item }}</div>
        <div v-for="(item, index) in factors.flat()" :key="index" class="grid-item">{{ index }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Home",

  setup() {
    const factors = reactive([
      ["S", "M", "L"],
      ["Red", "Black", "White", "Blue"],
      [1000, 3000],
    ]);

    return { factors };
  },
};
</script>

<style lang="scss" scoped>
.grid {
  max-width: 1000px;
  margin: 0 auto;
}
.grid-header {
  display: flex;
  justify-content: center;
}
.grid-row {
  display: flex;
  justify-content: center;
}
.grid-item {
  height: 4rem;
  width: 4rem;
}
</style>
