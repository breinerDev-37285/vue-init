// options API

const app = Vue.createApp({
    methods: {
        changeInfo(event) {
            console.log(event)
        },
    },

    // estate
    data() {
        return {
            message: 'hello world',
        }
    },
})

app.mount('#app')
