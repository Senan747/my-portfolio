<script setup>
import ProjectDetails from '../components/ProjectDetails.vue'
import { ref, onBeforeMount } from 'vue'

const slideIndex = ref(0)
const count = ref(0)
const active = ref(1)
const data = {
  images: [
    "product1",
    "product2",
    "product3",
  ],
  names: [
    "Skywalker's R2-D2",
    "Han Solo's Blaster",
    "Poe Dameron's BB-8",
  ],
  prices: [
    "6.599",
    "2.259",
    "5.999",
  ],
  options: [
    ["Anakin", "Luke"],
    ["50 Meters", "75 Meters"],
    ["T-70X-Wing", "T-650X-Wing"],
  ],
  progress: [80, 25, 100],
  backgrounds: [
    "background1",
    "background2",
    "background3",
  ]
};
const updateCount = () => {
    const target = data.progress[slideIndex]
    if(count < target){
        count.value++
        setTimeout(updateCount, 30)
    } else {
        count.value = target
    }
}
const slideLeft = () => {
    slideIndex.value--
    if(slideIndex < 0) {
        slideIndex.value = data.names.length - 1
    }
}
const slideRight = () => {
    slideIndex.value++
    if(slideIndex > data.names.length - 1){
        slideIndex = 0
    }
}

onBeforeMount(() => {
    setTimeout(updateCount, 30)
})
</script>
<template>
    lkjflskfjslkf
    <section class="project-slider">
        <img src="../assets/logo.svg" alt="" class="logo">
        <div class="card">
            <div 
                class="panel-1"
                :style="`background: url(${require('../src/img/' + data.backgrounds[slideIndex] + '.jpg')})`"

            >

            </div>
            <div class="panel-2"></div>
            <ProjectDetails 
              :data="data"
              :slideIndex="slideIndex"
              :count="count"
              :active="active"
            />
            <div class="arrow-left">
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </div>
            <div class="arrow-right">
                <span class="material-symbols-outlined">
                    chevron_right
                </span>
            </div>
        </div>
    </section>
</template>
<style scoped>
.project-slider {
    padding: 2em;
    background: linear-gradient(-45deg, #abd7d7, #e8ecf0);
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    width: 40%;
    height: 90%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
.card {
    padding: 2em;
    width: 90vw;
    height: 90vh;
    min-height: 35em;
    max-width: 1050px;
    position: relative;
}

.panel-1, .panel-2 {
    position: absolute;
    box-shadow: 0 0 4em 3em rgba(0, 0, 0, 0.1);
    border-radius: 2em;
    top: 50%;
    transform: translateY(-50%);
}

.panel-1 {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    right: 0;
    width: 80%;
    height: 90%;
    overflow: hidden;
    z-index: 1;
    transition: 0.3s;
}

.panel-1::before {
    content: "";
    background: linear-gradient(45deg, rgb(255, 255, 255) 0%, rgb(221, 223, 227) 40%, rgba(224, 255, 245, 0.8));
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.panel-2 {
    background: linear-gradient(#1bb843 0%, #1ba7a1 100%);
    left: 0;
    width: 50%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
}
.panel-2::before {
    content: "";
    background: url(../img/star-wars.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: -5em;
    transform: translateY(-50%) rotate(-90deg);
    z-index: 2;
}

.arrow-left, .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 4em;
    height: 4em;
    background: #10afcf;
    color: white;
    border-radius: 50%;
    text-align: center;
    line-height: 4.2em;
    z-index: 2;
    transition: 0.3s;
    cursor: pointer;
}

.arrow-left span,
.arrow-right span {
    font-size: 1.5em;
}

.arrow-left {
    left: -1em;
}

.arrow-right {
    right: -1em;
}

.arrow-left:hover,
.arrow-right:hover {
    background: white;
    color: #10afcf;
}

@media screen and (min-width: 1000px) {
    .arrow-left {
        left: -2em;
    }
    .arrow-right {
        right: -2em;
    }
}
@media screen and (max-width: 880px) {
    .panel-1, .panel-2 {
        display: none;
    }

    .card{
        background: linear-gradient(45deg, rgb(255, 255, 255) 0%, rgb(221, 223, 227) 40%, rgba(224, 255, 245, 0.8));
        text-align: center;
        height: initial;
        padding: 3em 2em 1em 2em;
        border-radius: 2em;
    }
    .card h1 {
        margin-top: 1em;
    }
}
@media screen and (max-width: 700px) {
    .product-slider {
        font-size: 13px;
    }
}
</style>