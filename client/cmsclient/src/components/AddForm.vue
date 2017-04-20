<template lang="html">
  <el-row >
    <br><br>
    <el-col :span="12" :offset="5">
      <el-form label-width="120px" class="demo-ruleForm">
        <el-form-item label="Title" prop="title">
          <el-input type="text" auto-complete="off" v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="" prop="content">
          <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 10}" auto-complete="off" v-model="article.content"></el-input>
        </el-form-item>
        <el-button class="btn-login" type="primary" @click="postQuestion()">Post Your Article</el-button>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods:{
    postQuestion() {
      this.$store.dispatch('postArticle')
    }
  },
  computed: {
    article() {
      return this.$store.getters.article
    }
  }
}
</script>

<style lang="css">
</style>
