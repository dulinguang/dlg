



<!-- src/components/view/Home.vue -->
<template>
  <div class="home-page">
    <h1>{{ $t('HomePage.title') }}</h1>
    <p>{{ $t('HomePage.description') }}</p>
    <div class="product-features">
      <div class="feature">
        <img src="../../assets/images/feature1.png" alt="Feature 1">
        <h3>{{ $t('HomePage.feature1Title') }}</h3>
        <p>{{ $t('HomePage.feature1Description') }}</p>
      </div>
      <div class="feature">
        <img src="../../assets/images/feature2.png" alt="Feature 2">
        <h3>{{ $t('HomePage.feature2Title') }}</h3>
        <p>{{ $t('HomePage.feature2Description') }}</p>
      </div>
      <div class="feature">
        <img src="../../assets/images/feature3.png" alt="Feature 3">
        <h3>{{ $t('HomePage.feature3Title') }}</h3>
        <p>{{ $t('HomePage.feature3Description') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这里可以编写组件的逻辑代码
</script>

<style scoped>
.home-page {
  text-align: center;
}

.product-features {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}

.feature {
  width: 30%;
}

.feature img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
</style>