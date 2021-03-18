<template>
  <div class="tool-bar">
    <div
      class="item"
      v-for="item in toolList"
      v-bind:key="item.typeCode"
      @click="itemClick(item)"
      v-bind:class="{ active: activeCode === item.typeCode }"
    >
      {{ item.typeName }}
    </div>
  </div>
</template>
<script>
export default {
  name: "ToolBar",
  methods: {
    itemClick: function (item) {
      this.$emit("changeNode", item);
      this.activeCode = item.typeCode;
    },
  },
  props: {
    toolList: {
      type: Array,
      defaultValue: [],
    },
  },
  data: function () {
    return {
      activeCode: 'web',
    };
  },
};
</script>
<style lang="scss" scoped>
.tool-bar {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;

  .item {
    margin: 0 10px;
    line-height: 22px;
    cursor: pointer;
    &.active {
      color: #409eff;
    }
  }
}
</style>