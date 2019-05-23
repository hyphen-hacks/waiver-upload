<template>
  <div class="home page">
    <h1><span>Waiver Status</span></h1>
    <p v-if="waiverStatusID === 2">Congratulations! Your waiver was accepted. You will get an email in the upcoming months letting you know if you are accepted into Hyphen-Hacks. If you have any questions or comments please email us: <a href="mailto:support@hyphen-hacks.com">support@hyphen-hacks.com</a></p>
    <p v-if="waiverStatusID === 1">Thank you for submitting your waiver! We will email you once our team reviews it. If you have any questions or comments please email us: <a href="mailto:support@hyphen-hacks.com">support@hyphen-hacks.com</a></p>
    <p v-if="waiverStatusID === 3">Uh oh, it looks like your waiver was declined. Please check your email for more information about how to resubmit. If you have any questions or comments please email us: <a href="mailto:support@hyphen-hacks.com">support@hyphen-hacks.com</a></p>


    <a class="button" href="mailto:support@hyphen-hacks.com">CONTACT SUPPORT</a>
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
