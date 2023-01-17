<template>
    <header class="d-flex justify-content-between align-items-center pt-3 px-4 Navbar_">
        <h1 class="NavBar_Logo">logo</h1>
        <div class="NavBar_ButtonLogin my-auto d-flex align-items-center">
            <GoogleLogin :callback="callback" />
            <div class="Navbar_UserProfil">
            <img src="@/assets/img/Malala.jpg" alt="">
           </div>
           <p></p>
        </div>
    </header>
</template>

<script>

import { decodeCredential } from 'vue3-google-login'
export default {
    name: 'NavBar',
    data(){
        return{
        }
     },
    setup() {
        
        const callback = (response) => {
        const userData = decodeCredential(response.credential)
        console.log("Handle the response", userData)
        }
        return {
            callback
        }
    },
    
    methods: {
        handleUser(){
             console.log(this.$store.state.user);
        }
    }
}
</script>
