<template>
    <div id='counter'>
        <h2>This Count is: {{count}}</h2>
        <p>
            <button @click='count++'><i class="fa fa-plus fa-lg"></i></button>
            <button @click='count--'><i class="fa fa-minus fa-lg"></i></button>

        </p>
    </div>
</template>

<script>
    export default {
        name: 'counter',
        data() {
            return {
                count: 0,
            }
        }
    }

</script>