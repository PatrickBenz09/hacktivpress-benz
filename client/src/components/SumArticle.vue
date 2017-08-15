<template>
  <div>
    <div v-for="article in articles" class="row">
      <div class="col s12">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{ article.title }}</span>
            <p>{{ article.content }}</p>
            <p>{{ article.category }}</p>
          </div>
          <div class="card-action">
            <!-- <router-link
            :id="article._id"
            :to="{ path: '/article' + '/' + article._id }"
            >Read More ></router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    articles () {
      return this.$store.state.articles
    }
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
    // getAllArticles () {
    //   this.$store.dispatch('getAllArticles')
    // }
  },
  mounted () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
