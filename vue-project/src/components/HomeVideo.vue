<template>
    <div id="app">
      <split-carousel>
        <split-carousel-item >
          <p>HOLA </p>
        </split-carousel-item>
        <split-carousel-item >
            <p>HOLA </p>
          </split-carousel-item>
          <split-carousel-item >
            <p>HOLA </p>
          </split-carousel-item>
      </split-carousel>
    </div>
  </template>
  
<script>
    import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";
    export default {
        components: {
            SplitCarousel,
            SplitCarouselItem
    }
    };
</script>