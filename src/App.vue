<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  font-family: ApkMe, "Microsoft Yahei", "Hiragino Sans GB",
    "WenQuanYi Micro Hei", 微软雅黑, 华文细黑, STHeiti;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: #f4f5f5;
}
</style>
