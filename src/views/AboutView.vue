<script setup>
import { ref, onBeforeMount } from 'vue'
import Language from '../components/Language.vue'

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
const showLang = ref(false)
const showLanguage = () => {
   showLang.value = true
}
</script>

<template>
  <transition name="about" appear>
    <main class="about-page">
      <div id="text"><h1>{{ typedText }}</h1></div>
      <ul class="questions" >
        <li @click="showLanguage">which skills do you have?</li> 
        <li>Where do you study?</li> 
        <li>How is your roadmap?</li>
        <li>Why do you choose Front-end?</li>
        <li>What is your future plan?</li>
      </ul> 
      <Language v-if="showLang"/>
    </main>
  </transition>
</template>

<style>
.about-page {
    background-color: #f0dae5;
}
h1{
    text-align: center;
}
ul{
    text-align: center;
    display: flex;
    list-style: none;
    align-items: center;
    flex-wrap: wrap;
}
li{
    width: auto;
    font-size: 20px;
    height: auto;
    background-color: #a5b6c7;
    padding: 20px 15px;
    margin: 20px;
    border-radius: 15px;
    justify-content: center;
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
