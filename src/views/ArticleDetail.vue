<template>
  <div id="write" v-html="articleHtml"></div>
</template>
<script>


export default {
  name: "ArticleDetail",
  mounted() {

    this.loadData()
  },
  methods: {
    loadData: async function () {
      debugger
      const articleId = this.$route.params.id;

      let article = await this.$axios.get("/article/" + articleId);
      this.articleHtml = article.articleContent;
      document.title = article.articleTitle
    },
  },
  data: function () {
    return {
      articleHtml: "",
    };
  },
};
</script>
<style lang="scss" scoped>


#write {
  //background: #F5F5D5;
}
</style>
<style src="../assets/vue/vue.css">
</style>
