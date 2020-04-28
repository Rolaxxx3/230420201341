<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>

    export default {
        name: 'App',
    }
</script>

<style lang="scss" scoped>
    @import '~@/scss/variables';

    #app {
        max-width: $app-max-width;
    }
</style>
