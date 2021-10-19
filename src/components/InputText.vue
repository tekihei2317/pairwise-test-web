<template>
  <input
    type="text"
    name="price"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="focus:ring-indigo-500 focus:border-indigo-500 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
  />
</template>

<script>
export default {
  props: {
    modelValue: {
      required: true,
    },
  },

  setup(_, { emit }) {
    const updateValue = (value) => {
      console.log('fire emit');
      emit('input', value);
    };

    return { updateValue };
  },
};
</script>

<style></style>
