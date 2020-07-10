<template>
  <v-app lighten>
    <v-main>
      <v-toolbar color="indigo text--white">
        <v-app-bar-nav-icon />
        <v-toolbar-title>
          <n-link to="/">
            Learning Nuxt
          </n-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text>
            <nuxt-link to="/weather-app">
              Weather App
            </nuxt-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <transition>
        <nuxt />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
}
</script>

<style scoped>
a{
  text-decoration :none;
  color : white
}
</style>
