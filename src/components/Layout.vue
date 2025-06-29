<script setup lang="ts">
import { CircleHelp, Moon, Sun } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

import { useDarkModeStore } from '@/stores/darkMode';

// @ts-ignore
import CustomFollower from './CursorFollower.vue';

const darkStore = useDarkModeStore();
</script>

<template>
  <main
    class="min-h-screen transition-colors duration-500 bg-[#F3F3F3]"
    :class="{ 'bg-slate-600': darkStore.isDark }"
  >
    <CustomFollower />

    <main class="mx-auto w-full max-w-screen-sm min-h-screen py-8">
      <slot></slot>
    </main>

    <button
      class="cursor-pointer fixed top-4 right-4 hover:opacity-70 transition-transform duration-300"
      @click="
        {
          darkStore.toggleDark();
          console.log('click', darkStore.isDark);
        }
      "
      aria-label="Toggle Dark Mode"
    >
      <Moon
        v-if="!darkStore.isDark"
        class="transition-transform duration-300 rotate-0 hover:rotate-12"
      />
      <Sun v-else class="transition-transform duration-300 rotate-0 hover:-rotate-12" />
    </button>

    <RouterLink class="fixed bottom-4 right-4 hover:opacity-70" alt="Help" to="/about">
      <CircleHelp class="cursor-pointer" />
    </RouterLink>
  </main>
</template>
