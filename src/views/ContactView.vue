<script setup>
import { ref } from 'vue'
import gsap from 'gsap'
function beforeEnter (el) {
  el.style.opacity = 0
  el.style.transform = 'translateY(100px)'
}

function enter (el, done) {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    onComplete: done
  })
}

</script>
<template>
    <div class="total">
        <div class="form">
            <form action="https://formsubmit.co/1senanmemmedov@gmail.com" method="POST">
                <label for="">
                    My email is 1senanmemmedov@gmail.com. I'll respond quickly. Thanks
                </label>
                <input type="email" name="email" placeholder="Email Address" required>
                <textarea placeholder="Write something that you want to say"  name="name" cols="30" rows="10" required></textarea>
                <button type="submit">send</button>
            </form>
        </div>
        <div class="social">
            <transition-group 
               appear
               tag="ul"
               @before-enter="beforeEnter"
               @enter="enter"
            >
                <li>
                    <div>
                        <span class="material-symbols-outlined">
                           call
                        </span>
                    </div>
                    <div>
                       Telephone
                       <br>
                       +994 (50) 783 29 95
                    </div>
                    
                </li>
                <li>
                    <img src="../img/linkedin.png" alt="">
                    <a href="https://www.linkedin.com/in/senan-memmedov-69a280253/" target="_blank">Linkedin</a>
                </li>
                <li>
                    <img src="../img/github.png" alt="">
                    <a href="https://github.com/Senan747" target="_blank">Github</a>
                </li>
                <li>
                    <img src="../img/instagram.png" alt="">
                    <a href="https://instagram.com/senanthesad?igshid=ZDdkNTZiNTM=" target="_blank">Instagram</a>
                </li>
            </transition-group>
        </div>
    </div>
</template>
<style scoped>
.total {
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form {
    padding: 50px 100px;

}

input, textarea {
    width: 300px;
    padding: 5px;
    margin: 10px;
    display: block;
}
button {
    padding: 5px 10px;
    background-color: #1e293b;
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    width: 100px;
    text-align: center;
    margin: 10px;
}
ul {
    list-style: none;
    display: flex;
    flex: 1 1;
    max-width: 390px;
    height: 500px;
    border: 1px solid grey; 
    flex-wrap: wrap;    
}

li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    border: 1px solid rgba(200, 193, 193, 0.7);
    padding: 0px;
    margin: 20px;
    text-align: center;
    border-radius: 15px;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
                -6px -6px 10px -1px rgba(255, 255, 255, 0.7)
}
img {
    text-align: center;
    width: 50px;
    height: 50px;
    display: block;
}
.material-symbols-outlined {
    font-size: 50px;
    color:#1e293b;
}
a {
    text-decoration: none;
}

@media (max-width: 768px){
    .total{
        flex-direction: column;
    }
    ul {
    max-width: 200px;
    max-height: 800px;
    border: 1px solid grey; 
    flex-wrap: wrap;    
}
.form {
    padding: 25px 75px;

}


input, textarea {
    width: 300px;
    padding: 5px;
    margin: 10px;
    display: block;
}
img{
   width: 25px;
   height:25px;
   margin-bottom: 10px;
}
.material-symbols-outlined{
    font-size: 25px;
}
}

</style>