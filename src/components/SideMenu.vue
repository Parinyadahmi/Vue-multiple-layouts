<template>
    <div>

        <ul class="list-group">

            <router-link :to="`/product-a`" tag="li" class="list-group-item">
                Product A
            </router-link>

            <router-link :to="`/product-b`" tag="li" class="list-group-item">
                Product B
            </router-link>

            <router-link :to="`/product-c`" tag="li" class="list-group-item">
                Product C
            </router-link>

        </ul>

    </div>
</template>

<script>
    export default {
        name: 'SideMenu',
    }
</script>