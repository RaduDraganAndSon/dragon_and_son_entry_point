import { defineStore } from 'pinia'

export const useShopStore = defineStore('shopStore', {
  state: () => ({
    storeDetails: {
      name: 'Dragon & Son',
      tagline: 'We are a repair cafe with a eye for custom builds. We are known for bike builds, my gigantic neon yellow cargo bike might have something to do with it.',
      address: 'Bennekelstraat 112, 5654 DJ Eindhoven',
      phone: '0648459980',
      email: 'radu.dragan@dragon-and-son.com',
      website: 'https://dragon-and-son.com/',
      socialMedia: [
        { url: 'https://wa.me/31648459980', rank: 1 },
        { url: 'https://www.instagram.com/dragon_and_son/', rank: 2 },
        { url: 'https://www.facebook.com/dragonandson/' },
        { url: 'https://www.youtube.com/@dragonandson', rank: 4 },
        { url: 'https://www.strava.com/clubs/dragonandson', rank: 5 },
        { url: 'https://www.linkedin.com/company/dragon-and-son/', rank: 6 },

      ],
    },
  }),
})
