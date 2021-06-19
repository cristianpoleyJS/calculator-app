<template>
    <div class="result">
        <span>{{ result }}</span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  result: String || Number
})
</script>

<style scoped>
    .result {
        background-color: var(--bg-result);
        border-radius: var(--border-radius);
        color: var(--main-color-text);
        padding: 1rem;
        text-align: right;
        margin-bottom: 1rem;
    }

    .result > span {
        font-size: 36px;
        font-weight: 600;
    }
</style>