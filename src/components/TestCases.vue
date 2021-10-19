<template>
  <div>
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-4 py-1 text-left"></th>
          <th v-for="(factor, index) in factors" :key="index" class="px-4 py-1 text-left">
            {{ factor.name }}
          </th>
        </tr>
      </thead>
      <tr v-for="(testCase, index) in testCases" :key="index">
        <td class="py-1">{{ index + 1 }}</td>
        <td v-for="(factor, index) in testCase" :key="index" class="py-1">{{ factor }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    factors: {
      required: true,
    },
    testCases: {
      required: true,
    },
  },
};
</script>

<style></style>
