import { createStore } from "vuex";

export default createStore({
    state:{
        user:{
            name:'Rafalimanana Jean Sebastien',
            email:"rafalimananasebastien@gmail.com",
            profil:"@/assets/img/Malala.jpg"
        }
    },
    mutations:{

    },
    actions:{
        
    },
    getters:{
        getUser(state){
            return state.user;
        }
    }
    ,
    
    modules:{

    }
})