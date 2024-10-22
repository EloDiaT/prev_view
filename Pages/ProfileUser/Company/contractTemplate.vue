<script setup>

    import { Head, Link, usePage } from '@inertiajs/vue3';
    import ProfileDocumentBaseLayout from "@/Layouts/ProfileDocumentBaseLayout.vue";
    import UpdateCompanyDocumentBasicConditions from "@/Pages/ProfileUser/Company/BasePartials/UpdateCompanyDocumentBasicConditions.vue";


    defineOptions(
    {
        layout: ProfileDocumentBaseLayout
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
<!--            Contract template-->
<!--        </div>-->
<!--    </v-app-bar>-->

    <!-- Page Content -->
    <div class="tw-pl-4">
        <UpdateCompanyDocumentBasicConditions/>
    </div>

</template>
