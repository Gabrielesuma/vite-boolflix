import {reactive} from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        tv: 'search/tv'
    },
    options:{
        params:{
            api_key: 'a03242de124cb6c5627361ac6c2bc2d1',
            query: ''
        }
    },
    imageUrl: "http://image.tmdb.org/t/p/original",
    movies: [],
    series: []
});