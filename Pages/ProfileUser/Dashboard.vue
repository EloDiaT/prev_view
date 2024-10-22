<script setup>

    import { Head, Link, usePage } from '@inertiajs/vue3';
    import ProfilePageLayout from '@/Layouts/ProfilePageLayout.vue';


    const totalProfit =
    {
        title: 'Total Profit',
        color: 'secondary',
        icon: 'ri-pie-chart-2-line',
        stats: '$25.6k',
        change: 42,
        subtitle: 'Weekly Project',
    }

    const newProject =
    {
        title: 'New Project',
        color: 'primary',
        icon: 'ri-file-word-2-line',
        stats: '862',
        change: -18,
        subtitle: 'Yearly Project',
    }

    defineOptions(
    {
        layout: ProfilePageLayout
    })

</script>

<template>

    <Head><title>Dashboard</title></Head>

    <!-- Page Heading DEMO SLOT -->
    <v-app-bar
        v-if="$slots.header"
        color="grey"
        height="48"
        flat
    >
        <div class="py-6 px-4">
            Dashboard Demo
        </div>
    </v-app-bar>

    <!-- Page Heading -->
    <v-app-bar
        color="grey"
        height="48"
        flat
    >
        <div class="py-6 px-4">
            Dashboard Demo
        </div>
    </v-app-bar>

    <!-- Page Content -->
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">

        <VRow class="match-height">
            <VCol
            cols="12"
            md="4"
            >
            <AnalyticsAward />
            </VCol>

            <VCol
            cols="12"
            md="8"
            >
            <AnalyticsTransactions />
            </VCol>

            <VCol
            cols="12"
            md="4"
            >
            <AnalyticsWeeklyOverview />
            </VCol>

            <VCol
            cols="12"
            md="4"
            >
            <AnalyticsTotalEarning />
            </VCol>

            <VCol
            cols="12"
            md="4"
            >
            <VRow class="match-height">
                <VCol
                cols="12"
                sm="6"
                >
                <AnalyticsTotalProfitLineCharts />
                </VCol>

                <VCol
                cols="12"
                sm="6"
                >
                <CardStatisticsVertical v-bind="totalProfit" />
                </VCol>

                <VCol
                cols="12"
                sm="6"
                >
                <CardStatisticsVertical v-bind="newProject" />
                </VCol>

                <VCol
                cols="12"
                sm="6"
                >
                <AnalyticsBarCharts />
                </VCol>
            </VRow>
            </VCol>

            <VCol
            cols="12"
            md="4"
            >
            <AnalyticsSalesByCountries />
            </VCol>

            <VCol
            cols="12"
            md="8"
            >
            <AnalyticsDepositWithdraw />
            </VCol>

            <VCol cols="12">
            <AnalyticsUserTable />
            </VCol>
        </VRow>

    </v-main>

</template>
