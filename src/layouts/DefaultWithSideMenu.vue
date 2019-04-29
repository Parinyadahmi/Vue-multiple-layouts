<template>
    <div>
        <nav-bar/>

        <div class="container content-body">
            <div class="row">
                <div class="col-12 col-lg-3 form-group">
                   <side-menu/>
                </div>

                <div class="col-12 col-lg-9">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import NavBar from "../components/NavBar";
    import SideMenu from "../components/SideMenu";

    export default {
        components: {SideMenu, NavBar}
    }
</script>

<style lang="scss" scoped>
    .content-body {
        padding-top: 30px;
        padding-bottom: 30px;
    }
</style>