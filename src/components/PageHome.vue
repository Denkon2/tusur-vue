<template>
  <main class="home">
    <div class="home__container">
      <div class="home__list">
        <HomeCard />
      </div>
    </div>
  </main>
</template>

<script>
import HomeCard from "@/components/home/HomeCard";
export default {
  name: "PageHome",
  components: { HomeCard }
};
</script>
<style lang="less">
@import (reference) "../style/variables.less";
@import (reference) "../style/mixins.less";

.home {
  &__container {
    .container();
  }
  &__list {
    margin-top: 45px;
  }
  &__list-item {
    margin-bottom: 15px;
    padding: 20px 15px;
    box-shadow: 0 0 5px 1px @brown;
    background-color: @white;
  }
  &__item-title {
    margin-bottom: 10px;
    color: @light_orange;
    font-size: 20px;
  }
}
</style>
