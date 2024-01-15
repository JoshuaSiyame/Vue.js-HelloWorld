// app instance
const app = Vue.createApp({
    data(){
        return {
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@gmail.com",
            gender: "male",
            picture: "https://randomuser.me/api/portraits/med/men/75.jpg"
        }
    },
    methods: {
        async getUser(){
            // get user data 
            const res = await fetch("https://randomuser.me/api", {
                method: "GET",
            });
            const { results } = await res.json();
            
            // console.log(results);

            this.first_name = results[0].name["first"]
            this.last_name = results[0].name["last"]
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture["large"]
        }
    }
});

app.mount('#app')