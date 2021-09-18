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

    <!-- <div class="mt-10">
      <div class="grid-header">
        <div class="grid-item"></div>
        <div v-for="(item, index) in factors.flat()" :key="index" class="grid-item">{{ item }}</div>
      </div>
      <div v-for="(item, index) in factors.flat()" :key="index" class="grid-row">
        <div class="grid-item">{{ item }}</div>
        <div v-for="(item, index) in factors.flat()" :key="index" class="grid-item">{{ index }}</div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { reactive } from 'vue';
import ButtonPrimary from '@/components/ButtonPrimary';
import ButtonSecondary from '@/components/ButtonSecondary';
import InputText from '@/components/InputText';
import generateTestCases from '@/lib/generateTestCases';

export default {
  name: 'Home',

  components: {
    ButtonPrimary,
    ButtonSecondary,
    InputText,
  },

  setup() {
    // const factors = reactive([
    //   ['S', 'M', 'L'],
    //   ['Red', 'Black', 'White', 'Blue'],
    //   [1000, 3000],
    // ]);
    let testCases = reactive([]);

    const handleGenerate = (factors) => {
      console.log(factors.map((factor) => factor.choices.split(',')));
      const results = generateTestCases(factors.map((factor) => factor.choices.split(',')));

      // 直接代入すると変更が反映されなかったため、空にしてからforEachで代入している
      while (testCases.length > 0) testCases.pop();
      results.forEach((testCase) => testCases.push(testCase));
    };

    const factors = reactive([
      { name: 'サイズ', choices: 'S,M,L' },
      { name: '色', choices: 'Red,Black,White,Blue' },
    ]);
    const addFactor = () => {
      factors.push({ name: '', choices: '' });
    };

    return { factors, addFactor, testCases, handleGenerate };
  },
};
</script>

<style lang="scss" scoped>
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

.form-container {
  max-width: 800px;
}

.container {
  max-width: 1000px;
}
</style>
