<template>
  <div class="card">
    <div class="header">
      <h3 >Your Profile</h3>
    </div>
    <div class="content">
      <form>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Username"
                      :disabled="true"
                      placeholder="Paper dashboard"
                      v-model="user.username">
            </fg-input>
          </div>
          <div class="col-md-3">

            <fg-input type="text"
                      :disabled="true"
                      label="Name"
                      v-model="user.name">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="email"
                      :disabled="true"
                      label="Mobile"
                      placeholder="Mobile"
                      v-model="user.mobile">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      :disabled="true"
                      label="Email"
                      placeholder="Email"
                      v-model="user.email">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text"
                      :disabled="true"
                      label="Cash on Hand"
                      placeholder="Cash"
                      v-model="user.cashonhand">
            </fg-input>
          </div>
        </div>
        <h3>Stocks</h3>
        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Stark Industries"
                      :disabled="true"
                      placeholder="Stock"
                      v-model="user.StarkIndustries">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Gringotts"
                      :disabled="true"
                      placeholder="Stock"
                      v-model="user.Gringotts">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="number"
                      :disabled="true"
                      label="Wayne Enterprises"
                      placeholder="Stock"
                      v-model="user.WayneEnterprises">
            </fg-input>
          </div>

          <div class="col-md-4">
            <fg-input type="number"
                      :disabled="true"
                      label="Globex"
                      placeholder="Stock"
                      v-model="user.Globex">
            </fg-input>
          </div>

          <div class="col-md-4">
            <fg-input type="number"
                      :disabled="true"
                      label="Oceanic Airlines"
                      placeholder="Stock"
                      v-model="user.OceanicAirlines">
            </fg-input>
          </div>

          <div class="col-md-4">
            <fg-input type="number"
                      :disabled="true"
                      label="Acme Corp"
                      placeholder="Stock"
                      v-model="user.AcmeCorp">
            </fg-input>
          </div>

          <div class="col-md-4">
            <fg-input type="number"
                      :disabled="true"
                      label="Wonka Industries"
                      placeholder="Stock"
                      v-model="user.WonkaIndustries">
            </fg-input>
          </div>

          <div class="col-md-4">
            <fg-input type="number"
                      :disabled="true"
                      label="Frobozz Magic Co"
                      placeholder="Stock"
                      v-model="user.FrobozzMagicCo">
            </fg-input>
          </div>

          <div class="col-md-4">
            <fg-input type="number"
                      :disabled="true"
                      label="Umbrella Corp"
                      placeholder="Stock"
                      v-model="user.UmbrellaCorp">
            </fg-input>
          </div>
          <div class="col-md-12">
            <fg-input type="number"
                      :disabled="true"
                      label="Oscorp"
                      placeholder="Stock"
                      v-model="user.Oscorp">
            </fg-input>
          </div>
        </div>


        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>

  /*eslint-disable*/
  import {rooturl} from 'src/main'

  export default {
    data () {
      return {
        user: {
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
          stock:{}
        },
        data:{},
        stock:{}
      }
    },
    created(){
      this.fetchdata();
    },
    methods: {
      fetchdata(){
        this.$http.post(rooturl+"/profile",{"token":this.$store.state.token}).then(response => {
          console.log(response.body.data.currentuser)
          this.data = response.body.data.currentuser;
          this.user.username = this.data.username;
          this.user.email = this.data.email;
          this.user.mobile = this.data.mobile;
          this.user.cashonhand = this.data.cash;
          this.user.name = this.data.name;
          console.log(this.data);
          this.stock = this.data.stock;
          console.log(this.stock);
          this.user.StarkIndustries = this.stock.starkindustries;
          this.user.UmbrellaCorp = this.stock.umbrellacorp;
          this.user.Globex = this.stock.globex;
          this.user.WayneEnterprises = this.stock.wayneenterprises;
          this.user.Oscorp = this.stock.oscorp;
          this.user.Gringotts = this.stock.gringotts;
          this.user.AcmeCorp = this.stock.acmecorp;
          this.user.OceanicAirlines = this.stock.oceanicairlines;
          this.user.WonkaIndustries = this.stock.wonkaindustries;
          this.user.FrobozzMagicCo = this.stock.frobozzmagicco;

        })
      }
    }
  }

</script>
<style>

</style>
