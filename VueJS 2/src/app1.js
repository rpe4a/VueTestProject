class NotificationStore {
    constructor() {
        this.state = {
            count: 0
        }
    }

    increment() {
        this.state.count++
    }

    decrement() {
        this.state.count--
    }
}

let notification_store = new NotificationStore()

let Counter = {
    template: `
        <button @click='increment'>
            {{count}}
        </button>
    `,
    computed: {
        count() {
            return this.state.count
        }
    },
    methods: {
        increment() {
            notification_store.increment()
        }
    },
    data() {
        return {
            state: notification_store.state
        }
    }
}


let Notification = {
    template: `
    <div>
        <counter></counter>
        <button class='btn btn-default btn-sm' @click='addNotification'>Add!</button>
    </div>
    `,
    components: {
        Counter
    },
    methods: {
        addNotification() {
            notification_store.increment();
        }
    }
}

new new Vue({
    el: '#app',
    data: {
        notification_count: 0,
    },
    components: {
        Notification,
        Counter
    }
})