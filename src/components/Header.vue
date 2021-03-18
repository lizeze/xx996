<template>
  <header>
    <div class="main-bar">
      <tool-bar v-on:changeNode="changeMain" :toolList="mainBarList.filter(t=>t.parentCode==0)"></tool-bar>
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
      sub: [],
      activeMainCode: ''
    };
  },
  components: {ToolBar},
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
    this.$store.commit('mainType', mainBarListdata[0].typeCode)
    this.activeMainCode = mainBarListdata[0].typeCode;
  },
  methods: {
    changeMain: function (item) {
      this.activeMainCode = item.typeCode;
      this.$store.commit('mainType', item.typeCode)
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
