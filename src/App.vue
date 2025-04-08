<template>
  <div id="app">
    <!-- 第一行 -->
    <div class="first-row">
      <!-- 左边部分 -->
      <div class="left-part">
        <div class="language-selector">
          <img :src="`../src/assets/icon/${$i18n.locale}.png`" 
               alt="language" 
               class="language-icon" />
          <select v-model="$i18n.locale" class="language-select">
            <option value="zh">中文</option>
            <option value="en">English</option>
            <option value="jp">日本語</option>
          </select>
        </div>
        <button class="icon-button">
          {{ $t('buttons.contactUs') }}
        </button>
      </div>
      <!-- 右边部分 -->
      <div class="right-part">
        <button class="icon-button">
          <img src="./assets/icon/icon2.png" alt="cart" />
          {{ $t('buttons.cart') }}
        </button>
        <button class="icon-button">
          <img src="./assets/icon/icon3.png" alt="login" />
          {{ $t('buttons.login') }}
        </button>
      </div>
    </div>


    <div class="backImages" :style="{ backgroundImage: `url(${currentBackgroundImage})` }">
      <!-- 第二行 -->
      <div class="second-row" :class="{ fixed: isSecondRowFixed }">
        <div class="logo">
          <img src="./assets/images/logo.png" alt="Logo" />
        </div>
        <div class="nav-buttons">
          <div class="nav-item" @mouseenter="showSubNav(0)" @mouseleave="hideSubNav(0)">
            <router-link to="/Home" class="nav-button">{{ $t('navigation.HomePage') }}</router-link>
            <div class="sub-nav" :class="{ show: subNavVisible[0] }">
              <router-link to="/SubHome1" class="sub-nav-button">Sub Home 1</router-link>
              <router-link to="/SubHome2" class="sub-nav-button">Sub Home 2</router-link>
            </div>
          </div>
          <div class="nav-item" @mouseenter="showSubNav(1)" @mouseleave="hideSubNav(1)">
            <router-link to="/Company" class="nav-button">{{ $t('navigation.TwoPage') }}</router-link>
            <div class="sub-nav" :class="{ show: subNavVisible[1] }">
              <router-link to="/SubCompany1" class="sub-nav-button">Sub Company 1</router-link>
              <router-link to="/SubCompany2" class="sub-nav-button">Sub Company 2</router-link>
            </div>
          </div>  

          <router-link to="/Company" class="nav-button">{{ $t('navigation.TwoPage') }}</router-link>
          <!-- 可以根据需要添加更多页码链接 -->
        </div>
        <input type="text" :placeholder="$t('search.placeholder')" class="search-input" />

      </div>
     
    </div>
    <div>
      2232332
    </div>
    
    <!-- 第三行及其后续 -->
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router'

// 用于判断第二行是否固定
const isSecondRowFixed = ref(false);

// 监听滚动事件
const handleScroll = () => {
  if (window.scrollY > 0) {
    isSecondRowFixed.value = true;
  } else {
    isSecondRowFixed.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// 组件卸载时移除监听事件
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const router = useRouter()
const selectedRoute = ref('/Home')
const navigateTo = () => {
  router.push(selectedRoute.value)
}

// 背景图
// 背景图数组
const backgroundImages = [
  '../src/assets/images/back1.png',
  '../src/assets/images/back2.png',
  '../src/assets/images/back3.png'
];

// 当前显示的背景图
const currentBackgroundImage = ref(backgroundImages[0]);

// 定时器 ID
let intervalId;

onMounted(() => {
  console.log("2")
  console.log(currentBackgroundImage.value)
  // 每 5 秒更换一次背景图
  intervalId = setInterval(() => {
    const currentIndex = backgroundImages.indexOf(currentBackgroundImage.value);
    const nextIndex = (currentIndex + 1) % backgroundImages.length;
    currentBackgroundImage.value = backgroundImages[nextIndex];
  }, 5000);
});

onUnmounted(() => {
  // 组件卸载时清除定时器
  clearInterval(intervalId);
});

// 小导航栏显示状态
const subNavVisible = ref([false, false]);

// 显示小导航栏
const showSubNav = (index) => {
  subNavVisible.value[index] = true;
};

// 隐藏小导航栏
const hideSubNav = (index) => {
  subNavVisible.value[index] = false;
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
}

/* 第一行样式 */
.first-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.8);
}

.left-part {
  display: flex;
  align-items: center;
}

.language-select {
  margin-right: 20px;
  padding: 6px 12px;
  border-radius: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;  /* 新增去除边框 */
  outline: none;  /* 新增去除聚焦轮廓 */
}

/* 语言选择器样式 */
.language-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 20px;
}

.language-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

/* 右边部分 */
.right-part {
  display: flex;
  align-items: center;
}

.cart-button,
.login-button {
  margin-left: 10px;
}
.backImages{
  height: 90vh;  /* 修改高度为视口高度 */
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

/* 第二行样式 */
.second-row {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 20px;
  transition: all 0.3s ease;
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.logo img {
  width: 50px;
  height: 50px;
}

.search-input {
  width: 20%; 
  margin: 0 20px;
  padding: 10px;
}

/* 导航栏容器样式 */
.nav-buttons {
  width: 30%; /* 固定导航栏容器宽度为父容器的 30%，可根据需求调整 */
  margin-left: auto; /* 使导航栏靠右 */
  display: flex;
  flex-wrap: nowrap; /* 防止导航项换行 */
  white-space: nowrap; /* 防止导航项内文本换行 */
  justify-content: space-around; 
}

/* 导航按钮样式 */
.nav-button {
  margin-left: 10px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 5px 10px; 
  transition: color 0.3s ease; 
}

.nav-button:hover {
  color: #ffcc00; 
}

/* 修改按钮样式 */
.icon-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: none !important;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  transition: opacity 0.2s;
}

.icon-button img {
  width: 20px;
  height: 20px;
}

.icon-button:hover {
  opacity: 0.8;
}

/* 调整第一行布局 */
.first-row {
  padding: 8px 20px;
}

.left-part, .right-part {
  gap: 15px;
}

/* 优化现有按钮样式 */
.icon-button {
  border: none !important;
  background: none;
  padding: 8px 12px;
  transition: opacity 0.2s;
}

.icon-button:hover {
  opacity: 0.8;
}

/* 调整select元素样式 */
.language-select {
  padding: 6px 12px;
  border-radius: 4px;
}

/* 导航项样式 */
.nav-item {
  position: relative;
}

/* 小导航栏样式 */
.sub-nav {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  flex-direction: column; 
}

.sub-nav.show {
  display: flex;
  gap: 10px;
}

/* 小导航栏按钮样式 */
.sub-nav-button {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease; 
}

.sub-nav-button:hover {
  color: #ffcc00; 
}
</style>