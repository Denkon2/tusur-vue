<template>
  <div>
    <header class="page-header">
      <div class="page-header__container">
        <div class="page-header__logo-wrap">
          <SvgLogo class="page-header__logo" />
          <h4 class="page-header__logo-text">
            People<span class="page-header__logo-text-red">{{ text }}</span>
          </h4>
          <div class="page-header__logo-circle"></div>
        </div>
        <nav class="page-header__nav">
          <router-link to="/" class="page-header__nav-item">Главная</router-link>

          <router-link to="/rules" class="page-header__nav-item">Правила</router-link>

          <router-link :to="{path: '/contacts', query: contacts }" class="page-header__nav-item">Контакты</router-link>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import SvgLogo from "@/components/svg/SvgLogo";
export default {
  name: "PageHeader",
  data() {
    return {
      contacts: {
        city: 'Новосибирск',
        street: "Железнодорожная, д.77",
        legal_address: "Лазо, д.19",
        inn: "584756452",
        phone_number: "78-82-12"
      }
    };
  },
  props: {
    text: String,
  },
  components: {
    SvgLogo,
  },
};
</script>

<style lang="less">
@import (reference) "../style/variables.less";
@import (reference) "../style/mixins.less";

.page-header {
  background-color: @brown;
  &__container {
    .container();
    height: 60px;
    display: flex;
    align-items: center;
  }
  &__logo-wrap {
    display: flex;
  }
  &__logo {
    width: 36px;
    color: @light_green;
  }
  &__logo-text {
    margin-left: 10px;
    color: @white;
    font-size: 26px;
    font-family: @font1;
  }
  &__logo-text-red {
    color: @dark_orange;
  }
  &__logo-circle {
    position: relative;
    top: 12px;
    margin-left: 10px;
    width: 15px;
    height: 15px;
    background-color: @dark_orange;
    border-radius: 50%;
    animation: flicker 2s ease infinite;
  }
  &__nav {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  &__nav-item {
    color: @white;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: color 0.2s ease-out;
    text-decoration: none;
    &.router-link-active {
      color: @light_orange;
    }
    & + & {
      margin-left: 20px;
    }
    &:hover {
      @media (hover: hover) {
        color: @light_orange;
      }
    }
    &:active {
      color: @light_orange;
    }
  }
}
</style>
