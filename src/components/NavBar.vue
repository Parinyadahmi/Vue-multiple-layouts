<template>
    <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="container">

                <a class="navbar-brand" href="#">
                    <img alt="Vue logo" class="logo" src="../assets/logo.png"> Multiple Layouts</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link :to="`/home`" tag="a" class="nav-link">
                                Home
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link :to="`/products`" tag="a" class="nav-link">
                                Products
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link :to="`/login`" tag="a" class="nav-link">
                                Log in
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>


<style lang="scss" scoped>
    .logo {
        height: 45px;
    }
</style>