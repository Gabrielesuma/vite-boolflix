<template>
    <div class="container">
        <h2>{{title}}</h2>
        <div class="row gy-4">
            <div class="col-12 col-md-6 col-lg-3" v-for="(card, index) in list" :key="card.id">
                <CardComponent :item="card"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {store} from '../store.js';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        components:{
            CardComponent
        },
        props:{
            title: String,
            list: Array
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