// options API

const app = Vue.createApp({
    methods: {
        changeInfo(event) {
            this.message = 'this message change'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        },
    },

    // estate
    data() {
        return {
            message: 'hello world',
            quote: 'Life is very short',
        }
    },
})

app.mount('#app')
