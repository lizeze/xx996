<template>
  <div class="home">
    <page-header class="tool-bar"></page-header>
    <div class="article">
      <router-view />
    </div>
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
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
  }
  .article {
    background: #fff;
    width: 888px;

    margin: 110px auto 0;
  }
}
</style>