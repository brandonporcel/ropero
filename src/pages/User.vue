<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('route.params', route.params);
</script>

<template>
  <h1>Usuario username: {{ route.params.username }}</h1>
</template>
