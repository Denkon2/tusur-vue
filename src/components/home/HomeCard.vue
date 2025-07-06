<template>
  <div class="home-card">
    <h4 class="home-card__title" @click="$router.push({name: 'card', params: {id: id}})">{{ title }}</h4>
    <p class="home-card__description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="less">
.home-card {
  margin-bottom: 15px;
  padding: 20px 15px;
  box-shadow: 0 0 5px 1px @brown;
  background-color: @white;
  &__title {
    margin-bottom: 10px;
    color: @light_orange;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
