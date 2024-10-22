<script setup>

    import { Head } from '@inertiajs/vue3';
    import ApiTokenManager from '@/Pages/API/Partials/ApiTokenManager.vue';
    import ProfilePageLayout from '@/Layouts/ProfilePageLayout.vue';

    defineProps(
    {
        tokens: Array,
        availablePermissions: Array,
        defaultPermissions: Array,
    });

    defineOptions(
    {
        layout: ProfilePageLayout
    })

</script>

<template>

    <Head><title>API Tokens</title></Head>

    <!-- Page Heading -->
    <v-app-bar
        color="grey"
        height="48"
        flat
    >
        <div class="py-6 px-4">
            API Tokens
        </div>
    </v-app-bar>

    <!-- Page Content -->
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <div>
            <div class="tw-max-w-7xl tw-mx-auto tw-py-10 sm:tw-px-6 lg:tw-px-8">
                <ApiTokenManager
                    :tokens="tokens"
                    :available-permissions="availablePermissions"
                    :default-permissions="defaultPermissions"
                />
            </div>
        </div>
    </v-main>

</template>
