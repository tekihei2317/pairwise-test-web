<template>
  <div>
    <div class="grid-header">
      <div class="grid-item"></div>
      <div v-for="(item, index) in factors.flat()" :key="index" class="grid-item">{{ item }}</div>
    </div>
    <div v-for="(item, i) in factors.flat()" :key="i" class="grid-row">
      <div class="grid-item">{{ item }}</div>
      <div v-for="(item, j) in factors.flat()" :key="j" class="grid-item">{{ getCellValue(i, j) }}</div>
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
    grid: {
      required: true,
      type: Array,
    },
  },

  setup(props) {
    const getCellValue = (i, j) => {
      return props.grid?.[i]?.[j] == null ? 0 : props.grid[i][j] + 1;
    };

    return { getCellValue };
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
