<template>
   <NavBarVue></NavBarVue>
   <section class="row container d-flex mx-auto mt-5 CreationJoinServer_">
       <div class="col-md-6 CreationJoinServer_JoinServer">
            <h1>
                Serveur de diffusion
            </h1>
            <form action="" class="mt-4">
                <div class="form-group">
                    <label for="">Identifiant du serveur</label>
                    <input type="text" class="form-control" placeholder="Fz45tl">
                </div>
                <div class="form-group" v-if="hasPassword">
                    <label for="">Mot de passe</label>
                    <input type="text" class="form-control" placeholder="mot de passe">
                </div>
                <button class="btn Joindre mt-3">Joindre  <i class="fa fa-arrow-right ml-2"></i></button>
               
            </form>
       </div>
       <div class="col-md-6 ServerTest"></div>
   </section>
</template>

<script>
import NavBarVue from '@/components/NavBar.vue';

export default { 
    name:'CreationJoinServerView',
    components:{
        NavBarVue
    },
    data(){
        return{
            hasPassword:true
        }
    }

}

</script>