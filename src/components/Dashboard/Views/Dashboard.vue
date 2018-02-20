<template>
  <div>
  <!--dont touch this-->
    <h4>
      <marquee behavior="" direction="" scrollamount="14">
        Stark Industries :{{stockvalue.StarkIndustries.price}}
        <span class="glyphicon glyphicon-arrow-down"  v-if="stockvalue.StarkIndustries.color == 'red'"  style="color: red"></span>
        <span class="glyphicon glyphicon-arrow-up"  v-if="stockvalue.StarkIndustries.color == 'green'"  style="color: green"></span>
        <span class="glyphicon glyphicon-minus"  v-if="stockvalue.StarkIndustries.color == null " style="color: gray"></span>
        &emsp;
        Gringotts :{{stockvalue.Gringotts.price}}
        <span class="glyphicon glyphicon-arrow-down"  v-if="stockvalue.Gringotts.color == 'red'"  style="color: red"></span>
        <span class="glyphicon glyphicon-arrow-up"  v-if="stockvalue.Gringotts.color == 'green'"  style="color: green"></span>
        <span class="glyphicon glyphicon-minus"  v-if="stockvalue.Gringotts.color == null" style="color: gray"></span>
        &emsp;
        Globex :{{stockvalue.Globex.price}}
        <span class="glyphicon glyphicon-arrow-down"  v-if="stockvalue.Globex.color == 'red'"  style="color: red"></span>
        <span class="glyphicon glyphicon-arrow-up"  v-if="stockvalue.Globex.color == 'green'"  style="color: green"></span>
        <span class="glyphicon glyphicon-minus"  v-if="stockvalue.Globex.color == null" style="color: gray"></span>
        &emsp;
        Wayne Enterprises :{{stockvalue.WayneEnterprises.price}}
        <span class="glyphicon glyphicon-arrow-down"  v-if="stockvalue.WayneEnterprises.color == 'red'"  style="color: red"></span>
        <span class="glyphicon glyphicon-arrow-up"  v-if="stockvalue.WayneEnterprises.color == 'green'"  style="color: green"></span>
        <span class="glyphicon glyphicon-minus"  v-if="stockvalue.WayneEnterprises.color == null" style="color: gray"></span>
        &emsp;
        Umbrella Corp :{{stockvalue.UmbrellaCorp.price}}
        <span class="glyphicon glyphicon-arrow-down"  v-if="stockvalue.UmbrellaCorp.color == 'red'"  style="color: red"></span>
        <span class="glyphicon glyphicon-arrow-up"  v-if="stockvalue.UmbrellaCorp.color == 'green'"  style="color: green"></span>
        <span class="glyphicon glyphicon-minus"  v-if="stockvalue.UmbrellaCorp.color == null" style="color: gray"></span>
        &emsp;
        Oceanic Airlines :{{stockvalue.OceanicAirlines.price}}
        <span class="glyphicon glyphicon-arrow-down"  v-if="stockvalue.OceanicAirlines.color == 'red'"  style="color: red"></span>
        <span class="glyphicon glyphicon-arrow-up"  v-if="stockvalue.OceanicAirlines.color == 'green'"  style="color: green"></span>
        <span class="glyphicon glyphicon-minus"  v-if="stockvalue.OceanicAirlines.color == null" style="color: gray"></span>
        &emsp;
        Frobozz Magic Co :{{stockvalue.FrobozzMagicCo.price}}
        <span class="glyphicon glyphicon-arrow-down"  v-if="stockvalue.FrobozzMagicCo.color == 'red'"  style="color: red"></span>
        <span class="glyphicon glyphicon-arrow-up"  v-if="stockvalue.FrobozzMagicCo.color == 'green'"  style="color: green"></span>
        <span class="glyphicon glyphicon-minus"  v-if="stockvalue.FrobozzMagicCo.color == null" style="color: gray"></span>
        &emsp;
        Oscorp :{{stockvalue.Oscorp.price}}
        <span class="glyphicon glyphicon-arrow-down"  v-if="stockvalue.Oscorp.color == 'red'"  style="color: red"></span>
        <span class="glyphicon glyphicon-arrow-up"  v-if="stockvalue.Oscorp.color == 'green'"  style="color: green"></span>
        <span class="glyphicon glyphicon-minus"  v-if="stockvalue.Oscorp.color == null" style="color: gray"></span>
        &emsp;
        Wonka Industries :{{stockvalue.WonkaIndustries.price}}
        <span class="glyphicon glyphicon-arrow-down"  v-if="stockvalue.WonkaIndustries.color == 'red'"  style="color: red"></span>
        <span class="glyphicon glyphicon-arrow-up"  v-if="stockvalue.WonkaIndustries.color == 'green'"  style="color: green"></span>
        <span class="glyphicon glyphicon-minus"  v-if="stockvalue.WonkaIndustries.color == null" style="color: gray"></span>
        &emsp;
        Acme Corp :{{stockvalue.AcmeCorp.price}}
        <span class="glyphicon glyphicon-arrow-down"  v-if="stockvalue.AcmeCorp.color == 'red'"  style="color: red"></span>
        <span class="glyphicon glyphicon-arrow-up"  v-if="stockvalue.AcmeCorp.color == 'green'"  style="color: green"></span>
        <span class="glyphicon glyphicon-minus"  v-if="stockvalue.AcmeCorp.color == null" style="color: gray"></span>
        &emsp;

      </marquee>
    </h4>



    <!--dont touch this-->

    <div class="row">
    <div class="col-lg-6 col-sm-9" v-for="stats in statsCards">
    <stats-card>
    <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
    <i :class="stats.icon"></i>
    </div>
    <div class="numbers" slot="content">
    <p>{{stats.title}}</p>
    {{stats.value}}
    </div>
    <div class="stats" slot="footer">
    <i :class="stats.footerIcon"></i> {{stats.footerText}}
    </div>
    </stats-card>
    </div>
    </div>



    <!--<div class="row col-lg-offset-7 col-lg-3 col-sm-12">-->
      <!--<div v-for="each in news"> {{ each.News }}</div>-->
    <!--</div>-->
    <!--<div v-for="each in news"> {{ each.News }}</div>-->





    <div class="row">
      <div class="col-lg-push-3 ">
        <stats-card>
          <div  slot="content">
              <div style="font-size: medium" class="col-lg-pull-9" v-for="each in news"> {{ each.News }}</div>
              <div>
                <marquee behavior="" direction="" scrollamount="10"><p>News about the companies will be displayed here</p></marquee>
              </div>
          </div>
          <div class="stats" slot="footer">
            Current Headlines
          </div>
        </stats-card>
      </div>
    </div>



    <div class="row">
      <div class="col-lg-6 col-sm-9" v-for="stats in companyCard">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">

            <div class="col-lg-offset-2" slot="content">
              <select v-model="selectedType" >
                <option class="col-sm-pull-0" value="buy" > buy </option>
              <option class="col-sm-pull-2" value="sell" > sell </option></select>
            </div>

          <div class="col-sm-20" slot="content">
            <select v-model="selectedCompany" >
              <option class="col-sm" :value=each v-for="each in companies"> {{each}}
              </option></select>
          </div>
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

