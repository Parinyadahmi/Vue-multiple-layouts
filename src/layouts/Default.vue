<template>
    <div>

        <nav-bar/>

        <div class="container content-body">
            <router-view/>
        </div>

    </div>
</template>
<script>
    import NavBar from "../components/NavBar";

    export default {
        components: {NavBar}
    }
</script>

<style lang="scss" scoped>
    .content-body {
        padding-top: 30px;
        padding-bottom: 30px;
    }
</style>