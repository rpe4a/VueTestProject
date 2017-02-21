var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Вот когда вы загрузили эту страницу: ' + new Date(),
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    }

})

var app2 = new Vue({
    el: '#app-2',
    data: {
        seen: true,
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        todo: '',
        todos: [{
                text: 'Посадить дерево'
            },
            {
                text: 'Построить дом'
            },
            {
                text: 'Вырастить сына'
            }
        ]
    },
    methods: {
        AddTodo: function () {
            this.todos.push({
                text: this.todo
            });
        },
        RemoveTodo: function (index, e) {
            e.preventDefault();
            console.log(e.target.attributes[0].value); 
            this.todos.splice(index, 1);
        }
    },
    filters: {
        toUpper: function (value) {
            return value.toUpperCase();
        },
        toLower: function (value) {
            return value.toLowerCase();
        }
    }
})

Vue.component('todo-item', {
    template: '<li>{{ todo.text }}</li>',
    props: ['todo'],
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        groceryList: [{
                text: 'Овощи'
            },
            {
                text: 'Сыр'
            },
            {
                text: 'Что там ещё люди едят?'
            }
        ]
    }
})

var watchExp = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'Пока вы не зададите вопрос, я не могу ответить!',
        image: '',
        hasError: false,
    },
    watch: {
        question: function (newQuestion) {
            this.answer = 'Ожидаю, когда вы закончите печатать...'
            this.image = ''
            this.hasError = false;
            this.getAnswer()
        }
    },
    methods: {
        getAnswer: _.debounce(function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
                this.hasError = true;
                return
            }
            this.answer = 'Думаю...'
            axios.get('https://yesno.wtf/api').then(function (res) {
                this.answer = _.capitalize(res.data.answer)
                this.image = res.data.image
            }.bind(this))
        }, 500)
    }

})