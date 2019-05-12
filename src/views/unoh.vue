<template>
  <div class="home page">
    <h1>Uh Oh!</h1>

    <p>Uh Oh! It looks like this waiver link is invalid. Please check your email to get your unique link to upload your waiver.</p>

    <a class="button" href="mailto:support@hyphen-hacks.com">CONTACT SUPPORT</a>
  </div>
</template>

<script>

  export default {
    name: 'home',
    data() {
      return {
        url: ''
      }
    },
    mounted() {
      this.$firebase.firestore().collection('publicRefs').doc('downloads').get().then(e => {
        this.url = e.data().waiver
      })
    },
    methods: {

    }
  }
</script>
