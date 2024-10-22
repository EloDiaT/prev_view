<script setup>

    import { ref, reactive, shallowRef, nextTick } from 'vue';

    import PrimaryButton from '@/Components/FormElements/PrimaryButton.vue';
    import SecondaryButton from '@/Components/FormElements/SecondaryButton.vue';

    const emit = defineEmits(['confirmed']);

    defineProps(
    {
        title:      { type: String, default: 'Confirm Password' },
        content:    { type: String, default: 'For your security, please confirm your password to continue.' },
        button:     { type: String, default: 'Confirm' },
    });

    const confirmingPasswordDialog = shallowRef(false);

    const formData = reactive(
    {
        password: '',
        error: '',
        processing: false,
    });

    const passwordInput = ref(null);
    const isPasswordVisible = ref(false)

    const startConfirmingPassword = () =>
    {
        axios.get(route('password.confirmation')).then(response =>
        {
            if (response.data.confirmed)
            {
                emit('confirmed');
            } else
            {
                confirmingPasswordDialog.value = true;

                setTimeout(() => passwordInput.value.focus(), 250);
            }
        });
    };

    const confirmPassword = () =>
    {
        formData.processing = true;

        axios.post(route('password.confirm'), {
            password: formData.password,
        }).then(() => {
            formData.processing = false;

            closeModal();
            nextTick().then(() => emit('confirmed'));

        }).catch(error =>
        {
            formData.processing = false;
            formData.error = error.response.data.errors.password[0];
            passwordInput.value.focus();
        });
    };

    const closeModal = () =>
    {
        confirmingPasswordDialog.value = false;
        formData.password = '';
        formData.error = '';
    };
</script>

<template>
    <span>
        <span @click="startConfirmingPassword">
            <slot />
        </span>

        <!-- Delete Account Confirmation Modal -->
        <v-dialog
            v-model="confirmingPasswordDialog"
            persistent
            max-width="500"
        >
            <v-card
                :title="title"
            >
                <v-divider class="mt-3"></v-divider>
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12">
                            {{ content }}
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                id="current_password"
                                label="Password"
                                ref="passwordInput"
                                placeholder="Enter your password"
                                v-model="formData.password"
                                :error-messages="formData.error"
                                density="compact"
                                variant="outlined"
                                :type="isPasswordVisible ? 'text' : 'password'"
                                autocomplete="current-password"
                                @keyup.enter="confirmPassword"
                            >
                                <template v-slot:append-inner>
                                    <box-icon
                                        class="ml-3 cursor-pointer"
                                        type="solid"
                                        :name="isPasswordVisible ? 'show' : 'hide'"
                                        @click="isPasswordVisible = !isPasswordVisible"
                                    ></box-icon>
                                </template>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="mt-3"></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <SecondaryButton @click="closeModal">
                        Cancel
                    </SecondaryButton>

                    <PrimaryButton
                        class="tw-ms-3"
                        :class="{ 'tw-opacity-25': formData.processing }"
                        :disabled="formData.processing"
                        @click="confirmPassword"
                    >
                        {{ button }}
                    </PrimaryButton>

                </v-card-actions>
            </v-card>
        </v-dialog>




        <!-- <DialogModal :show="confirmingPassword" @close="closeModal">
            <template #title>
                {{ title }}
            </template>

            <template #content>
                {{ content }}

                <div class="mt-4">
                    <TextInput
                        ref="passwordInput"
                        v-model="formData.password"
                        type="password"
                        class="mt-1 block w-3/4"
                        placeholder="Password"
                        autocomplete="current-password"
                        @keyup.enter="confirmPassword"
                    />

                    <InputError :message="formData.error" class="mt-2" />
                </div>
            </template>

            <template #footer>
                <SecondaryButton @click="closeModal">
                    Cancel
                </SecondaryButton>

                <PrimaryButton
                    class="ms-3"
                    :class="{ 'opacity-25': formData.processing }"
                    :disabled="formData.processing"
                    @click="confirmPassword"
                >
                    {{ button }}
                </PrimaryButton>
            </template>
        </DialogModal> -->


    </span>
</template>
