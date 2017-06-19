// our VueJs instance bound to the div with an id of vue-instance
var vm = new Vue({
    el: '#vue-instance',
    data: {
        username: 'test',
        email: 'test@test.com'
    },
    methods: {
        addUser: function(){
            alert('User ' + this.username + ' added with email ' + this.email);
        }
    }
});