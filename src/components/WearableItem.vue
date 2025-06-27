<script setup lang="ts">
import { vTooltip } from 'floating-vue';
import { computed, ref } from 'vue';

import type { WashInstruction, Wearable } from '@/lib/types';
import {
  buttonStyles,
  extraWashDescriptions,
  washIcons,
  washInstructionText,
  washInstructionToProgramRecommendation,
} from '@/lib/wash-instructions';

import CustomCursor from './CursorFollower.vue';
import WearableType from './WearableType.vue';

const cursor = ref();
const hoveredInstruction = ref<WashInstruction | null>(null);

const { wearable } = defineProps<{ wearable: Wearable }>();

const recommendedProgram = computed(() => {
  return (
    wearable.wash
      ?.map((w) => washInstructionToProgramRecommendation[w])
      .filter(Boolean)
      .find(Boolean) || null
  );
});

const hasSomeValidInstruction = computed(() => {
  return wearable.wash?.some((instruction) => washIcons[instruction]);
});

function showCursor(instruction: WashInstruction) {
  hoveredInstruction.value = instruction;
  if (cursor.value) {
    cursor.value.img = washIcons[instruction];
    cursor.value.visible = true;
  }
}

function hideCursor() {
  hoveredInstruction.value = null;
  if (cursor.value) cursor.value.visible = false;
}
</script>

<template>
  <CustomCursor ref="cursor" />
  <WearableType :selectedNumber="wearable.type" />

  <section class="my-2 px-22">
    <p v-if="wearable.description" class="text-xs mb-2 text-justify">
      {{ wearable.description }}
    </p>
    <img :src="wearable.thumbnail" :alt="wearable.name" />
  </section>

  <section v-if="wearable.sizes" class="my-2 px-22">
    <h2 class="text-sm font-medium">Medidas</h2>
    <p class="text-xs">Autoregulable</p>
  </section>

  <section v-if="wearable.composition" class="my-2 px-22">
    <h2 class="text-sm font-medium">Composición</h2>
    <p class="text-xs">Frisa invisible 80% algodón / 20% poliéster</p>
  </section>

  <section v-if="wearable.wash?.length" class="mt-4 px-22 relative z-[300]">
    <div class="flex items-center justify-center gap-2">
      <component
        v-tooltip="washInstructionText[instruction]"
        v-for="instruction in wearable.wash"
        :is="washIcons[instruction]"
        :key="instruction"
        class="cursor-pointer hover:opacity-60"
        aria-label="Wash instruction"
        @mouseenter="showCursor(instruction)"
        @mouseleave="hideCursor"
      >
      </component>
    </div>

    <div v-if="hasSomeValidInstruction" class="relative w-full mt-4">
      <img src="../assets/wash/washing-machine.png" class="h-[250px]" />

      <div
        v-for="(_, key) in washIcons"
        :key="key"
        v-show="hoveredInstruction === key && buttonStyles[key]"
        :style="buttonStyles[key]"
        class="absolute border-2 border-red-500 rounded pointer-events-none"
      ></div>
    </div>
  </section>

  <p v-if="recommendedProgram" class="text-center mt-4 font-medium text-sm">
    {{ recommendedProgram }}
  </p>

  <footer :class="wearable.extra?.length ? '' : 'mb-[35%]'">
    <h1 class="font-bold text-center">ROPERO</h1>
  </footer>

  <section v-if="wearable.extra?.length" class="mt-4 px-22 relative z-[300] mb-[25%]">
    <ul>
      <li v-for="instruction in wearable.extra" :key="instruction" class="text-xs list-disc">
        {{ extraWashDescriptions[instruction] }}
      </li>
    </ul>
  </section>
</template>
