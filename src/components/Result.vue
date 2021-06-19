<template>
    <div class="result">
        <span>{{ Number(result).toLocaleString() }}</span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  result: Number || String
})
</script>

<style scoped>
    .result {
        background-color: var(--bg-result);
        border-radius: var(--border-radius);
        color: var(--main-color-text);
        padding: 0 1rem;
        margin-bottom: 1rem;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 329px;
        align-items: center;
        justify-content: flex-end;
        height: 78px;
        display: flex;
    }

    .result > span {
        font-size: 36px;
        font-weight: 600;
    }
</style>