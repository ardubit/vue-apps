const app = new Vue({
    el: '#app',
    data: {
        data: {}
    },
    created() { // Hook
        this.getData();
    },
    methods: { // Vue Object
        async getData() {
            let url = "https://my-json-server.typicode.com/ardubit/vue-apps/ ";
            const headers = { "Content-Type": "application/json" }; // CORS
            let response = await fetch(url, { headers });
            if (response.ok) {
                let jsonData = await response.json();
                this.data = jsonData;
            }
        }
    }
});