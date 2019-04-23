<template>
  <div class="home page">
    <button @click="back" class="back">BACK</button>
    <h1>2. SIGN IT</h1>
    <p>Please read the waiver and sign on the lines provided.</p>
    <img src="@/assets/sign.svg" alt="">
    <button @click="next">I SIGNED IT!</button>
  </div>
</template>

<script>

  export default {
    name: 'home',
    methods: {
      next() {
        this.$router.push('/step3/'+this.$route.params.id)
      },
      back() {
        this.$router.push('/step1/'+this.$route.params.id)
      }

    }
  }
</script>
