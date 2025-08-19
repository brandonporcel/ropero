<script setup lang="ts">
import { House } from 'lucide-vue-next';

import Layout from '@/components/Layout.vue';
import CoveredLink from '@/components/CoveredLink.vue';
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

    <div class="my-4 block mx-auto w-max"> 
      <CoveredLink text="brandonporcel" href="https://linkedin.com/in/brandonporcel/" :blank="true" />
    </div>
  </Layout>
</template>
