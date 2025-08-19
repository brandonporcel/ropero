<script setup lang="ts">
import { Motion } from "motion-v";

interface Props {
  text: string;
  href?: string | null;
  blank?: boolean;
}

const props = defineProps<Props>();

const variants = {
  hide: { opacity: 0, width: 0, height: 0 },
  show: { opacity: 1, width: "100%", height: 1 },
  hover: { opacity: 1, width: "100%", height: "100%" }
};
</script>

<template>
  <component
    :is="props.href ? 'a' : 'span'"
    :href="props.href || undefined"
    :target="props.blank ? '_blank' : undefined"
    rel="noreferrer"
    class="inline-block"
  >
    <Motion
      tag="span"
      class="group relative inline-block"
      initial="hide"
      animate="show"
      whileHover="hover"
    >
      <span class="z-10">{{ props.text }}</span>
      <Motion
        tag="span"
        :variants="variants"
        :transition="{ type: 'spring', mass: 0.2, stiffness: 100 }"
        class="pointer-events-none absolute bottom-0 left-0 
         bg-black dark:bg-white 
         dark:mix-blend-exclusion"
/>
    </Motion>
  </component>
</template>
