import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useDarkModeStore = defineStore('darkMode', () => {
  const isDark = ref(
    localStorage.getItem('isDark') === 'true' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  watch(
    isDark,
    (newVal) => {
      document.documentElement.classList.toggle('dark', newVal);
      localStorage.setItem('isDark', String(newVal));
    },
    { immediate: true },
  );

  function toggleDark() {
    isDark.value = !isDark.value;
  }

  return { isDark, toggleDark };
});
