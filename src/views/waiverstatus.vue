<template>
  <div class="home page">
    <h1>Waiver Status</h1>
    <p>You can check the status of you waiver here. You will get an email when the status changes. <br> <br> Waiver Status:
      <span class="waiverStatus">{{waiverStatus}}</span></p>


    <a class="button" href="mailto:hyphenhackslw@gmail.com">CONTACT SUPPORT</a>
  </div>
</template>

<script>

  export default {
    name: 'waiver-status',
    data() {
      return {
        waiverStatusID: null
      }
    },
    mounted() {
      fetch(this.$parent.apiUrl + 'attendee/waiverStatus/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.$route.params.id
        })
      }).then((resp) => resp.json()).then(result => {
        //console.log(result)
        if (!result.error) {
          this.waiverStatusID = result.waiverStatus
        } else {
          //this.$router.push('/uhoh/')
          console.error(result)
        }
      })
    },
    computed: {
      waiverStatus() {
        let id = this.waiverStatusID
        if (id === 0) {
          return 'Waiver Not Submited'
        } else if (id === 1) {
          return 'Submitted For Review'
        } else if (id === 2) {
          return 'Submitted and Reviewed'
        } else if (id === 3) {
          return 'Waiver Declined'
        } else {
          return `Error CODE: ${id}`
        }
      }
    },
    methods: {}
  }
</script>
