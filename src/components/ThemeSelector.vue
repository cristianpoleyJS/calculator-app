<template>
    <div class="theme-selector">
        <span class="theme-selector-title">
            THEME
        </span>
        <div class="theme-selector-selector">
            <div class="theme-selector-selector-numbers">
                <span
                    v-for="theme in themes"
                    :key="theme"
                    @click="changeTheme(theme)">
                    {{ theme }}
                </span>
            </div>
            <span class="theme-selector-selector-toggle">
                <i
                    v-for="(theme, ix) in themes"
                    :key="`${theme}-ball`"
                    :class="{
                        'active': theme == themeSelected
                    }"
                    :style="`left: ${(theme+ix)*6}px`" />
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

function changeBodyClass () {
    document.body.className = `theme-${themeSelected.value}`
}

function changeTheme (theme) {
    this.themeSelected = theme
    localStorage.setItem('theme', this.themeSelected)
    this.changeBodyClass()
}

const themeSelected = ref(localStorage.getItem('theme') || 1)
const themes = [1, 2, 3]
changeBodyClass()

</script>

<style scoped>
    .theme-selector {
        display: flex;
        align-items: flex-end;
    }
    .theme-selector-title {
        color: var(--main-color-text);
        margin-right: 1rem;
        font-size: 8px;
    }

    .theme-selector-selector-numbers {
        color: var(--main-color-text);
        display: flex;
        justify-content: space-around;
        margin-bottom: 6px;
    }

    .theme-selector-selector-numbers span {
        cursor: pointer;
        font-size: 7px;
    }
    .theme-selector-selector-toggle {
        background-color: var(--bg-toggle);
        display: block;
        width: 36px;
        height: 14px;
        position: relative;
        padding: 0 4px;
        border-radius: var(--border-radius);
    }
    .theme-selector-selector-toggle i {
        width: 9px;
        height: 9px;
        position: absolute;
        top: 2px;
        display: inline-block;
    }
    .theme-selector-selector-toggle i.active {
        background-color: var(--bg-button-toggle);
        border-radius: var(--border-radius);
    }
</style>