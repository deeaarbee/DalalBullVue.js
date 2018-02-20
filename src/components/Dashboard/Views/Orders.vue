e<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

          </paper-table>
        </div>
      </div>
    </div>
</template>
<script>
  /*eslint-disable*/
  import {rooturl} from 'src/main'
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  const tableColumns = ['orderId', 'limit' ,'company', 'ratePrice', 'execPrice', 'type','totalunits','status','cancelOrder']
  const tableData = [{

  }];
  export default {
    components: {
      PaperTable
    },
    created(){
      this.getOrders();
    },
    data () {
      return {
        table1: {
          title: 'Your Orders',
          subTitle: 'check your spendings',
          columns: [...tableColumns],
          data:[]
        }
      }
    },
    methods:{
      getOrders(){
        this.data={"token":this.$store.state.token }
        this.$http.post(rooturl+'/orderInformation',this.data).then(response => {
          this.table1.data = response.body.data.currentuser.orders;
        })
      }
    }
  }

</script>
<style>

</style>
