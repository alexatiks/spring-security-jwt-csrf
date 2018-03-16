<template>
  <div id="app">
    <v-app>
      <v-toolbar color="teal lighten-1" dark fixed app>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
              Spring Security JWT CSRF Demo
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn
            flat
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path">
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
          <v-btn flat @click="userSignOut" v-if="isAuthenticated">
            <v-icon left>exit_to_app</v-icon>
            Sign Out
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-content>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isAuthenticated: false
      }
    },
    computed: {
      menuItems() {
        if (this.isAuthenticated) {
          return [
            {title: 'Home', path: '/', icon: 'home'}
          ]
        } else {
          return [
            {title: 'Sign In', path: '/signIn', icon: 'lock_open'}
          ]
        }
      }
    },
    methods: {
      userSignOut() {
      }
    }
  }
</script>

<style scoped>

</style>
