<template>
    <div>
        <h1>Page A</h1>
        <ul>
            <router-link :to="{name: 'a.b'}">PageB</router-link>
            <router-link :to="{name: 'a.c'}">PageC</router-link>
        </ul>
        <h2>Sub Vue</h2>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'name',
    beforeRouteEnter(route, from, next) {
        if (window.confirm('Продолжить?')) {
            next()
        } else {
            next('/')
        }
    },
}
</script>

<style >

</style>