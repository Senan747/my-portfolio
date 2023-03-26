<template>
    <transition name="img" appear>
        <div class="total">
                <p>As a front-end developer, I have extensive experience working with Vue.js, Git, and a strong foundation in HTML, CSS, and JavaScript. These skills allow me to create high-quality web applications that are scalable, efficient, and easy to maintain.
                    With my knowledge of Vue.js, I am able to design and build dynamic user interfaces and single-page applications that are both user-friendly and visually engaging.
                    I am skilled in using Git as a version control system to manage my codebase, collaborate with other developers, and ensure the integrity of my projects over time.
                    Whether working on a team or independently, I am committed to using Vue.js and Git to deliver exceptional results for my clients, ensuring that their web applications are fast, reliable, and easy to use.
                    I am constantly learning and exploring new features and techniques in Vue.js and Git, as well as HTML, CSS, and JavaScript, to stay up-to-date with the latest trends and best practices in front-end development.
                </p> 
                <div class="img">
                    <img src="../img/vue.png" alt="">
                    <img src="../img/html1.png" alt="">
                    <img src="../img/css1.png" alt="">
                    <img src="../img/js1.webp" alt="">
                </div>
            </div>
    </transition>
        
</template>

<style scoped>
.total {
    max-width: 1200px;
}
p{
    text-align: justify;
}
div{
    font-size: 20px;
    border-radius: 30px;
    background: #6A7B8B;
    padding: 15px;
}
img {
    width: 150px;
    height: 150px;
}
.img {
    
    display: flex;
    justify-content: space-around;
}
.img-enter-from,
.img-leave-to{
    opacity: 0;
}
.img-enter-to,
.img-leave-from {
    opacity: 1;
}
.img-enter-active {
    transition: all 0.7s ease-in-out;
}
.img-leave-active {
    transition: all 0.7s ease-in-out;
}
</style>