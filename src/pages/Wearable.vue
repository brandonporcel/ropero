<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import Layout from '@/components/Layout.vue';
import WearableItem from '@/components/WearableItem.vue';
import WearableSkeleton from '@/components/WearableSkeleton.vue';
import { useWearableStore } from '@/stores/wearable';

const route = useRoute();
const store = useWearableStore();

const username = route.params.username as string;
const slug = route.params.wearableSlug as string;

onMounted(() => {
  store.loadWearableOrFetch(username, slug);
});
</script>

<template>
  <Layout>
    <WearableItem v-if="store.wearable" :wearable="store.wearable" />
    <WearableSkeleton v-else-if="store.loading && !store.wearable" />
    <p v-if="store.error && !store.loading" class="text-sm text-white">
      An error occurred while loading your wearable. 🙄
    </p>
    <p v-else-if="!store.wearable && !store.loading" class="text-sm text-white">
      Wearable with name {{ slug }} not found. 😢
    </p>
  </Layout>
</template>
