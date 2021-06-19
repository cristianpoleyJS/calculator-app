<template>
    <div class="result">
        <span>{{ Intl.NumberFormat('en-EN', {maximumSignificantDigits: 9}).format(result) }}</span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  result: [Number, String]
})
</script>

<style scoped>
    .result {
        background-color: var(--bg-result);
        border-radius: var(--border-radius);
        color: var(--main-color-text);
        padding: 0 1rem;
        margin-bottom: 1rem;
        align-items: center;
        justify-content: flex-end;
        height: 78px;
        display: flex;
        width: 100%;
        max-width: 350px;
    }

    .result > span {
        font-size: 36px;
        font-weight: 600;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
</style>