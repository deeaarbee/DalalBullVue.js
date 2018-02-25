<template>
  <div class="wrapper">
    <form class="form-signin">
      <h2 class="form-signin-heading">Dalal Bull login</h2>
      <input type="text" class="form-control" name="username" placeholder="Username" required="" autofocus="" v-model="user.username" />
      <input type="password" class="form-control" name="password" placeholder="Password" required="" v-model="user.password" />
      <label class="checkbox">
      </label>
      <button class="btn btn-lg btn-primary btn-block" type="button" @click="submit">Login</button>
      <button class="btn btn-lg btn-primary btn-block" type="button" @click="toregister">Register</button>

    </form>
    <center><h6>This game is just a showcase.</h6><br><h6>Contact admin for the final version if you want to play the game.</h6>
      <br>
      <h6>Use <h5>batman</h5> as both username and password if you are very lazy to register.</h6>
    </center>
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
          password: ''
        }
        };
    },
    methods:{
      submit(){
        console.log("inside submit")
        this.$http.post(rooturl+"/login",this.user).then(response =>{
          console.log("inside req");
          console.log(response.body);
          if (response.body.status === 200) {
            this.$store.state.token = response.body.data.token;
            console.log(this.$store.state.token);
            this.$router.push('/');
          }
          else
              alert(response.body.reason);


        })
      },
      toregister(){
        this.$router.push('/register');
      }
    }
  }
</script>

<style scoped >

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
