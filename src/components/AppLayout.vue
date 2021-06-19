<template>
  <section class="app-layout">
    <div class="app-layout-header">
      <h4>calc</h4>
      <ThemeSelector />
    </div>
    <div class="app-layout-calculator">
      <Calculator />
    </div>
    <!-- <Attribution /> -->
  </section>
</template>

<script setup>
import ThemeSelector from './ThemeSelector.vue'
// import Attribution from './Attribution.vue'
import Calculator from './Calculator.vue'
</script>

<style scoped lang="css">
  .app-layout {
    margin: 0 auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .app-layout-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: flex-end;
  }
  .app-layout-header > h4 {
    margin: 0;
    color: var(--main-color-text);
    font-size: 20px;
    align-content: center;
    display: grid;
  }
</style>
