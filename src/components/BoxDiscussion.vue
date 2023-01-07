<template>
    <div class="Discussion col-lg-4 p-0 ml-auto " v-if="isShowDiscussion">
        <header class="">
            <div class="text-center">
                <h1>Discussion</h1>
            </div>
            <button class="btn Hide-Box_Discussion" @click="hideDiscussion"> <i class="fa fa-arrow-right "></i></button>
        </header>

        <div class="Discussion-Container pt-1 px-2">
            <!--User message-->
            <div class="Discussion-Content is_me row m-0 mt-1">
                <div class="col-1 m-0">
                    <div class="User_Profil mt-1">
                        <img src="@/assets/img/Malala.jpg" alt="" />
                    </div>
                </div>
                <div class="col-10">
                    <small>Test user </small>
                    <p class="Discussion-Content-Message mt-1 p-2">
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <!-- End User message-->
            <!--User message-->
            <div class="Discussion-Content is_me row m-0 mt-1">
                <div class="col-1 m-0">
                    <div class="User_Profil mt-1">
                        <img src="@/assets/img/Malala.jpg" alt="" />
                    </div>
                </div>
                <div class="col-10">
                    <small>Test user </small>
                    <div class="File-Box_Download mt-1"></div>
                    <a href="#" role="button">download</a>
                </div>
            </div>
            <!-- End User message-->
        </div>
        <div class="Send-File_visualisation row m-0 p-2">
            <!--file to sende-->
        </div>
        <footer class="px-2">
            <div class="Select-file">
                <label for="Find-File" class="btn" role="button"><i class="fa fa-file-import"></i></label>
                <input type="file" id="Find-File" style="display: none" />
            </div>
            <input type="text" class="Text-Message" placeholder="Message..." />
            <button class="btn Sender-message"></button>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'BoxDiscussion',
      props: {
        isShowDiscussion: Boolean,
    },
    methods: {
        hideDiscussion() {
            this.isShowDiscussion = false
        }
    }

}
</script>