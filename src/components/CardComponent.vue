<template>
    <div>
        <span>{{ title }}</span>
        <br>
        <span>{{ original_title }}</span>
        <br>
        <span>{{ original_language }}</span>
        <br>
        <span>{{ vote_average }}</span>
        <br>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['title', 'original_title', 'original_language', 'vote_average']
    }
</script>

<style lang="scss" scoped>

</style>