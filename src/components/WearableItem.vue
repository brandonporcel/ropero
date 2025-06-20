<script setup lang="ts">
import type { Wearable } from '@/lib/types';
import Ironing3 from '@/components/icons/Ironing3.vue';
import NoBleach from '@/components/icons/NoBleach.vue';
import WashTemperature1 from '@/components/icons/WashTemperature1.vue';
import WashThumbleOff from '@/components/icons/WashThumbleOff.vue';

import WearableType from './WearableType.vue';

const { wearable } = defineProps<{ wearable: Wearable }>();
</script>
<template>
  <WearableType :selectedNumber="wearable.type" />

  <section class="my-2 px-22">
    <p class="text-xs mb-2 text-justify">
      {{ wearable.description }}
    </p>
    <img :src="wearable.thumbnail" :alt="wearable.name" />
  </section>

  <section class="my-2 px-22">
    <h2 class="text-sm font-medium">Medidas</h2>
    <p class="text-xs">Autoregulable</p>
  </section>

  <section class="my-2 px-22">
    <h2 class="text-sm font-medium">Composición</h2>
    <p class="text-xs">Frisa invisible 80% algodon / 20% poliéster</p>
  </section>

  <section class="mt-4 px-22">
    <div class="flex flex-col items-center">
      <div class="flex items-center gap-2">
        <WashThumbleOff />
        <WashTemperature1 />
        <Ironing3 />
        <NoBleach />
      </div>
      <p class="text-xs">Hecho en Argentina</p>
    </div>
  </section>

  <footer>
    <h1 class="font-bold text-center">ROPERO</h1>
  </footer>
</template>
