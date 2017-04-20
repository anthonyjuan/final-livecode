<template lang="html">

</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible : false
    }
  },
  computed: {
    article() {
      return this.$store.getters.article
    }
  },
  mounted() {
    if(this.article.title != '') {
      this.dialogTableVisible = true
    }

  }

}
</script>

<style lang="css">
</style>
