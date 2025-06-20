import { defineStore } from 'pinia';

import StorageKey from '@/config/storage';
import type { Wearable } from '@/lib/types';
import WearableService from '@/services/wearables';

export const useWearableStore = defineStore('wearables', {
  state: () => ({
    items: [] as Wearable[],
    wearable: null as Wearable | null,
    loading: false,
    error: false,
  }),

  actions: {
    saveWearable(wearable: Wearable) {
      this.wearable = wearable;
      localStorage.setItem(StorageKey.WEARABLE, JSON.stringify(wearable));
    },

    loadWearable() {
      const stored = localStorage.getItem(StorageKey.WEARABLE);
      if (stored) {
        this.wearable = JSON.parse(stored);
      }
    },

    async fetchAll(username: string) {
      this.loading = true;
      this.error = false;
      try {
        this.items = await WearableService.getWearablesByUser(username);
      } catch (err) {
        this.error = true;
        console.error('Error fetching wearables:', err);
      } finally {
        this.loading = false;
      }
    },

    async fetchOne(userId: string, wearableId: string) {
      this.loading = true;
      this.error = false;
      try {
        const wearable = await WearableService.getWearableDetail(userId, wearableId);
        this.saveWearable(wearable);
      } catch (err) {
        this.error = true;
        console.error('Error fetching wearable:', err);
      } finally {
        this.loading = false;
      }
    },

    async loadWearableOrFetch(username: string, slug: string) {
      const stored = localStorage.getItem('wearable');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.slug === slug) {
          this.wearable = parsed;
          return;
        }
      }

      await this.fetchOne(username, slug);
    },
  },
});
