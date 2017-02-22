/*var app = new Vue({
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

var app2 = new Vue({
    el: '#app2',
    data: {
        isLoading: false,

    },
    methods: {
        toogleClass: function () {
            this.isLoading = !this.isLoading;
        }
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        tasks: [{
                description: "Go to store",
                completed: true
            },
            {
                description: "Finish screencast",
                completed: false
            },
            {
                description: "Make donation",
                completed: false
            },
            {
                description: "Clear inbox",
                completed: false
            },
            {
                description: "Make dinner",
                completed: false
            },
            {
                description: "Clean room",
                completed: true
            },
        ]
    },
    computed: {
        incompleteTasks: function () {
            return this.tasks.filter(task => {
                return !task.completed;
            })
        }
    }
})*/

Vue.component('task-list', {
    template: '<ul><task v-for="task in tasks" >{{task.description}}</task></ul>',
    data: function () {
        return {
            tasks: [{
                    description: "Go to store",
                    completed: true
                },
                {
                    description: "Finish screencast",
                    completed: false
                },
                {
                    description: "Make donation",
                    completed: false
                },
                {
                    description: "Clear inbox",
                    completed: false
                },
                {
                    description: "Make dinner",
                    completed: false
                },
                {
                    description: "Clean room",
                    completed: true
                },
            ]
        }
    }
})

Vue.component('task', {
    template: '<li><slot></slot></li>'
})

Vue.component('message', {
    props: ['title', 'body'],
    data: function () {
        return {
            isOpen: true
        }
    },
    template: `
            <div class="panel panel-default" v-show="isOpen">
                <div class="panel-heading">
                    {{title}}

                    <span @click='CloseMessage' class="close">X</span>
                </div>
                <div class="panel-body">
                    {{body}}
                </div>
            </div>
        `,
    methods: {
        CloseMessage: function () {
            this.isOpen = false;
        }
    }

})

Vue.component('modal', {
    template: `
        <div class="modal fade" id="bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myModalLabel">Название модали</h4>
                    </div>
                    <div class="modal-body">
                        Lorem
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
                        <button type="button" class="btn btn-primary">Сохранить изменения</button>
                    </div>
                </div>
            </div>
        </div>
    `
})

Vue.component('tabs', {
    template: `
        <div>
            <ul class="nav nav-tabs">
                <li v-for='(tab, index) in tabs' :key="index" :class="{'active': tab.isActive}">
                    <a href="#" data-toggle="tab" @click='selectTab(tab)'>
                        {{tab.name}}
                    </a>
                </li>
            </ul>

            <div class="tab-content">
                <slot></slot>
            </div>
        </div>
    `,
    data: function () {
        return {
            tabs: []
        }
    },

    created: function () {
        this.tabs = this.$children;
    },

    methods: {
        selectTab: function (selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name === selectedTab.name);
            })
        }
    }
})

Vue.component('tab', {
    template: `
        <div class="tab-pane" :class="{'active': this.isActive}" :id="this.name"><slot></slot></div>
    `,
    props: {
        name: {
            required: true
        },
        selected: {
            default: false
        }
    },

    data: function () {
        return {
            isActive: false
        }
    },

    mounted: function () {
        this.isActive = this.selected;
    },

    computed: {
        TabIDName: function () {
            return `#${this.name}`;
        }
    }
})

var app4 = new Vue({
    el: '#app4'
})