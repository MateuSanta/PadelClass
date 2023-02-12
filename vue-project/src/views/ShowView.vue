<script setup>
import { ref } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()

const url = "http://localhost:3000/cards";
const cards = ref([]);

let cardsFilter = ref();


async function getCards() {
    const response = await fetch(url);
    const data = await response.json();
    cards.value = data;

}

await getCards();
cardId();
function cardId() {

    cardsFilter.value = cards.value.find(card => card.id == route.params.id)
    console.log(route.params.id)
    console.log(cardsFilter.value.id)
}



</script>


<template>
    <H1>Bienvenido al Curso sobre  {{ cardsFilter.nombre }}</H1>
</template>