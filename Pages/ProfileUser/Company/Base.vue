<script setup>

    import { Head, Link, usePage } from '@inertiajs/vue3';
    import UpdateCompanyAboutBlock from '@/Pages/ProfileUser/Company/BasePartials/UpdateCompanyAboutBlock.vue';
    import ProfileBaseLayout from "@/Layouts/ProfileBaseLayout.vue";


    defineOptions(
    {
        layout: ProfileBaseLayout
    })

</script>

<template>

    <Head><title>Dashboard</title></Head>

    <!-- Page Heading -->
<!--    <v-app-bar-->
<!--        color="grey"-->
<!--        height="48"-->
<!--        flat-->
<!--    >-->
<!--        <div class="py-6 px-4">-->
<!--            Company Base-->
<!--        </div>-->
<!--    </v-app-bar>-->

    <!-- Page Content -->
    <div class="tw-pl-4">
        <UpdateCompanyAboutBlock :user="$page.props.auth.user" :profileExtParams="$page.props.profileExtParams" />
    </div>

</template>
