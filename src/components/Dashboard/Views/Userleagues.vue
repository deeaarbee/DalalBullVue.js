<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <paper-table :title="table.title" :sub-title="table.subTitle" :data="table.data" :columns="table.columns">
        </paper-table>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable*/
  import {rooturl} from 'src/main'
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  const tableColumns = ['Rank', 'Username','TotalCash'];
  const tableData =[];
  export default {
    /*eslint-disable*/
    components: {
      PaperTable
    },
    created(){
      this.fetchData();
    },
    data () {
      return {
        table: {
          title: 'Current Standings ',
          subTitle: 'Check your league members',
          columns: [...tableColumns],
          data: [],
          uorder:[],
          uinfo:{},
          lname:''

        },
        leagueid: this.$route.params.leagueid,
      }
    },
    methods: {
      fetchData() {
        this.$http.post(rooturl+"/myownleagues/league",{"token":this.$store.state.token,"leagueid":this.leagueid}).then(response => {
          // this.table.data = response.body;
          this.uorder = response.body.order;
          this.uinfo = response.body.info;
          this.lname = response.body.leaguename;
          console.log(response.body.leaguename);
          console.log(this.uinfo);
          console.log(this.uorder);
          var i = 0
          var dummy = []
          var temp={}
          for(i=0;i<this.uorder.length;i++) {
            temp = {"rank": i + 1, "username": this.uorder[i], "totalcash":this.uinfo[this.uorder[i]] }
            dummy.push(temp)
          }
          console.log(dummy);
          this.table.data = dummy;
        })
      }
    }

  }

</script>
<style>

</style>
