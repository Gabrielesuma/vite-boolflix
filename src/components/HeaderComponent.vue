<template>
    <header>
        <h1>BOOLFLIX</h1>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Cerca..." v-model.trim="store.options.params.query" @keyup.enter="searchMedia">
            <button class="btn btn-danger" type="button" @click="searchMedia">Cerca</button>
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
        },
        methods: {
            searchMedia(){
                this.$emit('searchApi');
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