<script setup lang="ts">
import { House } from 'lucide-vue-next';

import Layout from '@/components/Layout.vue';
</script>

<template>
  <Layout class="px-2 md:px-12 lg:px-22">
    <router-link class="block mx-auto w-max" to="/">
      <House class="cursor-pointer" alt="Home" />
    </router-link>
    <img
      class="mx-auto w-max"
      src="/public/images/margiela.png"
      alt="Margiela numbers explanation"
    />
    <img src="/public/images/wash-symbols.jpg" alt="Wash symbols" />
    <a
      href="https://github.com/brandonporcel"
      target="_blank"
      rel="noopener noreferrer"
      class="underline text-sm my-4 block mx-auto w-max hover:italic"
      >/brandonporcel</a
    >
  </Layout>
</template>
