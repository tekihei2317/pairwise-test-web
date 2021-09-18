<template>
  <div class="container mx-auto">
    <div>
      <button-primary @click="handleGenerate">テストケース生成</button-primary>
    </div>

    <div class="mt-10">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-1 text-left"></th>
            <th class="px-4 py-1 text-left">サイズ</th>
            <th class="px-4 py-1 text-left">色</th>
            <th class="px-4 py-1 text-left">値段</th>
          </tr>
        </thead>
        <tr v-for="(testCase, index) in testCases" :key="index">
          <td class="py-1">{{ index + 1 }}</td>
          <td v-for="(factor, index) in testCase" :key="index" class="py-1">{{ factor }}</td>
        </tr>
      </table>
    </div>

    <div class="mt-10">
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
import { reactive } from 'vue';
import ButtonPrimary from '@/components/buttonPrimary';
import generateTestCases from '@/lib/generateTestCases';

export default {
  name: 'Home',

  components: {
    ButtonPrimary,
  },

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

.testcase-container {
  max-width: 800px;
}
</style>
