<template>
  <div class="home-card">
    <h4 class="home-card__title">Закрытие ресторана</h4>
    <p class="home-card__description">
      Вчера прошел последний день приема в знаменитом ресторане. Причины закрытия ...
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
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
  }
}
</style>
