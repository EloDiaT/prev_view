<template>
    <div :class="[{ 'align-center': center }, 'd-flex tw-mt-6 tw-m-0 tw-justify-between']">
        <div :style="{width: `${width}px`}" class="tw-text-black tw-font-bold">
            <div v-if="!title_slot">
                <div  v-if="title_html === ''"> {{ title }} </div>
                <div v-else v-html="title_html"/>
            </div>
            <div v-else>
                <slot name="title"></slot>
            </div>
        </div>
        <div :class="[{ 'd-flex': row }, 'tw-w-full', my_class]">
            <slot/>
        </div>
    </div>
</template>

<script setup>
defineProps({
    my_class: {
        type: String,
        default: ''
    },
    center: {
        type: Boolean,
        default: false
    },
    row: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    },
    title_html: {
        type: String,
        default: ''
    },
    title_slot: {
        type: Boolean,
        default: false
    },
    width: {
        type: Number,
        default: 250
    }
})
</script>
