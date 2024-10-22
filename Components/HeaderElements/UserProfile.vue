<script setup>

    import avatar1 from '@images/avatars/avatar-1.png'
    import { router } from '@inertiajs/vue3';
    import DropdownLink from '@/Components/HeaderElements/DropdownLink.vue';

    const logout = () =>
    {
        router.post(route('logout'));
    };
</script>

<template>
    <v-badge
        dot
        class="mr-3"
        location="bottom right"
        offset-x="3"
        offset-y="3"
        color="success"
        bordered
    >
        <v-avatar
            class="cursor-pointer"
            color="primary"
            variant="tonal"
        >
            <v-img :src="avatar1" />

            <!-- SECTION Menu -->
            <v-menu
                activator="parent"
                width="230"
                location="bottom end"
                offset="14px"
            >
                <v-list>
                    <!-- 👉 User Avatar & Name -->
                    <v-list-item>
                        <template #prepend>
                            <v-list-item-action start>
                                <v-badge
                                    dot
                                    location="bottom right"
                                    offset-x="3"
                                    offset-y="3"
                                    color="success"
                                >
                                    <v-avatar
                                        color="primary"
                                        variant="tonal"
                                    >
                                        <v-img :src="avatar1" />
                                    </v-avatar>
                                </v-badge>
                            </v-list-item-action>
                        </template>
                        <v-list-item-title class="font-weight-semibold">
                            {{ $page.props.auth.user.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ $page.props.auth.user.email }}
                        </v-list-item-subtitle>
                    </v-list-item>

                    <v-divider class="my-2" />

                    <!-- 👉 Profile -->
                    <DropdownLink :href="route('profile.show')">
                        <v-list-item link>
                            <template #prepend>
                                <box-icon name='user' ></box-icon>
                            </template>
                            <v-list-item-title>Profile</v-list-item-title>
                        </v-list-item>
                    </DropdownLink>

                    <!-- 👉 Tokens -->
                    <DropdownLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')">
                        <v-list-item link>
                            <template #prepend>
                                <box-icon name='id-card'></box-icon>
                            </template>
                            <v-list-item-title>API Tokens</v-list-item-title>
                        </v-list-item>
                    </DropdownLink>

                    <!-- 👉 FAQ -->
                    <DropdownLink as="button">
                        <v-list-item link>
                            <template #prepend>
                                <box-icon name='question-mark'></box-icon>
                            </template>
                            <v-list-item-title>FAQ</v-list-item-title>
                        </v-list-item>
                    </DropdownLink>

                    <!-- Divider -->
                    <v-divider class="my-2" />

                    <!-- 👉 Logout -->
                    <form @submit.prevent="logout">
                        <DropdownLink as="button">
                            <v-list-item link>
                                <template #prepend>
                                    <box-icon name='log-out'></box-icon>
                                </template>
                                <v-list-item-title>Log Out</v-list-item-title>
                            </v-list-item>
                        </DropdownLink>
                    </form>

                </v-list>
            </v-menu>
            <!-- !SECTION -->

        </v-avatar>
    </v-badge>
</template>
