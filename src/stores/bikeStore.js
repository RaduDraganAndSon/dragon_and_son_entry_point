import { defineStore } from 'pinia'

export const useBikeStore = defineStore('bikeStore', {
  state: () => ({
    bikes: [
      {
        name: 'Summit XR',
        type: 'Mountain',
        description: 'Responsive trail geometry, carbon fork, and reliable all-terrain control.',
        price: '$2,499',
      },
      {
        name: 'Metro City',
        type: 'Commuter',
        description: 'Built for everyday city rides with comfort-focused geometry and integrated lights.',
        price: '$1,399',
      },
      {
        name: 'Aero One',
        type: 'Road',
        description: 'A lightweight performance bike for faster climbs, longer miles, and smoother speed.',
        price: '$2,899',
      },
      {
        name: 'Trail Lite',
        type: 'Hybrid',
        description: 'A versatile everyday option designed to balance speed, comfort, and stability.',
        price: '$1,149',
      },
      {
        name: 'Urban Plus',
        type: 'E-Bike',
        description: 'Power-assisted mobility for work commutes, errands, and long scenic rides.',
        price: '$2,199',
      },
      {
        name: 'Cinder Pro',
        type: 'Gravel',
        description: 'A durable all-road platform for rough pavement, dirt tracks, and adventure routes.',
        price: '$1,799',
      },
    ],
  }),
})
