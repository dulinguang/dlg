<!-- src/components/view/Company.vue -->
<template>
  <div class="company-page">
    <h1>{{ $t('TwoPage.title') }}</h1>
    <p>{{ $t('TwoPage.description') }}</p>
    <div class="company-info">
      <h2>{{ $t('TwoPage.companyHistoryTitle') }}</h2>
      <p>{{ $t('TwoPage.companyHistoryDescription') }}</p>
      <h2>{{ $t('TwoPage.companyValuesTitle') }}</h2>
      <ul>
        <li>{{ $t('TwoPage.companyValue1') }}</li>
        <li>{{ $t('TwoPage.companyValue2') }}</li>
        <li>{{ $t('TwoPage.companyValue3') }}</li>
      </ul>
      <div>1</div>
      <div>2</div>
      <ul>
        <li>{{ $t('TwoPage.companyValue1') }}</li>
        <li>{{ $t('TwoPage.companyValue2') }}</li>
        <li>{{ $t('TwoPage.companyValue3') }}</li>
      </ul>
      <div>2</div>
      <div>3</div>
      <ul>
        <li>{{ $t('TwoPage.companyValue1') }}</li>
        <li>{{ $t('TwoPage.companyValue2') }}</li>
        <li>{{ $t('TwoPage.companyValue3') }}</li>
      </ul>
      <div>4</div>
    </div>
  </div>
</template>

<script setup>
// 这里可以编写组件的逻辑代码
</script>

<style scoped>
.company-page {
  text-align: center;
}

.company-info {
  text-align: left;
  margin-top: 40px;
}
</style>
