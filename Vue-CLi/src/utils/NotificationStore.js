class NotificationStore {
    constructor() {
        this.state = {
            count: 0
        }
    }

    increment() {
        this.state.count += 1
    }

    decrement() {
        this.state.count -= 1
    }
}

export default new NotificationStore()