<center>
    <div class="row">
      <input type="number" v-model="data.limit" placeholder="Enter amount" required/>
      <input type="number" v-model="data.units" placeholder="Enter Units" required/>
      <button  value="Place Order" @click="submit">Place Order</button>
      </div>
    <h4>
    <div v-if="hasmessage">{{message}}</div>
    </h4>
    </center>




  </div>
</template>
<script>
  /* eslint-disable */
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import {rooturl} from 'src/main'
  export default {
    components: {
      StatsCard,
      ChartCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        statsCards: [
          {
            type: 'success',
            icon: 'ti-wallet',
            title: 'Cash on hand',
            value: '',
            footerText: 'Cash in wallet',
            footerIcon: 'ti-calendar'
          },
          {
            type: 'info',
            icon: 'ti-money',
            title: 'Your current Value',
            value: '',
            footerText: 'Cash + Stock value',
            footerIcon: 'ti-reload'
          },
        ],
        companyCard:[
          {
            type: 'info',
            icon: 'ti-bar-chart',
            title: 'Select your Company' ,
            value: this.companies,
            footerText: 'Select type (buy/sell) and company',
            footerIcon: 'ti-reload'
          },
        ],
        newsCard:[
          {
            type: 'info',
            icon: 'ti-bar-chart',
            title: 'Current news',
            value: this.companies,
            footerText: 'News',
            footerIcon: 'ti-reload'
          },
        ],
        stockvalue:{
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
        },
        cashonhand: '',
        news: [],
        companies:[],
        message:'Please give a feedback in the feedback tab.',
        hasmessage:true,
        data:{
          limit:'',
          units:'',
          type:'',
          company:'',
          token:this.$store.state.token,
          senderType:'human'
        },
        btype:['buy','sell'],
        selectedCompany:'',
        selectedType:'',
        selected: [],
        token: this.$store.state.token

      }
    },
    created(){
      this.fetchData();
    },
    methods: {
      fetchData(){
        if(this.$store.state.token === ''){
          this.$router.push('/login');
        }
        console.log("thsis s fata");
        console.log(this.token);
          this.$http.post(rooturl+"/",{"token":this.token}).then(response =>{
          console.log(response.body);
          this.statsCards[1].value = response.body.data.stockvalue;
          console.log(response.body.data.stockvalue);
          this.statsCards[0].value = response.body.data.currentuser.cash;
          this.companies = response.body.data.companies;
          this.news = response.body.data.news;
          console.log(this.news)
          this.stockvalue.StarkIndustries = response.body.data.starkindustries;
          this.stockvalue.Gringotts = response.body.data.gringotts;
          this.stockvalue.Globex = response.body.data.globex;
          this.stockvalue.AcmeCorp = response.body.data.acmecorp;
          this.stockvalue.WonkaIndustries = response.body.data.wonkaindustries;
          this.stockvalue.FrobozzMagicCo = response.body.data.frobozzmagicco;
          this.stockvalue.Oscorp = response.body.data.oscorp;
          this.stockvalue.WayneEnterprises = response.body.data.wayneenterprises;
          this.stockvalue.UmbrellaCorp = response.body.data.umbrellacorp;
          this.stockvalue.OceanicAirlines = response.body.data.oceanicairlines;
        })
      },
      submit(){

        this.data.company = this.selectedCompany;
        this.data.type = this.selectedType;
        console.log(this.data.company)
        console.log(this.data.type)
        console.log(this.data);
        console.log("inisde data");
        this.$http.post(rooturl+'/newOrder',this.data).then(response =>{
        console.log(response);
        alert(response.body.reason);
       })
        },
      }
  }

</script>
<style>

</style>
