<template>
    <main class="container">
        <CardList title="Movies" :list="store.movies"/>
        <CardList title="Tv Series" :list="store.series"/>
    </main>
</template>

<script>
import {store} from '../store.js';
    import CardList from './CardList.vue';
    export default {
        name: 'MainComponent',
        components:{
            CardList
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