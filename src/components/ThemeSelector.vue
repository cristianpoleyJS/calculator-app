<template>
    <div class="themes">
        <span class="theme-selector-title">
            THEME
        </span>
        <div class="theme-selector-">
            <div class="theme-selector--numbers">
                <span
                    v-for="theme in themes"
                    :key="theme"
                    @click="changeTheme(theme)">
                    {{ theme }}
                </span>
            </div>
            <span class="theme-selector--toggle">
                <i :class="`${1 == themeSelected ? 'active' : ''}`" style="left: 7%" />
                <i :class="`${2 == themeSelected ? 'active' : ''}`" style="left: 35%" />
                <i :class="`${3 == themeSelected ? 'active' : ''}`" style="left: 70%" />
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
    .themes {
        display: flex;
        align-items: flex-end;
    }
    .theme-selector-title {
        color: var(--main-color-text);
        margin-right: 1rem;
        font-size: var(--font-size-theme-selector-title);
        letter-spacing: 1px;
    }

    .theme-selector--numbers {
        color: var(--main-color-text);
        display: flex;
        justify-content: space-around;
        margin-bottom: 6px;
    }

    .theme-selector--numbers span {
        cursor: pointer;
        font-size: var(--font-size-theme-selector-numbers);
    }
    .theme-selector--toggle {
        background-color: var(--bg-toggle);
        display: block;
        width: var(--width-theme-toggle);
        height: var(--height-theme-toggle);
        position: relative;
        padding: 0 4px;
        border-radius: 36px;
    }
    .theme-selector--toggle i {
        width: var(--width-toggle-i-theme-selector);
        height: var(--height-toggle-i-theme-selector);
        position: absolute;
        top: var(--top-toggle-i-theme-selector);
        display: inline-block;
    }
    .theme-selector--toggle i.active {
        background-color: var(--bg-button-toggle);
        border-radius: 100%;
    }
</style>