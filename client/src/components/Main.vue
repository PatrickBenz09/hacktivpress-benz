<template>
  <div class="container">
    <div class="row" style="margin-top: 25px">
      <div class="col s8">
        <form>
          <div class="row">
            <div class="input-field col s12">
              <input v-model="articleForm.title" id="title" type="text" class="validate" placeholder="Article Title">
            </div>
            <div class="input-field col s12">
              <textarea v-model="articleForm.content" id="content" class="materialize-textarea" placeholder="Article Content.."></textarea>
            </div>
            <div class="input-field col s12">
              <input v-model="articleForm.category" id="category" type="text" class="validate" placeholder="Article Category">
            </div>
            <div class="right-align">
              <button v-if="user" @click="addArticle" class="btn waves-effect waves-light" type="button" name="action">Submit
                <i class="material-icons right">send</i>
              </button>
              <button v-else class="btn waves-effect waves-light" type="button" name="action" disabled>Login First {{ user }}
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
        <router-view></router-view>
      </div>
      <div class="col s4">
        Side Profile
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: false,
      articleForm: {
        title: '',
        content: '',
        category: ''
      }
    }
  },
  methods: {
    addArticle () {
      //
    }
  }
}
</script>

<style lang="css">
</style>
