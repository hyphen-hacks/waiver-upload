<template>
  <div id="app">
    <div id="nav">
      <img src="@/assets/logo.svg" alt="">
      <a href="https://hyphen-hacks.com">Hyphen-Hacks</a>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import 'minireset.css'
  import '@/assets/global.scss'

  export default {
    name: 'appContainer',
    data() {
      return {
        apiUrl: 'https://api.hyphen-hacks.com/api/v1/',
        person: {}
      }
    },
    watch: {
      $route(to, from) {
        this.check()
      }
    },
    mounted() {
      this.check()
    },
    methods: {
      check() {

        //console.log(this.$route.params.id, this.$route.path)
        fetch(this.apiUrl + 'checkPersonStatus', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: this.$route.params.id
          })
        }).then((resp) => resp.json()).then(result => {
          // console.log(result, 'person route check')
          if (result.person) {
          //  console.log('there is a person')
            this.person = result.person
            if (result.person.waiverStatus != 0 && this.$route.name != "waiver status" && this.$route.name != "success") {
             //console.log('first check')
              if (result.person.waiverStatus != 3) {
               // console.log('redirecting')
                this.$router.push('/waiverstatus/' + this.$route.params.id)
              }
            //  console.log('status', this.$route.name)


            } else {
              //console.log('good person')
            }


          } else {
           //  console.log('no person')
            this.$router.push('/uhoh/')
          }
        }).catch(e => {
          console.error(e)
        })

      }
    }
  }
</script>