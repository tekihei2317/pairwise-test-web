<template>
  <div>
    <div class="grid-header">
      <div class="grid-item"></div>
      <div v-for="(item, index) in factors.flat()" :key="index" class="grid-item">{{ item }}</div>
    </div>
    <div v-for="(item, index) in factors.flat()" :key="index" class="grid-row">
      <div class="grid-item">{{ item }}</div>
      <div v-for="(item, index) in factors.flat()" :key="index" class="grid-item">{{ index }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    factors: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style>
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
