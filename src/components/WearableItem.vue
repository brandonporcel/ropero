<script setup lang="ts">
import Ironing3 from '@/components/icons/Ironing3.vue';
import NoBleach from '@/components/icons/NoBleach.vue';
import WashTemperature1 from '@/components/icons/WashTemperature1.vue';
import WashThumbleOff from '@/components/icons/WashThumbleOff.vue';

import WearableType from './WearableType.vue';
</script>
<template>
  <WearableType :selectedNumber="23" />

  <section class="my-2 px-22">
    <p class="text-xs">
      The running cap from the limited Nike NOCTA collection is not only a practical wardrobe item,
      but also a unique accent that reflects Drake's style and ...
    </p>
    <img
      src="https://szopex.blob.core.windows.net/shops/media/f1000/2023/nike/224583/nike-x-nocta-rf-cap-fd5465-902-651aaf379ba69.webp"
      alt="Nike cap"
    />
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
