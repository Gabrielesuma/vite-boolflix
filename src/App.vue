<template>
  <HeaderComponent @movieSearch="getMovie()"/>
  <MainComponent/>
</template>

<script>
  import axios from 'axios';
  import {store} from './store.js';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components:{
      HeaderComponent,
      MainComponent
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getMovies(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
          console.log(res.data.results);
        })
      },
      getTvSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          console.log(res.data.results);
        })
      },
      getMovie(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
          this.store.movies = res.data.results;
        })
      }
    },
    created(){
      this.getMovie();
      this.getMovies();
      this.getTvSeries();
    }
  }
</script>

<style lang="scss" scoped>

</style>