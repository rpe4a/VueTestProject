var app = new Vue({
    el: "#app",
    data: {
        message: "hello world!",
        click: 0,
        show: true,
        family: [{
                person: "misha",
                show: true
            },
            {
                person: "lena",
                show: false
            },
            {
                person: "tanya",
                show: true
            }
        ]
    },
    methods: {
        changeClick() {
            this.click++;
        },
        showHide() {
            this.show = !this.show;
        }
    },
    computed: {
        counter() {
            return this.click * 2;
        }
    }
});