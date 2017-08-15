<template>
  <div>
    <div class="row">
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
export default {
  computed: {
    id () {
      
    }
  }
  mounted () {
    let self = this
    self.get(`http://localhost:3000/articles/${ self.id }`)
  }
}
</script>

<style lang="css">
</style>
