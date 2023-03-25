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
      <component :is="activeComponent" v-if="activeComponent" />
    </div>
  </transition>
</template>

<style>
.about-page {
    background-color: #f0dae5;
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
</style>
