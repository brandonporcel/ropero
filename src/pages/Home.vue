<script setup lang="ts">
import Ironing3 from '@/components/icons/Ironing3.vue';
import NoBleach from '@/components/icons/NoBleach.vue';
import WashThumbleOff from '@/components/icons/WashThumbleOff.vue';
import WashTemperature1 from '@/components/icons/WashTemperature1.vue';
import { CircleHelp } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
const numbers = new Array(23).fill(null).map((_, i) => i + 1);

const selectedNumber = 6;
</script>

<template>
  <main class="mx-auto w-full max-w-screen-sm border min-h-screen py-8 md:py-12 lg:py-24">
    <div class="grid grid-cols-9 gap-x-1 bg-[#181818] p-2 rounded-ee-lg rounded-tr-lg w-72 pl-22">
      <span
        v-for="number in numbers"
        class="text-white relative font-medium leading-none select-none text-sm"
        :key="number"
      >
        <span
          v-if="number === selectedNumber"
          v-bind:class="[
            'text-white text-4xl absolute -left-5 -top-2 font-bold border-4 rounded-full h-12 w-12 place-content-center grid z-20 bg-[#181818] hover:bg-[#000000] cursor-pointer select-none',
          ]"
        >
          {{ number }}
        </span>
        <span v-else>
          {{ number }}
        </span>
      </span>
    </div>

    <section class="my-2 px-22">
      <p class="text-xs">
        The running cap from the limited Nike NOCTA collection is not only a practical wardrobe
        item, but also a unique accent that reflects Drake's style and ...
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
  </main>

  <RouterLink class="fixed bottom-4 right-4 hover:opacity-70" alt="Help" to="/about">
    <CircleHelp class="cursor-pointer" alt="Help" />
  </RouterLink>
</template>
