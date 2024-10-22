<script setup>

    import { ref } from 'vue';
    import { Link, router, useForm, usePage } from '@inertiajs/vue3';
    import ContentBox from "@/Pages/components/ContentBox.vue";
    import SecondaryButton from "@/Components/FormElements/SecondaryButton.vue";
    import keyWord from "@/Pages/components/KeyWord.vue";
    import ProfileItem from "@/Pages/components/ProfileItem.vue";
    const props = defineProps(
    {
        user: Object,
        profileExtParams: Object,
    });

    const page = usePage();
    const formData = useForm(
    {
        _method: 'PUT',
        photo: null,
    });

    const verificationLinkSent = ref(null);
    const photoPreviewLogo = ref(null);
    const photoPreview = ref(null);
    const photoInput = ref(null);
    const contact_count = ref(2);
    const photoCompanyInput = ref(null);
    const company_photo = ref([])
    const bold = ref(false)
    const italic = ref(false)

    const updatePhotoPreview = () => {
        if (company_photo.value.length > 5) return;

        const photo = photoCompanyInput.value.files[0];

        if (!photo) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            console.log(e)
            photoPreview.value = e.target.result;
        };
        const obj = {}
        reader.readAsDataURL(photo);
        obj.url = reader
        company_photo.value.push(obj)
    }
    const updateLogoPhotoPreview = () => {
        const photo = photoInput.value.files[0];

        if (! photo) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            photoPreviewLogo.value = e.target.result;
        };
        reader.readAsDataURL(photo);
    };

</script>

