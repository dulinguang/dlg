<template>
  <div id="app">
    <nav>
      <router-link to="/Home">{{ $t('navigation.HomePage') }}</router-link>
      <router-link to="/Company">{{ $t('navigation.TwoPage') }}</router-link>
      <!-- 可以根据需要添加更多页码链接 -->
       <select v-model="$i18n.locale">
        <option value="zh">中文</option>
        <option value="en">英文</option>
      </select>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
// 这里可以编写组件的逻辑代码
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
</style>