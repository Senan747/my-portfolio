<script setup>
import { ref, onBeforeMount } from 'vue'
import Language from '../components/Language.vue'
import Study from '../components/Study.vue'
import Plan from '../components/Plan.vue'
import Roadmap from '../components/Roadmap.vue'
import Frontend from '../components/Frontend.vue'

const components = [
  {name: 'which skills do you have?', component: Language},
  {name: 'Where do you study?', component: Study},
  {name: 'How is your roadmap?', component: Roadmap},
  {name: 'Why do you choose Front-end?', component: Frontend},
  {name: 'What is your future plan?', component: Plan},
]
const activeComponent = ref("")
const showComponent = (index) => {
  activeComponent.value = components[index].component
}


const typedText = ref("")
const text = ref("Hello, I'm Senan Memmedov")
const i = ref(0)
onBeforeMount(() => {
  setTimeout(typing, 50)
})

function typing() {
  if (i.value < text.value.length) {
    typedText.value += text.value.charAt(i.value)
    i.value++
    setTimeout(typing, 50)
  }
}
</script>

<template>
  <transition name="about" appear>
    <div class="about-page">
      <div id="text"><h1>{{ typedText }}</h1></div>
      <div class="ul">
        <button v-for="(component, index) in components" :key="index" @click="showComponent(index)">
          {{ component.name }}
        </button>
      </div>
      <div class="container">
        <component :is="activeComponent" v-if="activeComponent" />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.about-page {
    padding: 50px;
    background-color: #f0dae5;
    min-height: 100vh;
    min-width: calc(100vw - 2rem -32px);
}
h1{
    text-align: center;
}
.ul{
    text-align: center;
    display: flex;
    list-style: none;
    align-items: center;
    flex-wrap: wrap;
}
.container {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
button{
    width: auto;
    font-size: 20px;
    height: auto;
    background-color: #a5b6c7;
    padding: 20px 15px;
    margin: 20px;
    border-radius: 15px;
    justify-content: center;
    cursor: pointer;
    position:relative;
    transition: color 0.4s linear;
}
button:hover {
  color: white;
}
button::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #1b1d1f;
  z-index: -1;
  transition: transform 0.5s;
  transform-origin: 0 0;
  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  transform: scaleX(0);
}
button:hover::before {
  transform: scaleX(1);
}


.about-enter-from {
  opacity: 0;
}
.about-enter-to {
  opacity: 1;
}
.about-enter-active {
  transition: all 2s ease;
}

@media (max-width: 768px){
  button{
    width: auto;
    font-size: 15px;
    height: auto;
    background-color: #a5b6c7;
    padding: 10px 5px;
    /* margin: 10px; */
    border-radius: 10px;

  }
  .ul{
    margin: 10px;
  }
  .container {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 400px;
  margin-left: 28px;
}
  
}

@media (max-width: 1273px){
  .container{
    max-width: 600px;
    
  }
  button{
    font-size: 18px;
    padding: 12px 7px;
    margin: 13px;
  }
  .ul{
     max-width: 700px;
  }
  .about-page{
    min-width: calc(100vw - 2rem -32px);
  }
}
</style>
