<template>
  <div class="article-list">
    <div class="item" v-for="item in articleList" v-bind:key="item.id">
      <div class="info">{{ item.createTime }}</div>
      <div class="title">
        <a href="#">{{ item.title }}</a>
      </div>
      <div class="other">
        <div class="num">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liulanshu"></use>
          </svg>
          <span>{{ item.look }}</span>
        </div>

        <div class="num collection">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <span>{{ item.look }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      articleList: [
        {
          id: 1,
          createTime: new Date().toLocaleDateString(),
          title: "官方版微信3.0.0Mac电脑版微信可以刷朋友圈，附下载地址",
          look: 12,
        },
        {
          id: 3,
          createTime: new Date().toLocaleDateString(),
          title: "官方版微信3.0.0Mac电脑版微信可以刷朋友圈，附下载地址",
          look: 12,
        },
      ],
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
        &.collection{
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