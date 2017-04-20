<template lang="html">
    <el-row>
      <el-col :span="16" :offset="2">
        <h1>All Articles</h1>
        <router-link to="/add"><el-button type="info" v-if="statusLogin">Post article</el-button></router-link>
        <router-link to="/login"><el-button type="info" v-if="statusLogin == false">Post article</el-button></router-link>
        <br>
        <br>
        <el-card class="box-card" v-for="article in articles" :key="article._id">
            <el-row>
              <el-col :span="14">
                <p style="font-size:22px;">{{ article.title }}</p>
                <p style="font-size:20px;">{{ article.content }}</p>
              </el-col>
              <el-col :span="6" :offset="4">
                <el-button type="info" v-if="statusLogin" @click="showEditDialog(article)">Edit</el-button>
                <el-button type="danger" v-if="statusLogin" @click="deletePost(article._id)">Delete</el-button>
              </el-col>
            </el-row>
            <el-row>
              <p style="font-size:12px;">posted by: <b>{{ article.author.username }}</b></p>
            </el-row>
        </el-card>
      </el-col>

      <el-dialog title="Details" v-model="dialogTableVisible">
        <el-row>
          <el-col :span="14">
            <el-form label-position="top" label-width="100px">
              <el-form-item label="Title">
                <el-input v-model="articleDialog.title"></el-input>
              </el-form-item>
              <el-form-item label="Content">
                <el-input v-model="articleDialog.content"></el-input>
              </el-form-item>
              <el-button type="info" @click="editArticle(articleDialog.id)">Edit</el-button>
            </el-form>
          </el-col>
        </el-row>

        <br>
      </el-dialog>
    </el-row>

</template>

<script>

export default {
  data() {
    return{
      dialogTableVisible : false,
      articleDialog: {
        id: '',
        title:'',
        content:''
      },
    }
  },
  methods: {
    deletePost(id) {
      // console.log(id);
      this.$alert('Are You Sure?!', 'Confirmation', {
         confirmButtonText: 'OK',
         callback: action => {
           if(action == 'confirm') {
             this.$store.dispatch('deleteArticle',id)

           }
         }
       });

    },
    editArticle() {
      this.$store.dispatch('editArticle',this.articleDialog)
      this.dialogTableVisible = false
    },
    showEditDialog(article) {
      this.articleDialog.id = article._id
      this.articleDialog.title = article.title
      this.articleDialog.content = article.content
      this.dialogTableVisible = true
    }
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
