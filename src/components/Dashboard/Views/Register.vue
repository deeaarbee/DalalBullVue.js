<template>
  <!--<div class="login">-->
    <!--<div class="col-lg-offset-2">-->
      <!--<center>-->
        <!--<input type="text" placeholder="username" v-model="user.username" />-->
        <!--<input type="text" placeholder="password" v-model="user.password"/>-->
        <!--<input type="text" placeholder="email" v-model="user.email"/>-->
        <!--<input type="text" placeholder="mobile" v-model="user.mobile"/>-->
        <!--<input type="text" placeholder="name" v-model="user.name"/>-->

        <!--<button @click="submit">Submit</button>-->
      <!--</center>-->
    <!--</div>-->
  <!--</div>-->

  <div class="wrapper">
    <form class="form-signin">
      <h2 class="form-signin-heading">Please Register</h2>
      <input type="text" class="form-control" name="username" placeholder="Name" required="" autofocus="" v-model="user.name" />
      <input type="text" class="form-control" name="password" placeholder="Username" required="" v-model="user.username" />
      <input type="text" class="form-control" name="username" placeholder="email" required="" autofocus="" v-model="user.email" />
      <input type="password" class="form-control" name="password" placeholder="Password" required="" v-model="user.password" />
      <input type="text" class="form-control" name="username" placeholder="Mobile" required="" autofocus="" v-model="user.mobile" />
      <button class="btn btn-lg btn-primary btn-block" type="button" @click="toregister">Register</button>

    </form>
    <center><h6>As the game is just a showcase, You need not provide original details.</h6><br>
      <h6>You can give any details to register.</h6></center>
  </div>

</template>

<script>
  /* eslint-disable */
  import {rooturl} from 'src/main'
  export default {
    name: 'login',
    data() {
      return{
        user: {
          username: '',
          password: '',
          name:'',
          mobile:'',
          email:''
        }
      };
    },
    methods:{
      toregister(){
        this.$http.post(rooturl+"/register",this.user).then(response =>{
          console.log(response.body.staus);
          if (response.body.status === 200) {
            alert(response.body.reason);
            this.$router.push('/login');
          }
          else
            alert(response.body.reason);


        })
      }
    }
  }
</script>

<style scoped>

  body {
    background: #eee !important;
  }

  .wrapper {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .form-signin {
    max-width: 380px;
    padding: 15px 35px 45px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.1);

    .form-signin-heading,
    .checkbox {
      margin-bottom: 30px;
    }

    .checkbox {
      font-weight: normal;
    }

    .form-control {
      position: relative;
      font-size: 16px;
      height: auto;
      padding: 10px;

      &:focus {
        z-index: 2;
      }
    }

    input[type="text"] {
      margin-bottom: -1px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    input[type="password"] {
      margin-bottom: 20px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

</style>
