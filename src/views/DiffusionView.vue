<template>
    <div class="Diffusion-Container row m-0">
        <div class="col-lg-6">
         </div>
       
            <BoxDiscussion ></BoxDiscussion>
         
    </div>
</template>

<script>
import BoxDiscussion from "@/components/BoxDiscussion.vue";
export default{
    name:'DiffusionView',
    components:{
        BoxDiscussion,
    },
    data(){
            return{
                isShowDiscussion:Boolean
            }
        },
        methods:{
            hideDiscussion(){
                this.isShowDiscussion = false
            }
     }
}

</script>