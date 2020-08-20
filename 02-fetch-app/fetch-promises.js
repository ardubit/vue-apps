const app = new Vue({
    el: '#app',
    data: {
        data: {}
    },
    created() { // Hook
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => console.log(json))
    }
});