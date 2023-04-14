<script setup>
import { ref, defineProps } from 'vue'

const {slideNumber} = defineProps(['slideNumber'])

const data = [
    {
        name: 'Quiz app',
        lang : [
          ['Vue', '60.1%'],
          ['CSS', '20.1%'],
          ['JS', '9.6%']
        ],
        linkGithub : 'https://github.com/Senan747/quiz-app-Vue.js',
        link: 'https://quiz-app-vue-js-ashen.vercel.app/',
        img: '../src/img/back1.jpg'
    },
    {
        name: 'Image Editor App',
        lang: [
          ['JS', '49.9%'],
          ['CSS', '25.4%'],
          ['HTML', '24.7%']
        ],
        link: 'https://senan-dev-image-editor.netlify.app/',
        linkGithub: 'https://github.com/Senan747/developed-image-editor-v2.0-',
        img: '../src/img/image-editor4.jpg'
  },
  {
        name: 'Paint App',
        lang: [
          ['JS', '45.9%'],
          ['CSS', '25.1%'],
          ['HTML', '29%']
        ],
        link: 'https://senan-paint-js.netlify.app/',
        linkGithub: 'https://github.com/Senan747/paint-js',
        img: '../src/img/paint3.jpeg'
  }
    
]
</script>
<template>
<div class="total" :style="{ 'background-image': 'url(' + data[slideNumber].img + ')' }">
    <div class="info">
      <div class="center">
        <h1>{{ data[slideNumber].name }}</h1>
        <ul>
          <li v-for="language in data[slideNumber].lang " :key="language">
              {{ language[0] }}
              {{ language[1] }}
              {{ language[2] }}
          </li>
        </ul>
      </div>
      <div class="touch">
        <div class="git">
           <img src="../img/link.png" alt="">
           <a :href="data[slideNumber].link" target="_blank">Link</a> 
        </div>
        <div class="link">
          <img src="../img/github.png" alt="">
          <a :href="data[slideNumber].linkGithub" target="_blank">Github</a>
        </div>
      </div>
      
    </div>
  </div>  
</template>
<style scoped>
.total{
  max-width: 800px;
  border-radius: 20px;
  max-height: 600px;
  position: relative;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

}

.info{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;


}
h1{
  color: white;
  font-weight: 800;
  font-size: 50px;
  text-align: center;
}
ul{
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-around;
  list-style: none;
}
li{
  display: flex;
  color: #334155;
  background-color: #fff;
  border: 5px solid #334155;
  border-radius: 100%;
  width: 110px;
  height: 110px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

a {
  text-decoration: none;
  color: white;
  font-size: 22px;
  font-weight: 600;
}
.touch img {
  width: 25px;
  height: 25px;
  padding-right: 5px;
}
.link, .git{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
}

@media (max-width: 768px){
  .total{
    max-width: 400px;
    max-height: 300px;
  }
}
</style>