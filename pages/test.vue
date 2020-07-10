<template>
  <v-card>
    <v-card-title>
      tielde
    </v-card-title>
    <v-card-text>
      <v-textarea v-model="text" />
      <v-card-actions>
        <v-btn @click="test">
          test
        </v-btn>
        <v-btn @click="hello">
          hello
        </v-btn>
        <v-btn @click="moment">
          moment
        </v-btn>
        <v-btn @click="dialog">
          dialog
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      text: '제기라라라라라라'
    }
  },
  methods: {
    async test () {
      this.text = 'sdafdsfdfw3ewtrgtrg'
      const response = await this.$axios.get('/api')
      this.text = response.data
    },
    async hello () {
      this.text = 'sdafdsfdf123546fcvbwrthgwrtheghnw3ewtrgtrg'
      const response = await this.$axios.get('/api/hello')
      this.text = response.data
    },
    moment () {
      this.text = this.$moment().toLocaleString()
    },
    async dialog () {
      const res = await this.$dialog.confirm({
        text: 'Do you really want to exit?',
        title: 'Warning'
      })
      this.text = res
    }
  }
}
</script>
