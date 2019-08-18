<template>

    <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>

    <v-container v-else>
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <v-img
            :src="singleMovie.Poster"
            aspect-ratio="2"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{singleMovie.Title}}-{{singleMovie.Year}}</h2>
              <p>{{ singleMovie.Plot}} </p>
              <h3>Actors:</h3>{{singleMovie.Actors}}
               <h4>Awards:</h4> {{singleMovie.Awards}}
               <p>Genre: {{singleMovie.Genre}}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn  color="green" @click="back">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <div class="text-xs-center">
        
      </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import movieApi from '@/services/MovieApi'


export default {
    props: ['id'],
    data () {
        return {
            singleMovie: '',
            loading: true
        }
    },
    mounted() {
      movieApi.fetchSingleMovie(this.id)
      .then(response => {
        this.singleMovie = response
        this.ratings = this.singleMovie.Ratings
        this.ratings.forEach(function (element) {
          element.Value = parseFloat(element.Value.split(/\/|%/)[0])
          element.Value = element.Value <= 10 ? element.Value / 2 : element.Value / 20
        }
        )
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
      back() {
          this.$router.push('/')
      }
  }
}
</script>

<style scope>
    .v-content .v-image__image--cover{
        background-size: contain;
    }
</style>