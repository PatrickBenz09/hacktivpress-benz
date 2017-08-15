<template>
  <div>
    <h4 style="color: black">Register</h4>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input v-model="register.username" id="username" type="text" class="validate" required>
            <label for="username">Username</label>
          </div>
          <div class="input-field col s6">
            <input v-model="register.password" id="password" type="password" class="validate" required>
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <button @click="registerUser" class="btn waves-effect waves-light" type="button" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      register: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    registerUser () {
      let self = this
      this.$http.post('http://localhost:3000/register/', self.register)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="css">
</style>
