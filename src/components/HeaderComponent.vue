<template>
    <header>
        <h1>BOOLFLIX</h1>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Cerca..." v-model="store.options.params.query">
            <button class="btn btn-danger" type="button" @click="$emit('movieSearch')">Cerca</button>
        </div>
    </header>
</template>

<script>
    import {store} from '../store.js';
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    header{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background-color: black;
        h1{
            color: $colorred;
        }
        div{
            width: 300px;
        }
    }
</style>