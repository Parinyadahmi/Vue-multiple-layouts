<template>
    <div class="">
        <div class="fullscreen">

            <div class="container">
                <div class="text-center mb-5">
                    <img alt="Vue logo" class="logo" src="../assets/logo.png">
                    <h3>Vue Multiple Layouts</h3>
                </div>

                <div class="row justify-content-center">


                    <div class="col-12 col-sm-auto form-login">
                        <div class="row align-items-center justify-content-center">
                            <label class="col-12 col-auto form-group">
                                Username
                            </label>
                            <div class="col-12 form-group">
                                <input class="form-control">
                            </div>
                        </div>


                        <div class="row align-items-center justify-content-center">
                            <label class="col-12 col-auto form-group">
                                Password
                            </label>
                            <div class="col-12 form-group">
                                <input class="form-control" type="password">
                            </div>
                        </div>


                        <router-link :to="`/home`">
                            <button type="button" class="btn button-primary">Sign in</button>
                        </router-link>
                    </div>


                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'auth',
    }
</script>

<style lang="scss" scoped>
    .fullscreen {
        min-height: 100vh;
        color: black;
        background-color: #ffffff !important;
        height: 100%;
        margin: 0;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px 0;
    }

    .logo {
        height: 70px;
        margin-bottom: 15px;
    }
</style>
