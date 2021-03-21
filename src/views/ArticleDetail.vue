<template>
  <div class="article-detail">
    <div class="title">
      <h3>{{ article.articleTitle }}</h3>
      <div class="change">
        {{ article.articleBrowse }}次浏览 更新时间{{ article.createTime }}
      </div>
    </div>
    <div id="write" v-html="article.articleContent"></div>
  </div>
</template>
<script>
export default {
  name: "ArticleDetail",
  mounted() {
    this.loadData();
  },
  methods: {
    loadData: async function () {
      debugger;
      const articleId = this.$route.params.id;
      let article = await this.$axios.get("/article/" + articleId);
      this.articleHtml = article.articleContent;
      this.articleTitle = article.articleTitle;
      this.article = article;
      document.title = article.articleTitle;
      this.$axios.put(`article/browse/${articleId}`);
    },
  },
  data: function () {
    return {
      article: {},
    };
  },
};
</script>
<style lang="scss" scoped>
.article-detail {
  #write {
    p {
      img {
        width: 888px;
        max-width: 888px;
      }
    }
  }
  .title {
    padding-top: 15px;
    .change {
      font-size: 12px;
      color: #838383;
    }
  }
}
</style>
<style src="../assets/vue/vue.css">
</style>
