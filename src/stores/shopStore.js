import { defineStore } from 'pinia'

export const useShopStore = defineStore('shopStore', {
  state: () => ({
    storeDetails: {
      name: 'Dragon & Son',
      tagline: 'Premium bikes for city, trail, and everyday adventure.',
      address: '152 Ridge Avenue, Portland, OR',
      phone: '(503) 555-0148',
      email: 'hello@dragonandsonbikes.com',
      website: 'https://dragon-and-son.com/',
    },
  }),
})