<template>
    <ContentBox :border="false">
        <v-row>
            <v-col>
                <div>
                    <h2>О компании</h2>
                </div>

                <ProfileItem :center="true" :row="true" :title="'Деительность'">
                    <v-radio-group inline>
                        <v-radio color="rgb(177 119 235)" label="Продовец" value="one"></v-radio>
                        <v-radio color="rgb(177 119 235)" label="Покупатель" value="two"></v-radio>
                        <v-radio color="rgb(177 119 235)" label="Любая" value="three"></v-radio>
                    </v-radio-group>
                </ProfileItem>

                <ProfileItem :title="'Профиль'">
                    <v-text-field class="tw-text-gray-500" clearable label="Краткое наименование"/>
                    <v-text-field class="mt-2 tw-text-gray-500" clearable label="Город"/>
                    <v-text-field class="mt-2 tw-text-gray-500" clearable label="Сайт"/>
                    <v-text-field class="mt-2 tw-text-gray-500" clearable label="E-mail"/>
                </ProfileItem>

                <ProfileItem :title="'Кртакое описание'">
                    <v-text-field class="tw-text-gray-500" label="3-4 слова "></v-text-field>
                </ProfileItem>

                <ProfileItem :title="'Подробное описание'">
                    <div class="tw-flex">
                        <div class="cursor-pointer" @click="bold = !bold">
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2595 11.6735C16.0369 11.8912 16.7133 12.3343 17.2886 13.0029C17.8484 13.7026 18.1283 14.5811 18.1283 15.6385C18.1283 16.9135 17.6851 17.9631 16.7988 18.7872C15.897 19.5957 14.7541 20 13.3703 20H6V4H13.1137C14.5131 4 15.6171 4.37318 16.4257 5.11953C17.2342 5.88144 17.6385 6.84548 17.6385 8.01166C17.6385 9.02235 17.3897 9.82313 16.8921 10.414C16.379 11.0204 15.8348 11.4169 15.2595 11.6035V11.6735ZM14.4198 8.57143C14.4198 7.20311 13.6657 6.51895 12.1574 6.51895H9.12536V10.6939H12.2041C12.9193 10.6939 13.4713 10.5073 13.8601 10.1341C14.2332 9.76093 14.4198 9.24004 14.4198 8.57143ZM12.5773 17.5044C13.3236 17.5044 13.8989 17.31 14.3032 16.9213C14.723 16.517 14.9329 15.9572 14.9329 15.242C14.9329 14.5112 14.7153 13.9514 14.2799 13.5627C13.8445 13.174 13.2381 12.9796 12.4606 12.9796H9.12536V17.5044H12.5773Z" fill="#1F2328"/>
                            </svg>
                        </div>
                        <div @click="italic = !italic" class=" tw-ml-2 cursor-pointer tw-text-2xl tw-relative tw-top-[-3px] tw-font-bold">i</div>
                    </div>
                    <v-textarea
                        :class="[{'font-weight-bold' : bold}, {'font-italic' : italic}]"
                        clearable
                        class="tw-text-gray-500"
                        label="Описание компании длинной в 3-4 строки"
                    />
                </ProfileItem>

                <ProfileItem :title="'Телефоны'">
                    <v-row no-gutters v-for="item in contact_count" :key="item" class="mb-2">
                        <v-text-field  class="tw-text-gray-500" label="Имя должность"></v-text-field>
                        <v-text-field class="ml-2 tw-text-gray-500" label="+7"></v-text-field>
                    </v-row>
                    <div
                        v-if="contact_count < 4"
                        @click="contact_count >= 4 ? contact_count = 4 : contact_count++"
                        class="float-right tw-text-purple-400 cursor-pointer">

                        <div class="d-flex tw-items-center tw-justify-between">
                            <span class="tw-flex">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12.5 5.5C13.0523 5.5 13.5 5.94772 13.5 6.5V10.5H17.5C18.0523 10.5 18.5 10.9477 18.5 11.5V12.5C18.5 13.0523 18.0523 13.5 17.5 13.5H13.5V17.5C13.5 18.0523 13.0523 18.5 12.5 18.5H11.5C10.9477 18.5 10.5 18.0523 10.5 17.5V13.5H6.5C5.94772 13.5 5.5 13.0523 5.5 12.5V11.5C5.5 10.9477 5.94772 10.5 6.5 10.5H10.5V6.5C10.5 5.94772 10.9477 5.5 11.5 5.5H12.5Z" fill="rgb(192 132 252 / 1)"/>
                                </svg>
                            </span>
                            <span class="tw-ml-1">Добавить контакт</span>
                        </div>
                    </div>
                </ProfileItem>

                <keyWord class="tw-mt-6 tw-m-0"/>

                <ProfileItem :title="'Логотип компании'">
                    <div class="tw-flex">
                        <label
                            class="tw-text-xs tw-cursor-pointer border tw-text-center tw-text-gray-500 tw-w-max tw-p-5 tw-mt-2 tw-me-2 tw-rounded"
                        >
                            <input
                                ref="photoInput"
                                type="file"
                                class="tw-hidden"
                                @change="updateLogoPhotoPreview"
                            >
                            <span>
                                <span class="d-block">
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M16 7L12 3M12 3L8 7M12 3V15M21 11V17.7992C21 18.9193 21 19.4794 20.782 19.9072C20.5903 20.2835 20.2843 20.5895 19.908 20.7812C19.4802 20.9992 18.9201 20.9992 17.8 20.9992H6.2C5.0799 20.9992 4.51984 20.9992 4.09202 20.7812C3.71569 20.5895 3.40973 20.2835 3.21799 19.9072C3 19.4794 3 18.9193 3 17.7992V11" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                                <br>
                                JPG, PNG, SVG
                                <br>
                                до 200 КВ
                            </span>
                        </label>

                        <div v-if="photoPreviewLogo">
                            <div class="tw-mt-2">
                                <img
                                    v-show="!photoPreviewLogo"
                                    :src="user.profile_photo_url"
                                    :alt="user.name"
                                    class="tw-h-20 tw-w-20 tw-object-cover"
                                >
                                <span
                                    v-show="photoPreviewLogo"
                                    class="tw-block tw-w-20 tw-h-20 tw-bg-cover tw-bg-no-repeat tw-bg-center"
                                    :style="'background-image: url(\'' + photoPreviewLogo + '\');'"
                                />
                            </div>
                        </div>
                    </div>
                </ProfileItem>

                <ProfileItem :title="'Фотографии компании'">
                    <p class="tw-text-gray-500 tw-text-l">
                       Загрузите до 5 фотографий лицензий, сертификатов, производства,
                        <br>
                        продукции для поднятия, доверия покупателей. Минимальый размер
                        <br>
                        изображения - 300x300px. Максимальный размер файла - 1024 КВ.
                    </p>
                    <div class="mt-2">
                        <div
                            v-if="$page.props.jetstream.managesProfilePhotos"
                             class="d-flex align-center"
                        >
                            <div
                                v-for="(item, index) in company_photo"
                                :key="item"
                                class="tw-mt-2 tw-mr-4"
                            >
                                <img
                                    v-show="!photoPreview"
                                    :src="item.url.result"
                                    :alt="index"
                                    class="tw-h-20 tw-w-20 tw-object-cover"
                                >
                                <span
                                    v-show="photoPreview"
                                    class="tw-block tw-w-20 tw-h-20 tw-bg-cover tw-bg-no-repeat tw-bg-center"
                                    :style="'background-image: url(\'' + item.url.result + '\');'"
                                />
                            </div>

                            <label class="cursor-pointer" v-if="company_photo.length <= 5">
                                <input
                                    ref="photoCompanyInput"
                                    type="file"
                                    class="tw-hidden"
                                    @change="updatePhotoPreview"
                                >
                                <span
                                    class="tw-w-20 tw-h-20 border tw-rounded tw-p-2 tw-flex tw-items-center tw-justify-center"
                                >
                                    <span class="tw-rounded-3xl border text-center tw-text-2xl tw-p-2 tw-w-12 tw-text-gray-400">
                                        +
                                    </span>
                                </span>
                            </label>
                        </div>
                    </div>
                </ProfileItem>
            </v-col>
        </v-row>
    </ContentBox>
</template>
