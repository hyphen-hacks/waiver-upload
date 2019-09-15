<template>
  <div class="home page">
    <h1><span>3 EASY STEPS</span></h1>
    <p>Just three easy steps to complete your registration into one of the most diverse and welcoming hackathons in the
      Bay Area.</p>
    <ol>
      <li>Download The Waiver</li>
      <li>Sign It</li>
      <li>Upload It!</li>
    </ol>
    <button  @click="download">DOWNLOAD WAIVER</button>
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
        console.log('downloading')
        let element = document.createElement('a');
        element.setAttribute('href', 'https://firebasestorage.googleapis.com/v0/b/hyphen-hacks-2019.appspot.com/o/public%2FHyphen-Hacks%20Release%20-%20Oct%2012%20-%2013%202019.pdf?alt=media&token=d461f216-7b30-4693-9af7-44c53af24b09');
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
