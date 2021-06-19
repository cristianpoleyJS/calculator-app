<template>
    <div class="number">
        <span>{{ Number(number).toLocaleString() }}</span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  number: Number
})
</script>

<style scoped>
    .number {
        background-color: var(--bg-result);
        border-radius: var(--border-radius);
        color: var(--main-color-text);
        padding: 1rem;
        text-align: right;
        margin-bottom: 1rem;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 329px;
    }

    .number > span {
        font-size: 36px;
        font-weight: 600;
    }
</style>