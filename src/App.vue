<template>
  <div class="app">
  <PageHeader class="app__header" />

  <router-view class="app__layout" />
</div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  components: {
    PageHeader
  }
}
</script>

<style lang="less">
@import (reference) "style/variables.less";
@import (reference) "style/mixins.less";
* {
  margin: 0;
  padding: 0;
}
body,
html {
  font-size: 16px;
  font-family: @font2;
}

body {
  background-color: @light_gray;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

@keyframes flicker {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
