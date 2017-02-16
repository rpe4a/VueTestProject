var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Вот когда вы загрузили эту страницу: ' + new Date(),
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
        RemoveTodo: function (e) {
            e.preventDefault();
            var index = e.target.attributes[0].value;
            this.todos.splice(index, index);
        }
    }
})