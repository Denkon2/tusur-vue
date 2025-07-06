<template>
  <div class="rules">
    <div class="rules__container">
      <h2 class="rules__title">Правила</h2>
      <ul class="rules__list">
        <li class="rules__list-item">Не использовать ненормативную лексику</li>
        <li class="rules__list-item">Материалы не должны нарушать авторские права</li>
        <li class="rules__list-item">Будьте добры и мир будет добр к вам</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "AppRules"
}
</script>
<style lang="less">
.rules {
  &__container {
    .container();
    margin-top: 20px;
  }
  &__title {
    margin-bottom: 15px;
    color: @light_orange;
  }
  &__list {
    padding-left: 20px;
  }
  &__list-item {
    margin-bottom: 5px;
    &:not(:last-child)::after {
      content: ";";
    }
  }
}
</style>
