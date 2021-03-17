<template>
  <div class="home">
    <page-header class="tool-bar"></page-header>

    <article-list class="article"></article-list>
  </div>
</template>

<script>
import ArticleList from "../components/ArticleList.vue";
import PageHeader from "../components/Header";

export default {
  name: "Home",
  components: { PageHeader, ArticleList },
};
</script>
<style lang="scss" scoped>
.home {
  color: #71777c;
  .tool-bar {
    margin-bottom: 10px;
  }
  .article {
    background: #fff;
    width: 888px;
    margin: auto;
  }
}
</style>