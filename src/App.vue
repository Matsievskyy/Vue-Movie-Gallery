<template>
  <v-app>
    <v-app-bar app 
    :src="bg ? 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg' : undefined"
    >
      <v-toolbar-title class="headline text-uppercase" >
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer; color: white'>
        Movie Gallery App
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md3>
        <v-text-field
          label='Movie Name'
          v-model='searchString'
          v-on:keyup.enter='searchMovie'
          >
        </v-text-field>
        </v-flex>
      <v-btn
        :disabled="!dataAvailable"
        @click="searchMovie"
        color="success"
      >
       <span class="mr-2">Search</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      searchString: '',
      bg: true,
    }
  },
  methods: {
    searchMovie () {
      this.$router.push('/search/' + this.searchString)
      this.searchString = ''
    }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
  }
}
</script>

<style>
  input[type="text"] {
    color: white!important;
  }
  .theme--light.v-label{
    color: white!important;
  }
  .theme--light.v-text-field > .v-input__control > .v-input__slot:before{
    border-color: white!important;
  }
  .v-input__slot{
    margin-bottom: 0!important;
  }
</style>