<template>
  <header>
    <div class="main-bar">
      <tool-bar v-on:changeNode="changeMain" :toolList="mainBarList"></tool-bar>
    </div>
    <div class="sub-bar">
      <tool-bar :toolList="sub"></tool-bar>
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
      activeMainCode: "",
      sub:[]
    };
  },
  components: { ToolBar },
  watch: {
    activeMainCode: function () {
     this.sub=this.subBarList.filter(t=>t.parentCode==this.activeMainCode)
    },
  },
  mounted: async function () {
    let mainBarListdata = await this.$axios.get("/config/main.json");
    this.mainBarList = mainBarListdata;
    let subBarList = await this.$axios.get("/config/sub.json");
    this.subBarList = subBarList;
  },
  methods: {
    changeMain: function (item) {
      this.activeMainCode = item.code;
      console.log(item);
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