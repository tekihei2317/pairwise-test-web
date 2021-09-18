<template>
  <div class="container mx-auto">
    <div class="form-container">
      <div>
        <span class="inline-block w-1/4">パラメータ名</span>
        <span class="inline-block w-2/3 ml-4">値（カンマ区切り）</span>
      </div>
      <div v-for="(factor, index) in factors" :key="index" class="mt-2">
        <input-text class="w-1/4" v-model="factors[index].name" />
        <input-text class="w-2/3 ml-4" v-model="factors[index].choices"></input-text>
      </div>

      <div class="mt-2">
        <button-secondary @click="addFactor" class="w-full text-center block">
          <span>パラメータを追加する</span>
        </button-secondary>
      </div>
    </div>

    <div class="mt-4">
      <button-primary @click="handleGenerate(factors)">テストケース生成</button-primary>
    </div>

    <div class="mt-8">
      <div>
        <router-link :to="{ name: 'Home', query: { display_type: 'table' } }" class="hover:underline text-green-600">
          テーブル表示
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'Home', query: { display_type: 'grid' } }" class="hover:underline text-green-500">
          グリッド表示
        </router-link>
      </div>
      <div v-if="$route.query.display_type !== 'grid'">
        <test-cases :factors="factors" :testCases="testCases" />
      </div>
      <div v-else>
        <test-cases-grid :factors="factors.map((factor) => factor.choices.split(','))" :grid="testCasesGrid" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import generateTestCases from '@/lib/generateTestCases';

// components
import ButtonPrimary from '@/components/ButtonPrimary';
import ButtonSecondary from '@/components/ButtonSecondary';
import InputText from '@/components/InputText';
import TestCases from '@/components/TestCases';
import TestCasesGrid from '@/components/TestCasesGrid';

export default {
  name: 'Home',

  components: {
    ButtonPrimary,
    ButtonSecondary,
    InputText,
    TestCases,
    TestCasesGrid,
  },

  setup() {
    const testCases = reactive([]);
    const testCasesGrid = reactive([]);
    const handleGenerate = (factors) => {
      const { results, grid } = generateTestCases(factors.map((factor) => factor.choices.split(',')));

      // 直接代入すると変更が反映されなかったため、空にしてからforEachで代入している
      while (testCases.length > 0) testCases.pop();
      results.forEach((testCase) => testCases.push(testCase));

      while (testCasesGrid.length > 0) testCasesGrid.pop();
      grid.forEach((row) => testCasesGrid.push(row));
    };

    const factors = reactive([
      { name: 'サイズ', choices: 'S,M,L' },
      { name: '色', choices: 'Red,Black,White,Blue' },
    ]);
    const addFactor = () => {
      factors.push({ name: '', choices: '' });
    };

    return { factors, testCases, testCasesGrid, addFactor, handleGenerate };
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  max-width: 800px;
}

.container {
  max-width: 1000px;
}
</style>
