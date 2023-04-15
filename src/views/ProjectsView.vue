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
    <div class="total">
        <div class="flex">
            <h1>MY PROJECTS</h1>
        </div>
        <div class="container">
            <div class="button" @click="back" v-show="slideNumber > 0">
                <span class="material-symbols-outlined" >
                arrow_back_ios
                </span>
            </div>
            <div class="slide">
                <Slide :slideNumber="slideNumber" />
            </div>
            <div class="button" @click="next" v-show="slideNumber < 2">
                <span class="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.total {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
h1{
    font-size: 50px;
    text-align: center;
}
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.slide {
    border-radius: 20px;
    width: 800px;
    height: 600px;
}
.button {
    border-radius: 100%;
    cursor: pointer;
    background-color: #1E293B;
    display: flex;
    padding: 5px;
    margin: 5px;
    user-select: none;
}
.button span {
    color: white;
}
@media (max-width: 1273px){
    .slide{
        width: 600px;
        height: 5000px;
    }
}
@media (max-width: 768px){
    .flex{
        margin-bottom: 100px;
    }
    .slide{
        width: 300px;
        height: 400px;
    }
    h1{
    font-size: 25px;
    text-align: center;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.slide {
    border-radius: 10px;
   
}
.button {
    border-radius: 100%;
    cursor: pointer;
    background-color: #1E293B;
    display: flex;
    padding: 5px;
    margin: 5px;
    user-select: none;
}
}
</style>
