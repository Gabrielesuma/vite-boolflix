<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="card flip-card-front">
                <img :src="store.imageUrl + item.poster_path" class="card-img-top" :alt="item.title || item.name">
            </div>
            <div class="card flip-card-back">
                <div class="card-body">
                    <h4 class="card-title">{{ item.title || item.name }}</h4>
                    <h6 class="card-title">{{ item.original_title || item.original_name }}</h6>
                    <p class="card-text">
                        <div class="flag">
                            <img :src="imgFlag" :alt="item.original_language + ' flag'">
                        </div>
                        <div class="stars">
                            <i :class="vote >= n ? 'fa-solid' : 'fa-regular'" class="fa-star" v-for="n in 5"></i>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import {store} from '../store.js';
    export default {
        name: 'CardComponent',
        props:{
            item: Object
        },
        data(){
            return{
                store,
                flags:['de', 'en', 'es', 'fr', 'it']
            }
        },
        computed:{
            imgFlag() {
                if(this.flags.includes(this.item.original_language)){
                    return `/images/${this.item.original_language}.png`;
                } else {
                    return '/images/spaceholder.jpg';
                }
            },
            vote(){
                return Math.ceil(this.item.vote_average / 2);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .flag{
        img{
            height: 30px;
        }
    }
    .stars{
        color: gold;
    }

    .flip-card{
        aspect-ratio: 1/1.5;
        background-color: transparent;
        perspective: 1000px;

        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.8s;
            transform-style: preserve-3d;
        }
        &:hover .flip-card-inner{
            transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back{
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            /* Safari */
            backface-visibility: hidden;
        }
        .flip-card-back{
            padding: 20px;
            background-color: black;
            color: white;
            transform: rotateY(180deg);
            overflow-x: hidden;
            overflow-y: auto;
        }
    }
</style>