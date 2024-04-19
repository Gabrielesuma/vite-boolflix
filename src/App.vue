<template>
  <video v-if="intro" src="/images/netflixIntro.mp4" autoplay muted></video>
  <div v-else>
    <HeaderComponent @searchApi="getMedia"/>
    <MainComponent/>
  </div>
  
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
        store,
        intro: true
      }
    },
    methods:{
      getMedia(){
        if(this.store.options.params.query){
          this.getMovies();
          this.getTvSeries();
        }
      },
      getMovies(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
          console.log(res.data.results);
          this.store.movies = res.data.results;
        }).catch((error)=>{
          console.log(error);
        }).finally(()=>{
          console.log('finally');
        })
      },
      getTvSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          console.log(res.data.results);
          this.store.series = res.data.results;
        }).catch((error)=>{
          console.log(error);
        }).finally(()=>{
          console.log('finally');
        })
      }
    },
    created(){
      setTimeout(() => {
        this.intro = false
      },6000)
    }
  }
</script>

<style lang="scss" scoped>
  video{
    width: 100%;
  }
</style>