<template>
    <transition name="img" appear>
        <div class="total">
               <div class="info">
                    <p>As a front-end developer, I have extensive experience working with Vue.js, Git, and a strong foundation in HTML, CSS, and JavaScript. These skills allow me to create high-quality web applications that are scalable, efficient, and easy to maintain.
                        With my knowledge of Vue.js, I am able to design and build dynamic user interfaces and single-page applications that are both user-friendly and visually engaging.
                        I am skilled in using Git as a version control system to manage my codebase, collaborate with other developers, and ensure the integrity of my projects over time.
                    </p>
                </div> 
                <div class="img">
                    <div><img src="../img/vue.png" alt=""></div>
                    <div><img src="../img/html1.png" alt=""></div>
                    <div><img src="../img/css1.png" alt=""></div>
                    <div><img src="../img/js1.webp" alt=""></div>
                </div>
        </div>
    </transition>
        
</template>

<style scoped>
.total {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 900px;
}
p{
    text-align: justify;
}
div{
    font-size: 20px;
    border-radius: 30px;
    background: #6A7B8B;
    color: white;
    padding: 15px;
}
img {
    display: flex;
    flex-wrap: wrap;
    max-width: 125px;
    max-height: 125px;
}
.info{
    display: flex;
    flex-wrap: wrap;
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

@media (max-width: 768px){
    img{
        max-width: 50px;
        max-height: 50px;
    }
    .total{
        margin: 0px;
        padding: 2px;
        
    }
    div{
        font-size: 15px;
    }
}
</style>