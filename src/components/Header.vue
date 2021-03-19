<template>
  <header>
    <div class="main-bar">
      <tool-bar
        :active-code="activeMainCode"
        v-on:changeNode="changeMain"
        :toolList="mainBarList.filter((t) => t.parentCode == 0)"
      ></tool-bar>
    </div>
    <div class="sub-bar">
      <tool-bar
        :active-code="activeSubCode"
        v-on:changeNode="changeSub"
        :toolList="this.getSubCodes()"
      ></tool-bar>
    </div>
  </header>
</template>
<script>
import ToolBar from "./ToolBar.vue";

export default {
  name: "PageHeader",
  data: function () {
    return {
      mainBarList: [],
      subBarList: [],
      sub: [],
      activeMainCode: "",
      activeSubCode: "all",
    };
  },
  components: { ToolBar },
  watch: {
    activeMainCode: function () {
      this.sub = this.mainBarList.filter(
        (t) => t.parentCode == this.activeMainCode
      );
    },
  },
  mounted: async function () {
    let mainBarListdata = await this.$axios.get("/article/type/");
    this.mainBarList = mainBarListdata;
    this.activeMainCode = mainBarListdata[0].typeCode;
  
    if (this.$route.params.m) {
      this.activeMainCode = this.$route.params.m;
      this.activeSubCode = this.$route.params.s;
    }
    if (this.$route.path === "/") this.getArticleList();
  },
  methods: {
    getSubCodes: function () {
      let subCode = [{ typeName: "全部", typeCode: "all" }];
      let list = this.mainBarList.filter(
        (t) => t.parentCode === this.activeMainCode
      );
      return subCode.concat(list);
    },
    getArticleList: function () {
      this.$router.push({
        path:
          "/list/" +
          this.activeMainCode +
          "/" +
          this.activeSubCode 
      });
    },
    changeSub: function (item) {
      this.activeSubCode = item.typeCode;
      this.getArticleList();
    },
    changeMain: function (item) {
      this.activeMainCode = item.typeCode;
      this.activeSubCode = "all";
      this.getArticleList();
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  background: #fff;
  box-shadow: 0 3px 3px #eee;

  .main-bar {
    padding: 10px;
    font-weight: 400;
    border-bottom: 1px solid #eee;
  }

  .sub-bar {
    padding: 10px;
  }
}
</style>
