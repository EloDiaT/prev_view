<template>
    <ContentBox :border="false">
        <v-row>
            <v-col>
                <div>
                    <div>
                        <h2>Реквизиты юридического лица</h2>
                    </div>
                    <div class="mt-4 tw-w-full">
                        <div
                            class="border tw-grid tw-p-3 tw-grid-cols-[250px,auto] tw-items-center"
                            v-for="(item, index) in requisites_legal"
                            :key="index"
                        >
                            <div class="tw-text-gray-500">{{ item.title }}</div>
                            <div class="tw-font-bold">{{ item.text }}</div>
                        </div>
                        <div class="mt-4">
                            <div
                                class="border tw-grid tw-p-3 tw-grid-cols-[250px,auto] tw-items-center"
                                v-for="(item, index) in requisites_legal_boss"
                                :key="index"
                            >
                                <div class="tw-text-gray-500">{{ item.title }}</div>
                                <div class="tw-font-bold">{{ item.text }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <div>
                        <h2>Выберите банковские реквизиты</h2>
                    </div>
                    <ProfileItem
                        v-for="(item, index) in requisites_bank"
                        :key="index"
                        :title_slot="true"
                        :width="450"
                    >
                        <template v-slot:title>
                            <v-radio label="Использовать по умолчанию"/>
                        </template>
                        <div class="tw-flex tw-items-start tw-relative">
                            <div class="tw-w-full">
                                <div
                                    v-for="(element, index_e) in item"
                                    :key="index_e"
                                    class="border tw-grid tw-p-3 tw-grid-cols-[80px,auto] tw-items-center tw-w-full"
                                >
                                    <div class="tw-text-gray-500">{{ element.title }}</div>
                                    <input
                                        class="tw-font-bold tw-outline-0"
                                        :readonly="false"
                                        v-model="element.text"
                                        :value="element.text"
                                    >
                                </div>
                            </div>
                            <div class="ml-2 tw-absolute tw-right-[-40px]" @click="new_requisites(false, index)">
                                <div class="cursor-pointer" >
                                    <svg width="25px" height="25px" viewBox="0 0 15 15" version="1.1" id="waste-basket" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.41,5.58l-1.34,8c-0.0433,0.2368-0.2493,0.4091-0.49,0.41H4.42c-0.2407-0.0009-0.4467-0.1732-0.49-0.41l-1.34-8&#xA;&#x9;C2.5458,5.3074,2.731,5.0506,3.0035,5.0064C3.0288,5.0023,3.0544,5.0002,3.08,5h8.83c0.2761-0.0036,0.5028,0.2174,0.5064,0.4935&#xA;&#x9;C12.4168,5.5225,12.4146,5.5514,12.41,5.58z M13,3.5C13,3.7761,12.7761,4,12.5,4h-10C2.2239,4,2,3.7761,2,3.5S2.2239,3,2.5,3H5V1.5&#xA;&#x9;C5,1.2239,5.2239,1,5.5,1h4C9.7761,1,10,1.2239,10,1.5V3h2.5C12.7761,3,13,3.2239,13,3.5z M9,3V2H6v1H9z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </ProfileItem>
                    <div class="tw-flex  tw-flex-col tw-items-end">
                        <div
                            @click="new_requisites(true)"
                            class="d-flex tw-items-center tw-mt-4 tw-text-purple-400 cursor-pointer"
                        >
                            <span class=" tw-flex">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12.5 5.5C13.0523 5.5 13.5 5.94772 13.5 6.5V10.5H17.5C18.0523 10.5 18.5 10.9477 18.5 11.5V12.5C18.5 13.0523 18.0523 13.5 17.5 13.5H13.5V17.5C13.5 18.0523 13.0523 18.5 12.5 18.5H11.5C10.9477 18.5 10.5 18.0523 10.5 17.5V13.5H6.5C5.94772 13.5 5.5 13.0523 5.5 12.5V11.5C5.5 10.9477 5.94772 10.5 6.5 10.5H10.5V6.5C10.5 5.94772 10.9477 5.5 11.5 5.5H12.5Z" fill="rgb(192 132 252 / 1)"/>
                                </svg>
                            </span>
                            <span class="tw-ml-1">Добавить реквизиты</span>
                        </div>
                        <div class="mt-10">
                            <div class=" tw-cursor-pointer tw-p-2 tw-bg-purple-500 tw-w-[200px] tw-flex tw-items-center tw-justify-center tw-text-white tw-rounded">
                                Сохранить изменения
                            </div>
                        </div>
                    </div>

                </div>
            </v-col>
        </v-row>
    </ContentBox>
</template>

<script setup>
import ContentBox from "@/Pages/components/ContentBox.vue";
import ProfileItem from "@/Pages/components/ProfileItem.vue";
import {ref} from "vue";

const requisites_bank = ref([
    [
        { title: 'Р/c', text: '00000000' },
        { title: 'БИК', text: '000000' },
        { title: 'Банк', text: 'ПАО "Банк 1"' },
        { title: 'К/с', text: '0000000' }
    ],
    [
        { title: 'Р/c', text: '0000000000' },
        { title: 'БИК', text: '000000' },
        { title: 'Банк', text: 'ПАО "Банк 2"' },
        { title: 'К/с', text: '00000000' }
    ],
])

const requisites_legal = ref([
    { title: 'Полное наименование', text: 'ООО "МеталлопрокатСтройИнвестПромСнаб"' },
    { title: 'Краткое наименование', text: 'ООО "МСИПС"' },
    { title: 'ИНН', text: '00000000' },
    { title: 'КПП', text: '00000000' },
    { title: 'ОГРН', text: '00000000' },
    { title: 'Юридический адрес', text: '000000, г. Москва, г. Зеленоград, ул. Миклухо-Маклая, д.1, стр. 8, офис 14' },
    { title: 'Почтовый адрес', text: '00000, г. Москва, г. Зеленоград, ул. Миклухо-Маклая, д.1, стр. 8, офис 14' }
])

const requisites_legal_boss = ref([
    { title: 'Должность руководителя', text: 'Генеральный директор' },
    { title: 'ФИО руководителя', text: 'Нарофоминский Зайнетдин Хасбулатович' },
    { title: 'Действует на основании', text: 'Устава' }
])

const new_requisites = (key, index) => {
    if (key) {
        requisites_bank.value.push([
            { title: 'Р/c', text: '' },
            { title: 'БИК', text: '' },
            { title: 'Банк', text: '' },
            { title: 'К/с', text: '' }
        ])
    } else {
        requisites_bank.value.splice(index, 1)
    }

}
</script>

<style lang="scss" scoped>

</style>
