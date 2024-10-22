<script setup>

    import { ref, watch } from 'vue';
    import { useForm } from '@inertiajs/vue3';

    import { GetTranslate } from '@core/utils/GetTranslate'

    import InputLabel from '@/Components/FormElements/InputLabel.vue';

    const props = defineProps(
    {
        tokens: Array,
        availablePermissions: Array,
        defaultPermissions: Array,
    });

    const createApiTokenForm = useForm(
    {
        name: '',
        permissions: props.defaultPermissions,
    });

    const updateApiTokenForm = useForm(
    {
        permissions: [],
    });

    const deleteApiTokenForm = useForm({});
    const deleteApiTokenDialog = ref(false);
    const apiTokenBeingDeleted = ref(null);

    const displayingToken = ref(false);

    const managingPermissionsFor = ref(null);
    const managingPermissionsForDialog = ref(false);

    /** CREATE FUNCS **/
    const createApiToken = () =>
    {
        createApiTokenForm.post(route('api-tokens.store'),
        {
            preserveScroll: true,
            onSuccess: () =>
            {
                displayingToken.value = true;
                createApiTokenForm.reset();
            },
        });
    };

    /** MANAGE FUNCS **/
    const manageApiTokenPermissions = (token) =>
    {
        updateApiTokenForm.permissions = token.abilities;
        managingPermissionsFor.value = token;
        managingPermissionsForDialog.value = true;
    };

    const closeManageApiTokenPermissions = () =>
    {
        managingPermissionsForDialog.value = false;
        managingPermissionsFor.value = null;
    };

    const updateApiToken = () =>
    {
        updateApiTokenForm.put(route('api-tokens.update', managingPermissionsFor.value),
        {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => (closeManageApiTokenPermissions),
        });
    };

    /** DELETE FUNCS **/
    const confirmApiTokenDeletion = (token) =>
    {
        deleteApiTokenDialog.value = true;
        apiTokenBeingDeleted.value = token;
    };

    const deleteApiToken = () =>
    {
        deleteApiTokenForm.delete(route('api-tokens.destroy', apiTokenBeingDeleted.value),
        {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () =>
            {
                deleteApiTokenDialog.value = false;
                apiTokenBeingDeleted.value = null
            },
        });
    };

    watch(deleteApiTokenDialog, (newValue) =>
    {
        if (!newValue) apiTokenBeingDeleted.value = null;
    })

</script>

