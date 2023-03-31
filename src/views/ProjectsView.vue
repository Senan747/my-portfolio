<script setup>
   import { ref } from 'vue'
   import Slide from '../components/Slide.vue'

   const slideNumber = ref(0)

   function back() {
    slideNumber.value--
   }
   function next() {
    slideNumber.value++
   }
</script>

<template>
    <div>
        <h1>MY PROJECTS</h1>
    </div>
    <div class="container">
        <div class="button" @click="back">
            <span class="material-symbols-outlined">
               arrow_back_ios
            </span>
        </div>
        <div class="slide">
            <Slide :slideNumber="slideNumber" />
        </div>
        <div class="button" @click="next">
            <span class="material-symbols-outlined">
                arrow_forward_ios
            </span>
        </div>
    </div>
  
</template>
<style scoped>
h1{
    font-size: 50px;
    text-align: center;
}
.container {
    display: flex;
    flex-direction: row;

}
.slide {
    border-radius: 20px;
    width: 800px;
    height: 600px;
}
.button {
    border: 50%;
    cursor: pointer;
}
</style>
