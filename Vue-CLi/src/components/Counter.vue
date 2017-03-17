<template>
    <div>
        <span class="counter">{{count}}</span>
        <button class="btn btn-default btn-sm"
                @click='increment'>+
        </button>
    </div>
</template>

<script>
import NotificationStore from '../utils/NotificationStore'

export default {
    data() {
        return {
            state: NotificationStore.state
        }
    },
    computed: {
        count: function () {
            return this.state.count
        }
    },

    methods: {
        increment() {
            NotificationStore.increment()
        }
    }
}
</script>

<style lang="scss">
.counter {
    font-weight: bold;
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    background-color: #dfdfdf;
}
</style>