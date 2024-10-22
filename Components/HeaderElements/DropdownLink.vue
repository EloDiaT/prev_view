<script setup>

    import { Link } from '@inertiajs/vue3';

    defineProps(
    {
        href: String,
        as: String,
    });

</script>

<template>
    <div>
        <button
            v-if="as == 'button'" type="submit" class="tw-block tw-w-full tw-text-sm tw-text-center tw-leading-5 tw-text-gray-600 tw-no-underline">
            <slot />
        </button>

        <a v-else-if="as =='a'" :href="href" class="tw-block tw-w-full tw-text-sm tw-text-center tw-leading-5 tw-text-gray-600 tw-no-underline">
            <slot />
        </a>

        <Link v-else :href="href" class="tw-block tw-w-full tw-text-sm tw-text-center tw-leading-5 tw-text-gray-600 tw-no-underline">
            <slot />
        </Link>
    </div>
</template>
