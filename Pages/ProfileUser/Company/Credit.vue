<script setup>

    import { Head, Link, usePage } from '@inertiajs/vue3';
    import ProfileBaseLayout from "@/Layouts/ProfileBaseLayout.vue";
    import UpdateCompanyRequisitesBlock from "@/Pages/ProfileUser/Company/BasePartials/UpdateCompanyRequisitesBlock.vue";
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
<!--            Company Credit-->
<!--        </div>-->
<!--    </v-app-bar>-->

    <!-- Page Content -->
    <div class="tw-pl-4">
        <UpdateCompanyRequisitesBlock/>
    </div>
</template>
