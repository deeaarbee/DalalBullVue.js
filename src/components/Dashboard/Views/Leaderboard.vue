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
  const tableColumns = ['Rank', 'Username', 'Cash','TotalCash'];
  const tableData =[];
  export default {
    /*eslint-disable*/
    components: {
      PaperTable
    },
    data () {
      return {
        table: {
          title: 'Current Standings ',
          subTitle: 'see where you stand',
          columns: [...tableColumns],
          data: []
        }
      }
    },
    created(){
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.$http.post(rooturl+"/getRank",{"token":this.$store.state.token}).then(response => {
          this.table.data = response.body.data.ranklist;
          console.log(this.table.data);
        })
      }
    }

  }

</script>
<style>

</style>
