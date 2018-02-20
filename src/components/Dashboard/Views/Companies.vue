<template>
    <div class="row">
      <div class="col-md-12" v-for="each in companies">
        <div class="card">
          <div class="header">
            <h4 class="title">{{ each.toUpperCase() }}</h4>
          </div>
          <div class="content all-icons">
            {{ description[each] }}
          </div>
        </div>
      </div>

    </div>
</template>
<script>
  /* eslint-disable */
  export default {
    data () {
      return {
        loading: false,
        companies: [],
        description: {},
        response:{}
      }
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData()
    },
    // watch: {
    //   // call again the method if the route changes
    //   '$route': 'fetchData'
    // },
    methods: {
      fetchData () {
        this.$http.get("http://localhost:5003/comp").then(response => {
          this.response = response.body.data;
          this.companies = this.response.companies;
          this.description = this.response.description;
        })
      }
    }
  }
</script>
<style>

</style>
