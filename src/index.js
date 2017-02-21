var app = new Vue({
    el: '#app',

    data: {
        name: '',
        names: ['Misha', 'Marry', 'Joe', 'Lisa']
    },

    methods: {
        AddName() {
            this.names.push(this.name);
            this.name = ''
        }
    }
})