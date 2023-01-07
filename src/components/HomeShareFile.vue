<template>
    <section class="row m-0 m-5 HomeShareFile_">
        <div class="col-lg-6 HomeShareFile_Ullustration"></div>
        <div class="col-lg-6 HomeShareFile_Detail">
            <h2>Partagez vos fichiers en toute securité</h2>
            <form class=" mt-4 d-flex  align-content-center justify-content-center  HomeShareFile_FileDrop" action="">
                <label for="FileShare">Glisé & Déposé</label> &nbsp;
                <input type="file" name="fileShare" id="FileShare" @change="HandleChange" />
            </form>
            <div v-if="FileOpenOnBrowser" class="mt-3  HomeShareFile_Detail-Confirmation">
                <div class="py-2 HomeShareFile_ContainerIconFile ">
                    <button><i class="fa fa-times-circle "></i></button>
                    <img class="mx-auto d-block" src="@/assets/icon/File.png" alt="File upload ">
                </div>
                <p class="mt-1">CoursJava.mp4</p>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: 'HomeShareFile',
    data() {
        return {
            FileOpenOnBrowser: false,
            FileName: ''
        }
    },
    methods: {
        HandleChange(e) {
            let file = new FormData();
            file.append('file', e.target.files[0])
            this.FileOpenOnBrowser = true;
        },

    }

}
</script>