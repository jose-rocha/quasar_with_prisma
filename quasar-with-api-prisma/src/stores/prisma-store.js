import { defineStore } from 'pinia';

export const usePrismaStore = defineStore('prisma-store', {
  state: () => ({
    name_product: '',
    image_url: '',
    bar_code: '',
    price: '',
  }),
});
