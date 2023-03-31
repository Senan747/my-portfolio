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
          ['React', '60.2%'],
          ['CSS', '30.1%'],
          ['JS', '9.7%']
        ],
        link: 'https://senan-dev-image-editor.netlify.app/',
        linkGithub: 'https://github.com/Senan747/developed-image-editor-v2.0-'
  },
  {
        name: 'Paint App',
        lang: [
          ['Angular', '50.0%'],
          ['CSS', '40.0%'],
          ['JS', '10.0%']
        ],
        link: 'https://senan-paint-js.netlify.app/',
        linkGithub: 'https://github.com/Senan747/paint-js'
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
          <img src="../img/github.png" alt="">
           <a :href="data[slideNumber].link">Link</a> 
        </div>
        <div class="link">
          <img src="../img/link.png" alt="">
          <a :href="data[slideNumber].linkGithub">Github</a>
        </div>
     
      </div>
      
    </div>
  </div>  
</template>
<style scoped>
.total{
  width: 800px;
  border-radius: 20px;
  height: 600px;
  position: relative;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: cover;
  background-size: auto
}

.info{
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-around;
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
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

a {
  text-decoration: none;
  color: white;
  font-size: 20px;
}
.touch img {
  width: 20px;
  height: 20px;
}
.link, .git{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
}
</style>