<template>
    <div class="project">
        <div class="project-image">
            <img :src="require(
                '../img/' + data.images[slideIndex] + '.png'
            )" alt="">
        </div>
        <div class="project-details">
            <div>
                <h1 class="product-details">
                    {{ data.names[slideIndex] }}
                </h1>
                <h1 class="price">
                    $<span class="project-price">
                        {{ data.prices[slideIndex] }}
                    </span>,<sup>99</sup>
                </h1>
                <div class="details">
                    <div class="options">
                        <b class="project-option-title">
                            {{ data.optionTitles[slideIndex] }}
                        </b>
                        <ul class="option-list">
                            <li
                              v-for="(option, index) in data.options[slideIndex]" :key="index"
                              class="option"
                              :class="[active === index ? 'option-active' : '']"
                              @click="() => active = index"
                            >
                                {{ option }}
                            </li>
                        </ul>
                        
                    </div>
                    <ProgressBar :count="count" :data="data" :slideIndex="slideIndex" />
                </div>
                <div class="buttons">
                    <button type="button" class="btn-primary">
                        <b>Add to Chart</b>
                    </button>
                    <button type="button" class="btn-secondary">
                        <span class="material-symbols-outlined">
                           favorite
                        </span>
                        Add to wishlist
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProgressBar from '../components/ProgressBar.vue'
import { defineProps } from 'vue'

const { data, slideIndex, count, active } = defineProps(['data', 'slideIndex', 'count', 'active'])
 
</script>

<style scoped>
.project {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #103248;
}

.project-details {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.project-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.project-image img {
    width: 70%;
    filter: drop-shadow(0 0 3em rgba(0, 0, 0, 0.3))
}
.project h1 {
    font-size: 2.8em;
    margin: 0;
}

.project .price {
    font-weight: 300;
    margin: 0.2em 0;
}
.details {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 2em 0;
}
.project-option-title {
    margin-left: 0.5em;
}
.options {
    padding: 1em 1.5em 1em 0;
    margin: 1em 0;
    border-right: 1px solid #103248;
    justify-self: flex-start;
}
.options ul {
    list-style: none;
    margin: 0.5em 0;
    padding: 0;
}

.options ul li {
    display: inline-block;
    margin-right: 0.5em;
    padding: 0.5em;
    border-radius: 3em;
    cursor: pointer;
}
.option-active {
    border: 1px solid #12c141;
}
.buttons button {
    border: none;
    cursor: pointer;
    text-transform: uppercase;
}
.btn-primary {
    color: white;
    background: #12c141;
    font-size: 0.9em;
    padding: 1em 2em;
    border-radius: 3em;
    box-shadow: 0 1em 2em #12c141;
    margin-right: 1em;
    transition: 0.3s;
}
.btn-primary:hover {
    background: #fff;
    color:#12c141;
}

.btn-secondary {
    background: none;
    border: none;
}

.btn-secondary span {
    color: #10afcf;
    margin-right: 0.5em;
}
@media screen and (max-width: 880px){
    .project-details {
        justify-content: center;
    }

    .details {
        flex-direction: column;
    }
    .project {
        grid-template-columns: 1fr;
    }
    .project-image img {
        width: 50%;
    }
    .options {
        border-right: none;
        padding-right: 0;
    }
    .buttons button {
        display: block;
        margin: 2.5em auto;
    }
}
</style>