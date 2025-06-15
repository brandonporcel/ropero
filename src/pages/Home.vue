<script setup lang="ts">
import { CircleHelp } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
</script>
<template>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto reprehenderit quasi...</p>

  <RouterLink class="absolute bottom-4 right-4 hover:opacity-80" alt="Help" to="/about">
    <CircleHelp class="cursor-pointer" alt="Help" />
  </RouterLink>
</template>
