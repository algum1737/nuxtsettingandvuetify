<template>
  <v-container>
    <!-- <v-layout> -->
    <h1
      class="text-h4 text-center"
    >
      Weather App
    </h1>
    <v-flex xs12>
      <v-card color="blue-grey lighten-2">
        <v-card-text>
          <v-layout justify-center>
            <v-flex class="text-center">
              <h4>Temperature</h4>
              <h1 class="text-h4">
                {{ weather.name }}
              </h1>
              <img
                v-if="weather"
                :src="icon"
                alt="weather icon"
              >
              <p>
                <span class="text-h4">{{ temp() }} &#176;C</span>
                <span class="caption ml-4">{{ weather.weather[0].description }}</span>
              </p>
            </v-flex>
            <v-flex class="text-center">
              <h4>Wind & Pressure:</h4>
              <h3 class="headline">
                Wind: {{ weather.wind.speed }} m/s ({{ weather.wind.deg }}&deg;)
              </h3>
              <h3 class="headline mt-4">
                Humidity: {{ weather.main.humidity }}%
              </h3>
              <h3 class="headline mt-4">
                Pressure: {{ weather.main.pressure }}hPa
              </h3>
            </v-flex>
            <v-flex class="text-center">
              <h4>Other:</h4>
              <h3 class="headline">
                Max Temperature: {{ Math.round(weather.main.temp_max-273) }}&#176;C
              </h3>
              <h3 class="headline mt-4">
                Min Temperature: {{ Math.round(weather.main.temp_min-273) }}&#176;C
              </h3>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 class="mt-4">
      <v-form @submit.prevent="getWeatherInfo">
        <v-text-field
          v-model="city"
          label="Enter City Name"
          solo
        />
      </v-form>
    </v-flex>
    <!-- </v-layout> -->
    <ul>
      <li v-for="weathers in weather" :key="weathers.id">
        {{ weathers }}
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  asyncData ({ params, $axios }) {
    return $axios.$get(`http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${process.env.weatherAppId}`)
      .then((res) => {
        return { weather: res }
      })
  },
  data () {
    return {
      city: '',
      weather: []
    }
  },
  computed: {
    icon () {
      return this.weather.weather ? `https://openweathermap.org/img/w/${this.weather.weather[0].icon}.png` : ''
    }
  },
  // created () {
  //   console.log(this.getWeatherInfo())

  //   this.getWeatherInfo()
  // },
  methods: {
    async getWeatherInfo () {
      try {
        if (this.city !== '') {
          const res = await this.$axios.$get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${process.env.weatherAppId}`)
          console.log(res)
          this.weather = res
        }
        //  else {
        //   const res = await this.$axios.$get('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=00dac8bf7d6dd6a91d45ac256b702f3d')
        //   console.log(res)
        //   this.weather = res
        // }
      } catch (error) {
        console.log(error)
      }
    },
    temp () {
      return Math.round(this.weather.main.temp - 273)
    }
  }
}
</script>

<style>

</style>
