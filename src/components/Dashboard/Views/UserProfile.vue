<template>
    <div class="row">
      <center>
      <div class="col-lg-8 col-md-12">
        <edit-profile-form>
        </edit-profile-form>
      </div>
      </center>
    </div>
</template>
<script>
  /*eslint-disable*/
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import MembersCard from './UserProfile/MembersCard.vue'
  import {rooturl} from 'src/main'
  export default {
    components: {
      EditProfileForm,
      MembersCard
    },
  created(){
      this.fetchdata();
    },
    data() {
        return{
          name:'',
          username:'',
          email:'',
          mobile:'',
          cashonhand:'',
          StarkIndustries:'',
          UmbrellaCorp:'',
          Globex:'',
          AcmeCorp:'',
          WonkaIndustries:'',
          OceanicAirlines:'',
          FrobozzMagicCo:'',
          Oscorp:'',
          Gringotts:'',
          WayneEnterprises:'',
          data :{},
          stock:{},
          token:this.$store.state.token
        }
    },
    methods:{
      fetchdata(){
        this.$http.post(rooturl+"/profile",{"token":this.token}).then(response => {
          console.log(response.body.data.currentuser)
          this.data = response.body.data.currentuser;
          this.username = this.data.username;
          this.email = this.data.email;
          this.mobile = this.data.mobile;
          this.cashonhand = this.data.cash;
          this.name = this.data.name;
          console.log(this.data);
          this.stock = this.data.stock;
          console.log(this.stock);
          this.StarkIndustries = this.stock.starkindustries;
          this.UmbrellaCorp = this.stock.umbrellacorp;
          this.Globex = this.stock.globex;
          this.WayneEnterprises = this.stock.wayneenterprises;
          this.Oscorp = this.stock.oscorp;
          this.Gringotts = this.stock.gringotts;
          this.AcmeCorp = this.stock.acmecorp;
          this.OceanicAirlines = this.stock.oceanicairlines;
          this.WonkaIndustries = this.stock.wonkaindustries;
          this.FrobozzMagicCo = this.stock.frobozzmagicco;

        })
      }
    }
  }
</script>
<style>

</style>
