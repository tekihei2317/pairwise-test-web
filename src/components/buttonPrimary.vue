<template>
  <button
    type="button"
    class="
      px-4
      py-2
      border border-transparent
      rounded-md
      shadow-sm
      text-sm
      font-medium
      bg-green-600
      text-white
      hover:bg-green-500
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>
