<template>
  <div class="tag" v-bind:class="classObject">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Tag",
  data: function () {
    return {
      classObject: {
        default: this.type === "default",
        success: this.type === "success",
        info: this.type === "info",
        warring: this.type === "warring",
      },
    };
  },
  props: {
    text: {
      type: String,
    },
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style scoped  lang="scss">
.tag {
  padding: 0 10px;

  margin: 0 5px;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  &.default {
    background-color: #ecf5ff;
    font-size: 12px;
    color: #409eff;
    border: 1px solid #d9ecff;
  }
  &.success {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
  }
  &.info {
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
  }
  &.warring {
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: #e6a23c;
  }
}
</style>
