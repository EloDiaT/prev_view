<script setup>

    import { Head, Link, usePage } from '@inertiajs/vue3';
    import ProfilePageLayout from '@/Layouts/ProfilePageLayout.vue';


    defineOptions(
    {
        layout: ProfilePageLayout
    })

</script>

<template>

    <Head><title>Dashboard</title></Head>

    <!-- Page Heading -->
    <v-app-bar
        color="grey"
        height="48"
        flat
    >
        <div class="py-6 px-4">
            Company EDS
        </div>
    </v-app-bar>

    <!-- Page Content -->
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio libero quaerat aliquid, molestiae minus hic ex sunt, corporis nemo voluptates dicta rem dolores? Qui nostrum repudiandae, autem quaerat non exercitationem.</p>

    </v-main>

</template>
