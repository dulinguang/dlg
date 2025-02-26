<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="logo">
          <!-- 可以添加公司 logo -->
          <img src="./assets/images/logo.png" alt="Company Logo">
        </div>
        <ul class="nav-links">
          <li><router-link to="/Home">{{ $t('navigation.HomePage') }}</router-link></li>
          <li><router-link to="/Company">{{ $t('navigation.TwoPage') }}</router-link></li>
          <li><router-link to="/Product">{{ $t('navigation.TwoPage') }}3</router-link></li>
          <!-- 可以根据需要添加更多页码链接 -->
        </ul>
        <div class="language-switcher">
          <select v-model="$i18n.locale">
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>
        </div>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2025 Company Name. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// 这里可以编写组件的逻辑代码
</script>

<style scoped>
header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo img {
  height: 40px;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 10px;
}

.language-switcher {
  margin-left: 20px;
}

main {
  padding: 20px 0;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
</style>