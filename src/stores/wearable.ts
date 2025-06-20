import { defineStore } from 'pinia';

import WearableService from '@/services/wearables';

export const useWearableStore = defineStore('wearables', {
  state: () => ({
    items: [] as any[],
    selected: null as any | null,
    loading: false,
    error: false,
  }),

  actions: {
    async fetchAll(username: string) {
      this.loading = true;
      this.error = false;
      try {
        this.items = await WearableService.getWearablesByUser(username);
      } catch (err) {
        this.error = true;
        console.error('Error fetching:', err);
      } finally {
        this.loading = false;
      }
    },

    async fetchOne(username: string, slug: string) {
      this.loading = true;
      this.error = false;
      try {
        this.selected = await WearableService.getWearableDetail(username, slug);
      } catch (err) {
        this.error = true;
        console.error('Error fetching detail:', err);
      } finally {
        this.loading = false;
      }
    },
  },
});
