<script setup lang="ts">
import { vTooltip } from 'floating-vue';
import { computed, ref } from 'vue';

import { WearableType } from '@/lib/enums';
import type { WashInstruction, Wearable } from '@/lib/types';
import {
  buttonStyles,
  extraWashDescriptions,
  washIcons,
  washInstructionText,
  washInstructionToProgramRecommendation,
} from '@/lib/wash-instructions';

import WearableTypeList from './WearableTypeList.vue';

const cursor = ref();
const hoveredInstruction = ref<WashInstruction | null>(null);

const { wearable } = defineProps<{ wearable: Wearable }>();

const recommendedProgram = computed(() => {
  if (wearable.composition) {
    if (wearable.composition.denim) {
      return 'Jeans';
    }
    const cottonTotal =
      (wearable.composition.cotton || 0) + (wearable.composition.recycledCotton || 0);
    if (cottonTotal >= 80) {
      return 'Algodón';
    }
    if (wearable.composition.polyester && wearable.composition.polyester >= 80) {
      return 'Sintético';
    }
    if (wearable.composition.nylon && wearable.composition.nylon >= 80) {
      return 'Sintético';
    }
  }

  return (
    wearable.wash
      ?.map((w) => washInstructionToProgramRecommendation[w])
      .filter(Boolean)
      .find(Boolean) || null
  );
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
  <WearableTypeList :selectedNumber="wearable.type" />

  <section class="my-2 px-2 md:px-12 lg:px-22">
    <p v-if="wearable.description" class="text-xs mb-2 text-justify">
      {{ wearable.description }}
    </p>
    <img :src="wearable.thumbnail" :alt="wearable.name" />
  </section>

  <section v-if="wearable.sizes" class="my-2 px-2 md:px-12 lg:px-22">
    <h2 class="text-sm font-medium">Sizes</h2>
    <p class="text-xs">Autoregulable</p>
  </section>

  <section v-if="wearable.composition" class="my-2 px-2 md:px-12 lg:px-22">
    <h2 class="text-sm font-medium">Composition</h2>
    <p class="text-xs">
      <template v-for="(value, key) in wearable.composition" :key="key">
        {{ key }} {{ value }}% /
      </template>
    </p>
  </section>

  <section v-if="recommendedProgram" class="mt-4 px-2 md:px-12 lg:px-22 relative z-[300]">
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

    <div
      v-if="recommendedProgram && wearable.type !== WearableType.ACCESORIES"
      class="relative mt-4"
    >
      <img src="../assets/wash/washing-machine.png" class="h-[250px] w-full" />

      <div
        v-for="(_, key) in washIcons"
        :key="key"
        v-show="hoveredInstruction === key && buttonStyles[key]"
        :style="buttonStyles[key]"
        class="absolute border-2 border-red-500 rounded pointer-events-none"
      ></div>
    </div>
  </section>

  <p
    v-if="recommendedProgram && wearable.type !== WearableType.ACCESORIES"
    class="text-center mt-4 font-medium text-sm"
  >
    {{ recommendedProgram }}
  </p>

  <footer>
    <h1 class="font-bold text-center">ROPERO</h1>
  </footer>

  <section v-if="wearable.extra?.length" class="mt-4 px-2 md:px-12 lg:px-22 relative z-[300]">
    <ul>
      <li v-for="instruction in wearable.extra" :key="instruction" class="text-xs list-disc">
        {{ extraWashDescriptions[instruction] }}
      </li>
    </ul>
  </section>
</template>
