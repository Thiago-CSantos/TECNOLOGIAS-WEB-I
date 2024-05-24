let app = new Vue({
    el: "#app",
    data: {
        num1: '',
        tabu: [],
        aux: false
    },
    methods: {
        tabuada: function (num) {
            this.tabu = [];
            for (let i = 1; i <= 10; i++) {
                this.tabu.push(i);
            }
            this.aux = true;
        }
    }
});