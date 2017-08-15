<template>
  <nav>
    <div class="nav-wrapper grey darken-4">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a v-if="!user" class="waves-effect waves-light btn modal-trigger" href="#modal1">Login / Register</a>
          <a v-else href="collapsible.html">Logout</a>
        </li>

        <!-- Modal Structure -->
        <div id="modal1" class="modal">
          <div class="modal-content">
            <div v-if="onLogin">
              <Login></Login>
            </div>
            <div v-else>
              <Register></Register>
            </div>
            <div>
              <a v-if="onLogin" @click="onLogin = !onLogin" href="#" style="color: black">I don't have an account</a>
              <a v-else @click="onLogin = !onLogin" href="#" style="color: black">I have an account</a>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>

      </ul>
    </div>
  </nav>
</template>

<script>
import Login from '@/components/Login'
import Register from '@/components/Register'

export default {
  data () {
    return {
      user: false,
      onLogin: true
    }
  },
  mounted () {
    //
  },
  components: {
    Login,
    Register
  }
}
</script>

<style lang="css">
  template: {
    color: black;
  }
</style>
