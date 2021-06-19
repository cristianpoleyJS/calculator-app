<template>
  <section class="app-layout">
    <div class="app-layout-header">
      <p>calc</p>
      <ThemeSelector />
    </div>
    <div class="app-layout-calculator">
      <Calculator />
    </div>
  </section>
</template>

<script setup>
import ThemeSelector from './ThemeSelector.vue'
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
  .app-layout-header > p {
    margin: 0;
    color: var(--main-color-text);
    font-size: var(--font-size-app-layout-title);
    align-content: center;
    display: grid;
  }
</style>
