<template>

  <div class="card">
    <div class="header">
      <h4 class="title"></h4>
    </div>
    <div class="content">
        <div class="row">
          <div class="col-md-5">
          </div>
          <div class="col-md-3">
            <fg-input type="text"
                      label="Name"
                      placeholder="Name"
                      v-model="message.name"
                      required="required">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Your Feedback about the game</label>
              <textarea rows="8" class="form-control border-input"
                        placeholder="Here can be your description"
                        v-model="message.text" required="required">
              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click="feedback">
            Submit Feedback
          </button>
        </div>
        <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  /*eslint-disable*/
  import {rooturl} from 'src/main'
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import MembersCard from './UserProfile/MembersCard.vue'
  export default {
    data () {
      return {
          message:{
            "name": '',
            "text": ''
          }
      }
    },
    components: {
      EditProfileForm,
      UserCard,
      MembersCard
    },
    methods:{
      feedback(){
        this.$http.post(rooturl+"/feedback",this.message).then(response => {
          alert(response.body.reason)
        });
      }
    }
  }

</script>
<style>

</style>
