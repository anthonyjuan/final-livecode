<template lang="html">
    <el-row>
      <el-col :span="16" :offset="2">
        <h1>All Articles</h1>
        <el-card class="box-card" v-for="article in articles" :key="article._id">
            <el-row>
              <el-col :span="14">
                <p>{{ article.title }}</p>
              </el-col>
              <el-col :span="6" :offset="4">
                <el-button type="info" v-if="statusLogin">Edit</el-button>

                <el-button type="danger" v-if="statusLogin">Delete</el-button>
              </el-col>
            </el-row>
        </el-card>
      </el-col>
    </el-row>

</template>

<script>
export default {
  methods: {

  },
  computed: {
    articles() {
      return this.$store.getters.articles
    },
    statusLogin() {
      return this.$store.getters.statusLogin
    }
  },
  mounted() {
    this.$store.dispatch('getArticles')
  }
}
</script>

<style lang="css">
</style>
