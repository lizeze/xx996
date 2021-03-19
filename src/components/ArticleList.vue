<template>
  <div class="article-list-warpper">
    <div class="search-box">
      <span
          class="search-item"
          v-for="item in searchList"
          :class="{ active: searchType === item }"
          :key="item"
          @click="loadData(item)"
      >{{ item }}</span
      >
    </div>
    <div class="article-list">
      <div class="item" v-for="item in articleList" v-bind:key="item.id">
        <div class="info">
          <tag
              type="info"
              v-for="labelText in item.articleLabel.split(',')"
              :text="labelText"
              :key="labelText"
          ></tag
          >
          {{ item.createTime }}
        </div>
        <div class="title">
          <a :href="articleUrl(item)">{{ item.articleTitle }}</a>
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
      <div class="no-data" v-if="articleList.length<=0">

        暂无数据
      </div>
    </div>
  </div>
</template>
<script>
import Tag from "./Tag.vue";
export default {
  components: {Tag},
  mounted() {
    this.loadData();
  },
  watch: {
    $route(to, from) {
      if (to.params.m != from.params.m || to.params.s != from.params.s) {
        this.loadData();
      }
    },
  },
  methods: {
    articleUrl: function (item) {
      return "/a/" + item.id;
    },
    loadData: async function (type) {
      debugger
      let map = {};
      let api = "/article/list";
      if (type === "热门") {
        api = "/article/hot/list";
      } else {
        type = '最新'
      }
      this.searchType = type;

      let mainCode = this.$route.params.m;
      let subCode = this.$route.params.s;
      if (mainCode) map["type_code"] = mainCode;
      if (subCode && subCode !== "all") map["sub_code"] = subCode;
      let data = await this.$axios.post(api, map);
      this.articleList = data;
    },
  },
  data: function () {
    return {
      articleList: [],
      searchList: ["热门", "最新"],
      searchType: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.article-list-warpper {
  .search-box {
    display: flex;
    align-content: center;
    justify-content: center;
    padding-top: 10px;
    .search-item {
      padding: 0 1.2rem;
      border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
      cursor: pointer;
      color: #909090;
      &:hover {
        text-decoration: underline;
      }
      &.active {
        color: #007fff;
      }
    }
  }
  .article-list {
    background: #fff;
    display: flex;
    align-content: flex-start;
    justify-content: center;
    flex-direction: column;
    .no-data {
      margin: 20px;
    }
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
        margin-bottom: 6px;
        display: flex;
        align-content: center;
        justify-items: flex-start;
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
}
</style>
