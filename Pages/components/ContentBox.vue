<template>
    <div :class="[{'border tw-px-4': border}, 'tw-py-4 tw-w-full']" :style="{maxWidth: `${typeof max_w === 'number' ? `${max_w}px` : max_w  }`}">
        <slot></slot>
    </div>
</template>

<script setup>
    defineProps({
        border: {
            type: Boolean,
            default: true
        },
        max_w: {
            type: Number || String,
            default: 896
        }
    })
</script>

<style lang="scss" scoped>

</style>
