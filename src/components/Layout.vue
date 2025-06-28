<script setup lang="ts">
import { CircleHelp } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

// @ts-ignore
import CustomFollower from './CursorFollower.vue';
</script>

<template>
  <CustomFollower />
  <main class="mx-auto w-full max-w-screen-sm min-h-screen py-8">
    <slot></slot>
  </main>
  <RouterLink class="fixed bottom-4 right-4 hover:opacity-70" alt="Help" to="/about">
    <CircleHelp class="cursor-pointer" />
  </RouterLink>
</template>
