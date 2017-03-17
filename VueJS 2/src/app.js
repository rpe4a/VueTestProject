var app = new Vue({
    el: '#app',
    data: {
        seconds: 0,
        interval: ''
    },
    mounted: function () {
        this.$interval = setInterval(() => {
            console.log("Timer")
            this.seconds++
        }, 1000)
    },
    destroyed: function () {
        clearInterval(this.$interval)
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        success: false,
        message: ''
    },
    computed: {
        cls: function () {
            console.log('cls');
            return this.success === true ? 'alert-success' : 'alert-danger'
        }
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        firstname: 'Tom',
        lastname: 'Edison',
    },
    computed: {
        fullname: {
            get: function () {
                return this.firstname + ' ' + this.lastname;
            },
            set: function (value) {
                let parts = value.split(' ')

                this.firstname = parts[0]
                this.lastname = parts[1]
            }

        }
    }
})

/*Можно добавлять фильтры и директивы в глобальную переменную Vue.js*/
Vue.filter('capitalize', function (value) {
    return value.toUpperCase();
})

Vue.filter('presuffix', function (value, prefix, suffix) {
    return prefix + ' ' + value + ' ' + suffix;
})

/*А можно в отдельный компонент*/
var app4 = new Vue({
    el: '#app4',
    data: {
        message: 'Bla Bla Bla!!!',
    },
    filters: {
        reverse: function (value) {
            return value.split('').reverse().join('');
        }
    }
})

Vue.component('message', {
    props: {
        type: {
            type: String,
            default: 'alert-success'
        },
        message: String
    },
    methods: {
        close() {
            this.$emit('close')
        }
    },
    template: `<div class='alert' :class='type' >
                <button type="button" class="close" @click.prevent='close'>
                    <span>&times;</span>
                </button>
                    {{message}}
               </div>`
})

let counter = {
    data: function () {
        return {
            count: 0
        }
    },
    props: {
        start: {
            type: Number,
            default: 0
        }
    },
    methods: {
        increment: function () {
            this.count++;
        }
    },
    mounted() {
        this.count = this.start;
    },
    template: `<div>
        <button @click='increment'>{{count}}</button>
    </div>`
}

let formUser = {
    props: {
        value: {
            type: Object
        }
    },
    methods: {
        save() {
            this.$emit('input', this.user)
        }
    },
    data: function () {
        return {
            user: JSON.parse(JSON.stringify(this.value))
        }
    },
    template: `
    <form @submit.prevent='save'>
        <p><slot name='header'></slot></p>
        <div class='form-group'>
            <label for="surname">Surname</label>
            <input type="text" name="surname" id='surname' class='form-control' v-model='user.surname'>
        </div>
        <div class='form-group'>
            <label for="name">Name</label>
            <input type="text" name="name" id='name' class='form-control' v-model='user.name'>
        </div>
        <button type="submit" class='btn btn-default'>Save</button>
        <p><slot name='footer'></slot></p>
    </form>`
}

var app5 = new Vue({
    el: '#app5',
    components: {
        counter,
        formUser
    },
    methods: {
        show() {
            this.alert = true;
        },
        hide() {
            this.alert = false;
        }
    },
    data: {
        message: 'Hi from component',
        alert: false,
        user: {
            surname: 'Plyusnin',
            name: 'Michael'
        }
    }
})