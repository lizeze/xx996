<template>
  <div class="article-list">
    <div class="item" v-for="item in articleList" v-bind:key="item.id">
      <div class="info">{{ item.createTime }}</div>
      <div class="title">
        <a :href=articleUrl(item)>{{ item.articleTitle }}</a>
      </div>
      <div class="other">
        <div class="num">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liulanshu"></use>
          </svg>
          <span>{{ item.articleBrowse }}</span>
        </div>
        <div class="num collection">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <span>{{ item.articleCollections }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  mounted() {

    this.loadData()
  },
  methods: {
    articleUrl: function (item) {

      return '/a/' + item.id
    }
    ,
    loadData: async function () {
      let map = {}
      let mainCode = this.$store.getters.mainType;
      let subCode = this.$store.getters.subType;
      if (mainCode)
        map["type_code"] = mainCode
      if (subCode)
        map["sub_code"] = subCode
      debugger
      let data = await this.$axios.post('/article/list', map)
      this.articleList = data
    },
  },
  data: function () {
    return {
      articleList: [],
    };
  },
};
</script>
<style lang="scss" scoped>
.article-list {
  background: #fff;
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-direction: column;

  .item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    padding-bottom: 20px;
    padding-left: 50px;
    border-bottom: 1px solid #eee;

    .info {
      margin-bottom: 16px;
    }

    .title {
      color: #333;
      margin-bottom: 9px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .other {
      display: flex;
      align-content: flex-start;
      justify-self: start;
      flex-direction: row;

      .num {
        display: flex;
        align-items: center;
        margin: 0 5px;

        &.collection {
          cursor: pointer;
        }
      }

      .icon {
        font-size: 18px;
      }
    }
  }
}
</style>
