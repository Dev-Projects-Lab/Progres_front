<template >
    <NavBarVue></NavBarVue>
  
    <!--Presentation section-->
    <section class="row m-0 container-fluid px-5 mt-5 Home_SectionPresentaionPlatform">
        <div class="col-12 col-md-6 Home_Presentaion-Text mt-4">
            <h1 class="m-0 py-2">
                Partagez <span>&</span> Diffusez .
            </h1>
            <p class="pt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quos nobis expedita exercitationem
                architecto dolorum omnis maiores aliquid aut ad. Porro ab minus dolorem nisi saepe autem quidem tempore
                obcaecati.
            </p>

            <RouterLink class="btn Home_ButtonJoinDiffusion px-3 py-2 mt-4" role="button" to="/creation-join">Joindre
                une diffusion <i class="fa fa-arrow-right ml-2"> </i></RouterLink>

            <RouterLink class="btn Home_ButtonCreateDiffusion px-3 py-2 mt-4 ml-3" role="button" to="/creation-join">
                Créer un serveur de diffusion</RouterLink>
        </div>
        <div class="col-12 col-md-6 Home_Presentaion-Ullustration ">
            <div class="Home_CircleBackground m-auto"></div>
        </div>
    </section>
    <!--Share file -->
    <HomeShareFileVue></HomeShareFileVue>

</template>

<script>
import NavBarVue from '@/components/NavBar.vue';
import HomeShareFileVue from '@/components/HomeShareFile.vue'
export default {
    name: 'HomeView',
    components: {
        NavBarVue,
        HomeShareFileVue
    }
}
</script>

<style>

</style>