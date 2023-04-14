<template>
    <transition name="road" appear>
        <div class="total">
            <div class="lang cpp">C++ <p>My journey in programming started with C++, which gave me a strong foundation in the principles of programming, data structures, and algorithm.</p> </div>
            <span class="material-symbols-outlined">arrow_downward</span>
            <div class="lang html">HTML and CSS  <p>Then I'm interested in Front-end. That's why I started to learn HTML and CSS. </p></div>
            <span class="material-symbols-outlined">arrow_downward</span>
            <div class="lang js">JavaScript <p>Almost I knew that I'm good at Front-end. After that, I had learnt JavaScript. I began to create applications</p></div>
            <span class="material-symbols-outlined">arrow_downward</span>
            <div class="lang git">Git <p>I am also skilled in Git, a version control system that allows me to efficiently manage and track changes to my codebase, collaborate with other developers, and maintain the integrity of my projects over time.</p></div>
            <span class="material-symbols-outlined">arrow_downward</span>
            <div class="lang vue">Vue.js <p>As a front-end developer, I have extensive experience working with Vue.js, a powerful JavaScript framework for building dynamic user interfaces and single-page applications.</p></div>
        </div>  
    </transition>
    
</template>

<style scoped>
.total{
    font-size: 20px;
    border-radius: 30px;
    background: #6A7B8B;
    padding: 30px;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: rgb(0, 4, 7);
}
div {
    padding: 4px 5px;
    background-color: #AEB6BF;
}
.lang{
    text-align: center;
    font-weight: bold;
}
p{
    text-align: justify;
}
.material-symbols-outlined{
    text-align: center;
    font-size: 40px;
}
.road-enter-from,
.road-leave-to{
    opacity: 0;
}
.road-enter-to,
.road-leave-from {
    opacity: 1;
}
.road-enter-active {
    transition: all 0.7s ease-in-out;
}
@media (max-width: 768px){
    .total {
        font-size: 15px;
        padding: 15px;
        border-radius: 10px;
        max-width: 300px;
    }
}
</style>