<script setup lang="ts">
import { CircleHelp } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

import Layout from '@/components/Layout.vue';
import WearableItem from '@/components/WearableItem.vue';
import WearableSkeleton from '@/components/WearableSkeleton.vue';
</script>

<template>
  <Layout class="md:py-12 lg:py-24">
    <WearableItem />
    <!-- <WearableSkeleton /> -->
  </Layout>

  <RouterLink class="fixed bottom-4 right-4 hover:opacity-70" alt="Help" to="/about">
    <CircleHelp class="cursor-pointer" alt="Help" />
  </RouterLink>
</template>
