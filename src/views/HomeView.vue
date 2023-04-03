<script setup>
import { ref } from 'vue'

const showP = ref(false)


</script>
<template>
    <main class="home-page">
        <div class="slider">
            <span style="--i:1;"><img src="../img/hello(5).png" alt=""></span>
            <span style="--i:2;"><img src="../img/photo.jpeg" alt=""></span>
            <span style="--i:3;"><img src="../img/hello(4).png" alt=""></span>
            <span style="--i:4;"><img src="../img/hello(1).png" alt=""></span>
            <span style="--i:5;"><img src="../img/me.jpeg" alt=""></span>
            <span style="--i:6;"><img src="../img/hello(2).png" alt=""></span>

        </div>
    </main>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.home-page {
    /* background-color: aqua; */
    background-color:#2c5364;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.slider {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: rotate 30s linear infinite;
}
@keyframes rotate {
    0% {
        transform: perspective(1000px) rotateY(0deg);
    }
    100% {
        transform: perspective(1000px) rotateY(360deg);
    }
}
.slider span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i)*55deg)) translateZ(350px);
}

.slider span img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    transition: 2s;
}
.slider span:hover img{
    transform: translateY(-50px) scale(1.2);
}
.fade-enter-from {
    opacity: 0;

}
/* .fade-enter-to {
    opacity: 1;
} */
.fade-enter-active {
    transition: all 2s ease;
}
/* .fade-leave-from {
    opacity: 1;
} */
.fade-leave-to {
    opacity: 0;
}
.fade-leave-active {
    transition: all 2s ease;
}

@media (max-width: 768px){
    .slider {
        width: 150px;
        height: 150px;
    }
}
</style>