<script setup>
import { ref } from 'vue'

const showP = ref(false)


</script>
<template>
    <main class="home-page">
        <div class="slider">
            <span style="--i:1;"><div><h1>hello skalfjsaf</h1> </div></span>
            <span style="--i:1;"><div>AFKJLKDJLFKFKLJADS</div></span>
            <span style="--i:1;"><div>hello skalfjsaf</div></span>
            <span style="--i:1;"><div>hello skalfjsaf</div></span>
            <span style="--i:1;"><div>hello skalfjsaf</div></span>
            <span style="--i:1;"><div>hello skalfjsaf</div></span>
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
    background-color: linear-gradient(to right, #2c5364, #0f2027);
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
    transform: rotateY(calc(var(--i)*45deg)) translateZ(350px);
}

.slider span div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    object-fit: cover;
    transition: 2s;
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
</style>