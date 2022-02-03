const app = Vue.createApp({
    template: `
        <h1>Hello world from VueJS</h1>
        <p>this is my first web page using VueJs</p>


        <p> Javascript code injection </p>
        <span>{{ {"a":1,"b": 2} }}</span>
    `,
})

app.mount('#app')
