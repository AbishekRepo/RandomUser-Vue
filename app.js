const app = Vue.createApp({
    data(){
        return {
            firstName: 'Abishek',
            lastName : 'S',
            email : 'abishekhttps@gmail.com',
            picture : 'https://pbs.twimg.com/profile_images/1496435023796314116/tBRjCO6g_400x400.jpg'
        }
    },
    methods: {
        async getUser(){
            
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            console.log(results[0])

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')
