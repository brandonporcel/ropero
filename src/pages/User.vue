<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Layout from '@/components/Layout.vue';
import { useWearableStore } from '@/stores/wearable';

const route = useRoute();
const router = useRouter();
const store = useWearableStore();
const username = route.params.username as string;

const goToDetailPage = (wearable: any) => {
  router.push(`/${username}/${wearable.slug}`);
  store.saveWearable(wearable);
};

onMounted(() => {
  store.fetchAll(username);
});

watch(
  () => store.items,
  (newItems) => {
    console.log('Cambió store.items:', newItems);
  },
);
</script>

<template>
  <Layout class="px-2 md:px-0">
    <h1 class="font-sm font-medium italic text-cyan-400 mb-4 lowercase">
      {{ username }}
    </h1>

    <div v-if="store.loading && !store.items.length" class="animate-pulse space-y-4">
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1">
        <div v-for="i in 22" :key="i" class="bg-white aspect-square"></div>
      </div>
    </div>

    <div
      v-if="!store.loading && !store.error"
      class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1"
    >
      <div
        v-for="wearable in store.items"
        :key="wearable.slug"
        class="bg-white aspect-square flex items-center justify-center cursor-pointer"
        @click="goToDetailPage(wearable)"
      >
        <img
          :src="wearable.thumbnail || defaultImage"
          :alt="wearable.name"
          :title="wearable.name"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <p v-if="store.error" class="text-sm text-white">
      An error occurred while loading your wearables. 🙄
    </p>
    <p v-else-if="!store.items.length && !store.loading" class="text-sm text-white">
      No wearables found for this user. 😢
    </p>
  </Layout>
</template>

<script lang="ts">
const defaultImage =
  'https://szopex.blob.core.windows.net/shops/media/f1000/2023/nike/224583/nike-x-nocta-rf-cap-fd5465-902-651aaf379ba69.webp';
</script>
