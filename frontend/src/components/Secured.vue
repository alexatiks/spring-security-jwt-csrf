<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h1>Secured</h1>
      <h2>{{msg}}</h2>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  created: function () {
    this.getSecuredPageInformation();
  },
  methods: {
    getSecuredPageInformation() {
      this.$axios
        .get('http://localhost:8091/secured')
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
