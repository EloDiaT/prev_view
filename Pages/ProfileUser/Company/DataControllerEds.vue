<script setup>
import ProfilePageLayout from "@/Layouts/ProfilePageLayout.vue";
import ProfileItem from "@/Pages/components/ProfileItem.vue";
import {ref} from "vue";

const def_eds = ref([
    {
        company: 'ООО Компания "Василёк"',
        subject: '********************************************',
        supplier: '********************************************',
        valid: 'с 01.10.2023 по 30.09.2024'
    },
    {
        company: 'ООО Компания "Ромашка"',
        subject: '********************************************',
        supplier: '********************************************',
        valid: 'с 01.08.2023 по 31.07.2024'
    }
])
</script>

<template>
    <ProfilePageLayout>
        <v-main >
            <div class="pl-4 tw-max-w-[1150px]" >
                <div class="tw-font-bold tw-text-2xl">Настройка электронно цифровой подписи</div>
                <v-alert closable color="#FDCCCC" class="mt-6 ">
                    Приложение для настройки электронной подписи не установленно. <br>
                    Установите приложение по <a class="text-black" href="#"> ссылке </a>
                </v-alert>
                <v-alert closable color="#FDCCCC" class="mt-6 ">
                    <template v-slot:title >
                        <div class="mb-4">Эцп не подключена</div>
                    </template>
                    Подключите электронно цифровую подпись для обеспечения максимальной защищённости административного аккаунта ващей компании.
                    <br>
                    Подробней - в разделе <a href="#" class="text-black">Помошь</a>.
                </v-alert>
                <div class="mt-6">
                    <div>Выберите сертификат для входа</div>
                    <div>
                        <ProfileItem
                            v-for="(item, index) in def_eds"
                            :key="index"
                            :title_slot="true"
                            :width="50"
                        >
                            <template v-slot:title>
                                <v-radio/>
                            </template>
                            <div class="border tw-max-w-[500px]">
                                <div class="tw-p-2 border-b">
                                    {{item.company}}
                                </div>
                                <div class="border-b tw-grid tw-grid-cols-[130px,1fr] tw-gap-4 tw-p-2">
                                    <div>Субъект</div>
                                    <div> {{item.subject}}</div>
                                </div>
                                <div class="border-b tw-grid tw-grid-cols-[130px,1fr] tw-gap-4 tw-p-2">
                                    <div>Поставщик</div>
                                    <div>{{item.supplier}}</div>
                                </div>
                                <div class="tw-grid tw-grid-cols-[130px,1fr] tw-gap-4 tw-p-2">
                                    <div>Действителен</div>
                                    <div>{{item.valid}}</div>
                                </div>
                            </div>
                        </ProfileItem>
                        <div class="mt-4 tw-max-w-[550px] tw-flex align-end justify-end tw-w-full">
                            <v-btn color="purple" class="tw-float-left ">
                                подключить
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </v-main>
    </ProfilePageLayout>
</template>
