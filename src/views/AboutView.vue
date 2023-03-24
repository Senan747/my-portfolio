<script setup>
import gsap from 'gsap'
</script>
<template>
    <transition name="about" appear>
        <main class="about-page">
            <h1>About</h1>
            <p>This is the about page</p>
        </main>
    </transition>
    
</template>

<style>
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