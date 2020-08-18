new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert("Button Clicked!");
            },
            listenKeyDown: function(event) {
                this.value = event.target.value;
            }

        }
    });