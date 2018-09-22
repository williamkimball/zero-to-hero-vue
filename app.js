const navbar = Vue.component('navbar', {
    template: `
        <header>
            <ul>
            <li>Home</li>
            <li>About</li>
            </ul>
        </header>
    `,
});

const counter = Vue.component('counter', {
    template: `
    <span>
        <button @click="this.increment">+</button>
        <span>{{sum}}</span>
        <button @click="this.decrement">-</button>
    </span>`,
    data: () => {
        return { sum: 0 };
    },
    methods: {
        increment() {
            this.sum++
        },
        decrement() {
            this.sum--
        }
    }
})

const app = new Vue({
  el: "#app",
  data: {
    message: "From Zero to Hero With Vue.js",
    hasMessage: true,
    vue:
      "Vue.js is a thing that was created to serve a purpose, and that purpose is to make changing stuff on the DOM faster and easier to change. I hope this is correct, because I went off the template script in writing this.",
    selected: "",
    messages: [
      { text: "Hello there!" },
      { text: "Vue is cool!" },
      { text: "Some more stuff that is very important!" }
    ]
  },
  methods: {
    logMessage() {
      console.log(this.message);
    },
    toggleMessage() {
      this.hasMessage = !this.hasMessage;
    }
  },
  components: {
    navbar,
    counter
  }
});
