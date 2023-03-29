<script setup>
   import { ref } from 'vue'
   import Slide from '../components/Slide.vue'
</script>

<template>
    <div>
        <h1>MY PROJECTS</h1>
    </div>
    <div class="container">
        <div class="button">
            <span class="material-symbols-outlined">
               arrow_back_ios
            </span>
        </div>
        <div class="slide">
            <Slide />
        </div>
        <div class="button">
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
    border: 1px solid red;
    width: 800px;
    height: 600px;
}
.button {
    border: 50%;
}
</style>
