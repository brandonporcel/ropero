<script setup lang="ts">
import { CircleHelp } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="bg-slate-600 min-h-screen">
    <main class="mx-auto w-full max-w-screen-sm px-4 border min-h-screen">
      <RouterView />
    </main>
  </div>
</template>
