<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <paper-table :title="table.title" :sub-title="table.subTitle" :data="table.data" :columns="table.columns">
        </paper-table>

          <!--<div v-for="each in table.order" >-->
            <!--{{table.index[each]}}{{each}}{{table.tab[each]}}-->
          <!--</div>-->

      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable*/
  import {rooturl} from 'src/main'
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  const tableColumns = ['Rank', 'LeagueName', 'Value'];
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
          data: [
          ],
        },
        order:[],
        tab:{},
        index:{}
      }
    },
    created(){
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.$http.post(rooturl+"/leaguetable",{"token":this.$store.state.token}).then(response => {
          this.order = response.body.data.order;
          this.tab = response.body.data.tab;
          this.index = response.body.data.index;
          // console.log(this.table.index);
          // console.log(this.table.order);
          // console.log(this.table.tab);
          this.arrange()
        })
      },
      arrange(){
        var i = 0;
        var temp={}
        var dummy=[]
        for(i=0;i< this.order.length;i++){
          temp = {};
          temp={"rank":this.index[this.order[i]], "leaguename":this.order[i],"value":this.tab[this.order[i]]}
          //this.table.data.push(temp)
          dummy.unshift(temp)
        }
        console.log(dummy);
        this.table.data = dummy
        console.log("after dummy")
        console.log(this.table.data)
      }
    }

  }

</script>
<style>

</style>
