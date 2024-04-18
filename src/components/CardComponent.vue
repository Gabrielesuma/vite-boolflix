<template>
    <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ item.title || item.name }}</h5>
            <p class="card-text">
                {{ item.original_title || item.original_name }}
                <br>
                {{ item.original_language }}
                <br>
                {{ item.vote_average }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props:{
            item: Object
        }
    }
</script>

<style lang="scss" scoped>

</style>