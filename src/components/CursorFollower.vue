<template>
  <div ref="follower" class="follower" tag="follower"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const follower = ref(null);

onMounted(() => {
  const el = follower.value;
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  const ease = 0.1;

  const animate = () => {
    const dx = mouseX - currentX;
    const dy = mouseY - currentY;
    currentX += dx * ease;
    currentY += dy * ease;

    (el as any).style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    requestAnimationFrame(animate);
  };

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  animate();
});
</script>

<style scoped>
.app {
  height: 100vh;
  background: #0d1b42;
}

.follower {
  position: fixed;
  width: 10px;
  height: 10px;
  background-color: orange;
  border-radius: 50%;
  pointer-events: none;
  z-index: 200;
  top: 0;
  left: 0;
}
</style>
