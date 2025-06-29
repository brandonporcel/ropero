<script setup lang="ts">
defineProps<{ selectedNumber: number }>();

const numbers = new Array(23).fill(null).map((_, i) => i + 1);
</script>

<template>
  <div class="grid grid-cols-9 gap-x-1 bg-[#181818] p-2 rounded-ee-lg rounded-tr-lg w-72 pl-22">
    <span
      v-for="number in numbers"
      class="text-white relative font-medium leading-none select-none text-sm"
      :key="number"
    >
      <span
        v-if="number === selectedNumber"
        v-bind:class="[
          'text-white text-4xl absolute -left-5 -top-2 font-bold border-4 rounded-full h-12 w-12 place-content-center grid z-20 bg-[#181818] hover:bg-[#000000] cursor-pointer select-none',
        ]"
      >
        {{ number }}
      </span>
      <span v-else>
        {{ number }}
      </span>
    </span>
  </div>
</template>
