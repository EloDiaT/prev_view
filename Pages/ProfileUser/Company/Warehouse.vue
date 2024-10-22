<script setup>
import ProfileBaseLayout from "@/Layouts/ProfileBaseLayout.vue";
import {Head} from "@inertiajs/vue3";
import UpdateCompanyAboutBlock from "@/Pages/ProfileUser/Company/BasePartials/UpdateCompanyAboutBlock.vue";
import UpdateCompanyWarehouseBlock from "@/Pages/ProfileUser/Company/BasePartials/UpdateCompanyWarehouseBlock.vue";

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
<!--            Company Warehouse-->
<!--        </div>-->
<!--    </v-app-bar>-->

    <!-- Page Content -->
    <div class="tw-pl-4">
        <slot>
            <UpdateCompanyWarehouseBlock/>
        </slot>
    </div>
</template>
