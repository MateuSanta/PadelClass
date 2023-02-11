import { defineStore } from 'pinia'
import {ref} from 'vue'
import { onMounted } from 'vue'


export const useCardStore = defineStore('cards',()=>{
  
  const url="http://localhost:3000/cards";
  const cards = ref();

  
  async function fetchCards(){


    cards.value = await fetch(url)
    .then(data=>data.json())
    .then(data=>{

      console.log('data is fetched')
    })
    .catch(error=>console.log(error))

  }

  return {
    cards,
    fetchCards
  };
/*id : 'cards',   
state: () =>({
    cards : {},
    card: {}
  }),
  actions: {
    async getAll(){
      this.cards = await  fetch(url)
      .then(response => response.json())
      .then(data => (mostrarDatos(data)));

      console.log(this.cards)
    }
  } */

});
