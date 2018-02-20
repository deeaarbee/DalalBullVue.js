<template>
 <div class="row">
  <div class="col-md-12">
    <div class="card">
      <div class="header">
        <h4 class="title">Manage your Leagues</h4>
        <center>  <input type="text" placeholder="League Name" v-model="leagueName"/> <button @click="createleague">Create League</button>
          <br>
          <br>
          <input type="text" placeholder="League Code" v-model="leagueid"/> <button @click="joinleague">Join League</button>
          <br>
          <br>
            <button @click="fetchLeagues">View your Leagues</button>
          <br>
          <br>
          <center>
            <button v-bind:value="id" @click="leaveleague" > Leave League </button>
          </center>
        </center>
      </div>
      <center><div v-if="hasmessage">{{ message }}</div></center>




        <center>
      <div v-for="id in lid"> {{ id }}
        <button v-bind:value="id" @click="viewleague(id)" > Check </button>
      </div>
        </center>

    </div>
  </div>
 </div>
</template>
<script>
  /*eslint-disable*/
  import {rooturl} from 'src/main'
  import PaperTable from '../../UIComponents/PaperTable.vue'
  export default{
    components:{
      PaperTable
    },
    data (){
      return {
            leagueName:'',
            leagueid:'',
            hasmessage:true,
            hasleague:false,
            message:'',
            table:'',
            order:'',
            data:{},
            d1:{},
            d2:{},
            lid:[],
            value:'',
        id:''
      }
    },
    methods:{
      fetchLeagues() {
        this.data = {"token":this.$store.state.token}
        this.$http.post(rooturl+"/myownleagues",this.data).then(response => {
          this.message = response.body.reason;//data.message;
          this.d1 = response.body.data.dict1;
          this.d2 = response.body.data.dict2;
          this.lid = response.body.data.lids;
          console.log(this.lid)
          if(this.d1 !=={})
            this.hasleague = true;
          else this.hasleague = false;

        })
      },
      createleague(){
        this.data={"leagueName" : this.leagueName,"token":this.$store.state.token};
        this.$http.post(rooturl+"/createmyleagues",this.data).then(response =>{
          this.message = response.body.reason;
          this.body={};
          console.log(response.body.reason);

        })
      },
      joinleague(){
        this.data={"leagueid" : this.leagueid,"token":this.$store.state.token};
        this.$http.post(rooturl+"/joinleaguee",this.data).then(response =>{
          this.message = response.body.reason;
          this.hasmessage = true
          this.body={};
          console.log(response.body.reason);
        })
     },
      leaderboard(){
        this.data={"token":this.$store.state.token};
        this.$http.post(rooturl+"/leaguetable",this.data).then(response =>{
          this.message = response.body.data.message;
          this.table = response.body.data.table;
          this.order = response.body.data.order;
          this.body={};
          console.log(response.body.data.order);
      })
    },
      viewleague(leagueid){

          this.$router.push({path:'/myleagues/'+leagueid})

      },
    leaveleague(){
      this.data={"token":this.$store.state.token};
      console.log(this.data)
      this.$http.post(rooturl+"/leave",this.data).then(response =>{
        this.message = response.body.reason;
    })
    }
  }
  }


</script>
<style>

</style>
