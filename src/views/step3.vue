<template>
  <div class="home page">
    <button @click="back" class="back">BACK</button>
    <h1><span>3. UPLOAD IT</span></h1>
    <p>Take a photo of the signed waiver and upload it. You only need to upload the last page. Make sure there is good
      lighting and that the signature is
      legible. We will email you once your waiver is approved.</p>
    <form v-if="isInitial" :class="{hover: hovering}" enctype="multipart/form-data" novalidate class="uploader">
      <input @dragover="hovering = true" @dragenter="hovering = true" @dragleave="hovering = false"
             @dragend="hovering = false" @drop="hovering = false" type="file" name="uploader" :disabled="!isInitial"
             :value="file"
             @change="fileChange($event)"
             accept="image/*,application/pdf">
      <p v-if="isInitial" :class="{errorUpload: error}"><span>Add</span> or drag the waiver here</p>
      <p v-if="error" class="error">{{error}}</p>
      <a v-if="error" class="error">Contact Support</a>

    </form>
    <div v-if="!isInitial" class="uploading">
      <div v-if="uploading" class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
      <p v-if="uploading">Uploading Waiver!</p>
      <p v-if="error" class="error">{{error}}</p>
      <a v-if="error" class="error">Contact Support</a>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'upload',
    data() {
      return {
        error: false,
        hovering: false,
        isInitial: true,
        uploadedFiles: [],
        uploadError: null,
        currentStatus: null,
        uploading: false,
        file: null,
        id: this.$route.params.id
      }

    },
    methods: {
      fileChange(e) {
        //  console.log(e.target.files[0], e.target.name, e.target.files)
        if (e.target.files.length === 1) {
          if (e.target.files[0].type.substring(0, 6) === "image/" || e.target.files[0].type === "application/pdf") {
            if (e.target.files[0].size / 1024 / 1024 <= 10) {
              this.error = false
              this.uploading = true;
              this.isInitial = false;
              console.log(e.target.files[0], e.target.name, 'uploading')
              this.$firebase.storage().ref('waivers/' + this.$route.params.id).put(e.target.files[0]).then(snap => {
                console.log(snap)
                fetch('https://api.hyphen-hacks.com/api/v1/waiveruploaded', {
                  method: 'post',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    waiverStatus: 1,
                    waiverImage: 'waivers/' + this.$route.params.id,
                    waiverUploaded: Date.now(),
                    id: this.$route.params.id
                  })
                }).then(resp => resp.json()).then(resp => {
                  if (resp.success) {
                    this.$router.push('/success/' + this.id)
                  } else {
                    this.error = 'Uh Oh! Error While Sending Data To Server' + this.error.message
                    this.uploading = false;
                    this.isInitial = true;
                  }
                })
              
              }).catch(e => {
                console.log(e)
                this.error = 'Uh Oh! Error While Uploading' + e.message
                this.uploading = false;
                this.isInitial = true;
              })

            } else {
              this.error = 'Please make sure file is smaller than 10mb'
              this.uploading = false;
              this.isInitial = true;
            }
          } else {
            this.error = 'Please make sure file is an image or PDF'
            this.uploading = false;
            this.isInitial = true;
          }

          /*

          */


        } else {
          this.error = 'Please only upload 1 file'
          this.uploading = false;
          this.isInitial = true;
        }
      },
      back() {
        this.$router.push('/step2/' + this.$route.params.id)
      }
    }
  }
</script>
