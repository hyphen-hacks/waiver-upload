<template>
  <div class="home page">
    <h1>3 EASY STEPS</h1>
    <p>Just three easy steps to complete your registration into one of the most diverse and welcoming hackathons in the
      Bay Area.</p>
    <ol>
      <li>Download The Waiver</li>
      <li>Sign It</li>
      <li>Upload It!</li>
    </ol>
    <button :disabled="!url" @click="download">DOWNLOAD WAIVER</button>
  </div>
</template>

<script>

  export default {
    name: 'home',
    data() {
      return {
        url: this.$parent.person.waiverDownloadURL
      }
    },
    mounted() {

    },
    methods: {
      download() {
        let element = document.createElement('a');
        element.setAttribute('href', this.url);
        element.setAttribute('download', 'waiver.pdf');
        element.setAttribute('target', '_blank');
        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
        this.$router.push('/step2/' + this.$route.params.id)
      }
    }
  }
</script>
