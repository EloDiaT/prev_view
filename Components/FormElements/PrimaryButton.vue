<script setup>
    defineProps(
    {
        type: { type: String, default: 'submit' },
        rounded: { type: String, default: 'lg'},
        color: { type: String, default: 'primary' },
        size: { type: String, default: 'large' },
        variant: { type: String, default: 'flat' },
        showBlock: { type: Boolean, default: false },
    });
</script>

<template>
    <v-btn
        :block="showBlock"
        :rounded="rounded"
        :color="color"
        :size="size"
        :variant="variant"
        :type="type"
    >
        <slot />
    </v-btn>
</template>
