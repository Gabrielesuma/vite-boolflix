<template>
    <div class="card">
        <img :src="store.imageUrl + item.poster_path" class="card-img-top" :alt="item.title || item.name">
        <div class="card-body">
            <h4 class="card-title">{{ item.title || item.name }}</h4>
            <h6 class="card-title">{{ item.original_title || item.original_name }}</h6>
            <p class="card-text">
                <div class="flag">
                    <img :src="imgFlag" :alt="item.original_language + ' flag'">
                </div>
                <br>
                <div class="stars">
                    <i :class="vote >= n ? 'fa-solid' : 'fa-regular'" class="fa-star" v-for="n in 5"></i>
                </div>
            </p>
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
</style>