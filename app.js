const app = new Vue({
    el: '#app',
    data: {
        message: 'From Zero to Hero With Vue.js',
        hasMessage: true,
        vue:
            'Vue.js is a thing that was created to serve a purpose, and that purpose is to make changing stuff on the DOM faster and easier to change. I hope this is correct, because I went off the template script in writing this.'
    },
    methods: {
        logMessage() {
            console.log(this.message)
        },
        toggleMessage() {
            this.hasMessage = !this.hasMessage
        }
    },
});