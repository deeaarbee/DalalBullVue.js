<template>
  <div class="card">
    <div class="header">
      <h3 class="title">How to play</h3>
    </div>
    <div class="content" v-for="each in how">
      - -> {{each}}
        </div>


    <div class="header">
      <h3 class="title">Rules</h3>
    </div>
    <div class="content" v-for="each in rules">
      - -> {{each}}
    </div>
        </div>

</template>
<script>
  /*eslint-disable*/
  import {rooturl} from 'src/main'
  import PaperNotification from 'src/components/UIComponents/NotificationPlugin/Notification.vue'
  export default {
    data () {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        },
        response:{},
        rules:[],
        how:[]
      }
    },
    components: {
      PaperNotification
    },
    created(){
      this.fetchData()
    },
    methods: {
      notifyVue (verticalAlign, horizontalAlign) {
        var color = Math.floor((Math.random() * 4) + 1)
        this.$notifications.notify(
          {
            message: 'Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer.',
            icon: 'ti-gift',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      },
      fetchData () {
        this.$http.post(rooturl+"/about").then(response => {
          this.response = response.body;
          this.rules = this.response.rules;
          this.how = this.response.how;
        })
      }
    }
  }

</script>
<style>

</style>
