<template>
  <div class="home-card-detail">
    <div class="home-card-detail__container">
      <h2 class="home-card-detail__title">Карточка №{{ $route.params.id }}</h2>

      <p class="home-card-detail__text">Тут будет текст карточки.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCardDetail",
};
</script>
<style lang="less">
.home-card-detail {
  &__container {
    .container();
    margin-top: 45px;
  }

  &__title {
    margin-bottom: 15px;
    color: @light_orange;
  }
}
</style>
