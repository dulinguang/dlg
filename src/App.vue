<template>
  <div id="app">
    <nav>
      <!-- 首页下拉菜单 -->
      <div class="dropdown"  @mouseenter="showHomeDropdown = true" @mouseleave="showHomeDropdown = false">
        <router-link to="/Home">{{ $t('navigation.HomePage') }}</router-link>
        <div v-if="showHomeDropdown" class="dropdown-content">
          <a href="#">{{ $t('HomePageSmallLabel.option1') }}</a>
          <a href="#">{{ $t('HomePageSmallLabel.option2') }}</a>
            <a href="#">{{ $t('HomePageSmallLabel.option3') }}</a>
        </div>
      </div>
      <!-- 产品下拉菜单 -->
      <div class="dropdown" @mouseenter="showProductDropdown = true" @mouseleave="showProductDropdown = false">
        <router-link to="/Company" >{{ $t('navigation.TwoPage') }}</router-link>
        <div v-if="showProductDropdown" class="dropdown-content">
          <a href="#">{{ $t('TwoPageSmallLabel.option1') }}</a>
          <a href="#">{{ $t('TwoPageSmallLabel.option2') }}</a>
          <a href="#">{{ $t('TwoPageSmallLabel.option3') }}</a>
        </div>
      </div>
      <!-- 语言选择 -->
      <select v-model="$i18n.locale">
        <option value="zh">中文</option>
        <option value="en">英文</option>
      </select>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 控制首页下拉菜单的显示和隐藏
const showHomeDropdown = ref(false);
// 控制产品下拉菜单的显示和隐藏
const showProductDropdown = ref(false);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #007bff;
}

nav a.router-link-active {
  font-weight: bold;
}

/* 下拉菜单样式 */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>