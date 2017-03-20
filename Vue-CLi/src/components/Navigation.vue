<template>
    <ul class="nav nav-pills nav-stacked">
        <li><router-link :to="{ name: 'root'}" >Main</router-link></li>
        <li><router-link to="/a" exact>Page A</router-link></li>
        <li><router-link :to="{name: 'post', params: {id: 1}}">Posts</router-link></li>
    </ul>
</template>

<script>

export default {
    name: 'navigation'

}
</script>
