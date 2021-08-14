import { createStore } from 'vuex'

const store = createStore({
  state: {
    destinations: [
      { pays: 'Zanzibar', image:    'https://images.unsplash.com/photo-1603728450199-fa59664ff482?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80', activite: 'de Zanzibar' },
      { pays: 'Tanzanie', image:    'https://images.unsplash.com/photo-1521299573904-7f325e44ecf5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHNhZmFyaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'du Safari' },
      { pays: 'Ile maurice', image: 'https://images.unsplash.com/photo-1578663702040-03bde22e5760?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWxlJTIwbWF1cmljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'du Zoo' },
      { pays: 'Bali', image:        'https://images.unsplash.com/photo-1553902000-e036b7d05af5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJhbGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'de la Jungle' },
      { pays: 'Turquie', image:     'https://cdn.pixabay.com/photo/2020/06/21/03/31/turkey-5323056__340.jpg', activite: 'de Izmir et Istanbul' },
      { pays: 'Maldives', image:    'https://images.unsplash.com/photo-1615320367500-bafc931a2ff0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxtYWxkaXZlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'vous Balader, vous relaxer, faire de la plongé sous marine' },
      { pays: 'Bora Bora', image:   'https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9yYSUyMGJvcmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'profiter des promenandes en Bateau' },
      { pays: 'Seychelles', image:  'https://images.unsplash.com/photo-1602490513731-6fe95da6f9ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHNleWNoZWxsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'profiter des promenandes Bateau'},
      { pays: 'Kenya', image:       'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2VueWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', activite: 'la plage' }
  ]
  },
  getters:{
    getDestinations(state){
      return state.destinations;
    }
  },
  mutations: {
  },
  actions: {

  },
  modules: {
  }
})

export default store;
