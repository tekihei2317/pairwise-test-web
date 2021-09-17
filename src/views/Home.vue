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

    <div>
      <button @click="handleGenerate">テストケース生成</button>
    </div>

    <div>
      <table>
        <tr v-for="(testCase, index) in testCases" :key="index">
          <td>{{ index }}</td>
          <td v-for="(factor, index) in testCase" :key="index">{{ factor }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import generateTestCases from '@/lib/generateTestCases';

export default {
  name: 'Home',

  setup() {
    const factors = reactive([
      ['S', 'M', 'L'],
      ['Red', 'Black', 'White', 'Blue'],
      [1000, 3000],
    ]);
    let testCases = reactive([]);

    const handleGenerate = () => {
      const results = generateTestCases(factors);

      // 直接代入すると変更が反映されなかったため、forEachで代入している
      results.forEach((testCase) => testCases.push(testCase));
    };

    return { factors, testCases, handleGenerate };
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
