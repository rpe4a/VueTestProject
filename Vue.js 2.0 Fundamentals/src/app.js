var app = new Vue({
    el: '#app',
    data: {
        header: '<i>Hellow Vue world</i>',
        body: 'Inputs and selects have width: 100%; applied by default in Bootstrap. Within inline forms, we reset that to width: auto; so multiple controls can reside on the same line. Depending on your layout, additional custom widths may be required.',
        viewed: true,
        title: `Ypu page loaded  ${new Date()}`,
        url: '', //'https://vuejs.org/images/logo.png',
        todos: [{
                text: 'Lear Vue'
            },
            {
                text: 'Watch Video'
            },
            {
                text: 'Subscribe'
            }
        ],
    },
    methods: {
        humanaizeUrl() {
            
        }
    }
})