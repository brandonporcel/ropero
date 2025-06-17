<script setup lang="ts">
// Podés dejarlo sin lógica si solo es visual
</script>

<template>
  <div class="animate-pulse space-y-4">
    <!-- Skeleton para los números -->
    <div class="grid grid-cols-9 gap-x-1 bg-[#181818] p-2 rounded-ee-lg rounded-tr-lg w-72 pl-22">
      <div v-for="i in 23" :key="i" class="h-4 bg-gray-700 rounded"></div>
    </div>

    <!-- Skeleton para el texto -->
    <div class="space-y-2 px-22">
      <div class="h-4 bg-gray-500 rounded w-2/3"></div>
      <div class="h-4 bg-gray-600 rounded w-full"></div>
    </div>

    <!-- Skeleton para imagen -->
    <div class="h-[400px] bg-gray-800 rounded mx-22"></div>

    <!-- Skeleton para medidas y composición -->
    <div class="space-y-2 px-22">
      <div class="h-4 bg-gray-500 w-1/4 rounded"></div>
      <div class="h-4 bg-gray-600 w-1/2 rounded"></div>
    </div>
    <div class="space-y-2 px-22">
      <div class="h-4 bg-gray-500 w-1/4 rounded"></div>
      <div class="h-4 bg-gray-600 w-2/3 rounded"></div>
    </div>

    <!-- Skeleton para íconos -->
    <div class="mt-4 flex justify-center gap-4">
      <div class="w-6 h-6 bg-gray-700 rounded"></div>
      <div class="w-6 h-6 bg-gray-700 rounded"></div>
      <div class="w-6 h-6 bg-gray-700 rounded"></div>
      <div class="w-6 h-6 bg-gray-700 rounded"></div>
    </div>

    <!-- Skeleton para footer -->
    <div class="h-4 bg-gray-600 w-20 mx-auto mt-4 rounded"></div>
  </div>
</template>
