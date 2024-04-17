<template>
    <div>
        <h2>Movies</h2>
        <ul class="row">
            <li class="col-12 col-md-6 col-lg-3" v-for="movie in store.movies" :key="movie.id">
                <CardComponent :title="movie.title" :original_title="movie.original_title" :original_language="movie.original_language" :vote_average="movie.vote_average"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import {store} from '../store.js';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'MovieList',
        components:{
            CardComponent
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>