<template>
    <div>

        <!-- Generate API Token -->
        <div class="md:tw-grid md:tw-grid-cols-3 md:tw-gap-6">

            <SectionTitle>
                <template #title>
                    {{ GetTranslate($page, 'Create API Token') }}
                </template>
                <template #description>
                    {{ GetTranslate($page, 'API tokens allow third-party services to authenticate with our application on your behalf.') }}
                </template>
            </SectionTitle>

            <div class="tw-mt-5 md:tw-mt-0 md:tw-col-span-2">
                <form @submit.prevent="createApiToken" ref="form">
                    <div class="tw-px-4 tw-py-5 tw-bg-white sm:tw-p-6 tw-shadow sm:tw-rounded-tl-md sm:tw-rounded-tr-md">
                        <div class="tw-grid tw-grid-cols-6 tw-gap-6">

                            <!-- Token Name -->
                            <div class="tw-col-span-6 sm:tw-col-span-4">
                                <v-text-field
                                    id="name"
                                    label="name"
                                    type="text"
                                    density="compact"
                                    variant="outlined"
                                    v-model="createApiTokenForm.name"
                                    :error-messages="createApiTokenForm.errors.name"
                                    class="mb-3"

                                    autofocus
                                    autocomplete="second_name"
                                >
                                </v-text-field>
                            </div>

                            <!-- Token Permissions -->
                            <div v-if="availablePermissions.length > 0" class="tw-col-span-6">

                                <InputLabel for="permissions" value="Permissions" />

                                <div class="tw-mt-2 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
                                    <div v-for="permission in availablePermissions" :key="permission">
                                        <v-checkbox
                                            v-model="createApiTokenForm.permissions"
                                            :label="permission"
                                            :value="permission"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tw-flex tw-items-center tw-justify-end tw-px-4 tw-py-3 tw-bg-gray-50 tw-text-end sm:tw-px-6 tw-shadow sm:tw-rounded-bl-md sm:tw-rounded-br-md">
                        <ActionMessage :on="createApiTokenForm.recentlySuccessful" class="tw-me-3">
                            Created.
                        </ActionMessage>

                        <PrimaryButton :class="{ 'tw-opacity-25': createApiTokenForm.processing }" :disabled="createApiTokenForm.processing">
                            Create
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>

        <div v-if="tokens.length > 0">

            <v-divider class="my-10"></v-divider>

            <!-- Manage API Tokens -->
            <div class="md:tw-grid md:tw-grid-cols-3 md:tw-gap-6 tw-mt-10 sm:tw-mt-0">
                <SectionTitle>
                    <template #title>
                        Manage API Tokens
                    </template>
                    <template #description>
                        You may delete any of your existing tokens if they are no longer needed.
                    </template>
                </SectionTitle>

                <div class="tw-mt-5 md:tw-mt-0 md:tw-col-span-2">
                    <div class="tw-px-4 tw-py-5 sm:tw-p-6 tw-bg-white tw-shadow sm:tw-rounded-lg">
                        <div class="tw-space-y-6">
                            <div v-for="token in tokens" :key="token.id" class="tw-flex tw-items-center tw-justify-between">
                                <div class="tw-break-all">
                                    {{ token.name }}
                                </div>

                                <div class="tw-flex tw-items-center tw-ms-2">
                                    <div v-if="token.last_used_ago" class="tw-text-sm tw-text-gray-400">
                                        Last used {{ token.last_used_ago }}
                                    </div>

                                    <button
                                        v-if="availablePermissions.length > 0"
                                        class="tw-cursor-pointer tw-ms-6 tw-text-sm tw-text-gray-400 tw-underline"
                                        @click="manageApiTokenPermissions(token)"
                                    >
                                        Permissions
                                    </button>

                                    <button class="tw-cursor-pointer tw-ms-6 tw-text-sm tw-text-red-500" @click="confirmApiTokenDeletion(token)">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Token Value Modal -->
        <v-dialog
            v-model="displayingToken"
            max-width="600"
        >
            <v-card
                title="API Token"
            >
                <v-divider class="mt-3"></v-divider>
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12">
                            Please copy your new API token. For your security, it won't be shown again.
                        </v-col>
                        <v-col cols="12">
                            <div v-if="$page.props.jetstream.flash.token" class="mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all">
                                {{ $page.props.jetstream.flash.token }}
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="mt-3"></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <SecondaryButton @click="displayingToken = false">
                        Close
                    </SecondaryButton>

                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- API Token Permissions Modal -->
        <v-dialog
            v-model="managingPermissionsForDialog"
            persistent
            max-width="500"
        >
            <v-card
                title="API Token Permissions"
            >
                <v-divider class="mt-3"></v-divider>
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12">
                            <div class="tw-mt-2 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
                                <div v-for="permission in availablePermissions" :key="permission">
                                    <v-checkbox
                                        v-model="updateApiTokenForm.permissions"
                                        :label="permission"
                                        :value="permission"
                                    />
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="mt-3"></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <SecondaryButton @click="closeManageApiTokenPermissions">
                        Close
                    </SecondaryButton>

                    <PrimaryButton
                        class="tw-ms-3"
                        :class="{ 'tw-opacity-25': updateApiTokenForm.processing }"
                        :disabled="updateApiTokenForm.processing"
                        @click="updateApiToken"
                    >
                        Save
                    </PrimaryButton>

                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Delete Token Confirmation Modal -->
        <v-dialog
            v-model="deleteApiTokenDialog"
            persistent
            max-width="500"
        >
            <v-card>
                <v-card-title class="bg-red-lighten-2">
                    <div class="text-white">Delete API Token2</div>
                </v-card-title>
                <v-divider class="mb-2"></v-divider>
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12">
                            Are you sure you would like to delete this API token?
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="my-2"></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <SecondaryButton @click="deleteApiTokenDialog = false">
                        Cancel
                    </SecondaryButton>

                    <DangerButton
                        class="tw-ms-3"
                        :class="{ 'tw-opacity-25': deleteApiTokenForm.processing }"
                        :disabled="deleteApiTokenForm.processing"
                        @click="deleteApiToken"
                    >
                        Delete
                    </DangerButton>

                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>
