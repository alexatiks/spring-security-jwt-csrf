<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h1>Home page</h1>
      <h2>{{msg}}</h2>

      <h2><router-link to="/secured" color="black">Go to secured page</router-link></h2>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: ''
    }
  },
  created: function () {
    this.getHomePageInformation();
  },
  methods: {
    getHomePageInformation() {
      this.$axios
        .get('http://localhost:8091')
        .then(response => {
          console.log("Get response: ", response.data);
          this.msg = response.data
        })
        .catch(error => {
          this.alert = true;
        });
    }
  }
}
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>
