<script setup>

    import ThemeSwitcher from '@/Components/CommonElements/ThemeSwitcher.vue'

    const themes =
    [
        {
            name: 'light',
            icon: 'ri-sun-line',
        },
        {
            name: 'dark',
            icon: 'ri-moon-clear-line',
        },
    ]

</script>

<template>
  <ThemeSwitcher :themes="themes" />
</template>
