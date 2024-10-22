<script setup>
import ProfileBaseCreditLayout from '@/Layouts/ProfileBaseCreditLayout.vue'
import {ref} from "vue";
import InputLabel from "@/Components/FormElements/InputLabel.vue";

defineOptions(
    {
        layout: ProfileBaseCreditLayout
    })

const info_credit = ref([
    [
        { title: 'Кредитный лимит', value: '1 000 000 000 руб.', marker: false },
        { title: 'Дата присвоения', value: '16.03.2024', marker: false },
        { title: 'Действителн до', value: '15.03.2025', marker: false }
    ],
    [
        { title: 'Кредитный рейтинг (ИТР)', value: 'A2', marker: true },
        { title: 'Дата присвоения', value: '16.03.2024', marker: false },
        { title: 'Действителн до', value: '15.03.2025', marker: false }
    ]
])
const finans = ref([
    { title: 'Свободный остаток', value: '0 руб.', marker: false },
    { title: 'Захолдировано средств', value: '0 руб.', marker: false },
    { title: 'Текущая задолжность', value: '0 руб.', marker: false },
    { title: 'Просроченая зодолженность', value: '0 руб.', marker: false },
    { title: 'Пени и штрафы', value: '0 руб.', marker: false }
])
const search = ref('')
const header = ref([
    { title: 'Документы', key: 'document' },
    { title: 'Загружен', key: 'load' },
    { title: '', key: 'download' },
])
const selected = ref([])
let items = ref([
    {
        name: '1',
        document: 'Готовой отчёт 2023',
        load: '00.00.00 00.00.00',
        download: 'Скачать'
    },
    {
        name: '2',
        document: 'Баланс 2023',
        load: '00.00.00 00.00.00',
        download: 'Скачать'
    }
])
const deleteItem = () => {
    const selectedSet = new Set(selected.value);
    items.value = items.value.filter(item => !selectedSet.has(item.name));
}
</script>

<template>
    <div class="mt-6">
        <div>
            <div class="tw-grid tw-gap-3 tw-grid-cols-2 tw-justify-between">
                <div class="border rounded tw-flex tw-flex-col tw-justify-between" v-for="(element, key_element) in info_credit" :key="key_element">
                    <div v-for="(item, key) in element" :key="key" class="tw-grid tw-grid-cols-2 align-center border-b tw-p-3 ">
                        <div class="tw-text-gray-400">{{item.title}}</div>
                        <div :class="[{'text-black bg-green rounded tw-p-1 tw-w-max': item.marker}, 'ml-6']" >{{item.value}}</div>
                    </div>
                </div>
            </div>
            <div class="d-flex align-center justify-space-between tw-max-w-[255px] mt-6">
                <v-icon
                    icon="mdi-checkbox-marked-circle"
                    end
                ></v-icon>
                <v-dialog max-width="max-content">
                    <template v-slot:activator="{ props: activatorProps }">
                        <div class="cursor-pointer" v-bind="activatorProps">Рассчитать кредитный лимит</div>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card title="Выберите документ" class="pt-6 pl-6 pr-6 pb-6 position-relative" >
                            <div
                                class="position-absolute cursor-pointer"
                                style="right: 0; top: 0; padding: 24px"
                                @click="isActive.value = false"
                            >
                                <v-icon icon="$vuetify"></v-icon>
                            </div>
                            <v-card-text class="mt-8">
                                <div>
                                    <div>
                                        <ul class="tw-list-none tw-grid tw-gap-3 tw-grid-cols-[repeat(6,max-content)]">
                                            <li class="cursor-pointer tw-text-violet-300 tw-underline">Отчётность</li>
                                            <li class="cursor-pointer tw-text-gray-400">ОСВ Сводные</li>
                                            <li class="cursor-pointer tw-text-gray-400">ОСВ по контрагентам </li>
                                            <li class="cursor-pointer tw-text-gray-400">ОСВ по запасам</li>
                                            <li class="cursor-pointer tw-text-gray-400">Карточки</li>
                                            <li class="cursor-pointer tw-text-gray-400">Банковские выписки</li>
                                        </ul>
                                    </div>
                                    <div class="mt-8">
                                        <div class="tw-flex align-center justify-space-between">
                                            <v-text-field
                                                class="tw-max-w-[400px]"
                                                v-model="search"
                                                label="Search"
                                                prepend-inner-icon="mdi-magnify"
                                                variant="outlined"
                                                hide-details
                                                single-line
                                            />
                                            <div class="tw-flex align-center justify-space-between">
                                                <div>Выбрано: {{selected.length}}</div>
                                                <div class="text-red cursor-pointer ml-6" @click="deleteItem">
                                                    <v-icon icon="$vuetify"/> Удалить
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border mt-6 rounded">
                                            <v-data-table
                                                :headers="header"
                                                v-model="selected"
                                                :items="items"
                                                item-value="name"
                                                :search="search"
                                                show-select
                                            >
                                                <template v-slot:item.download="{ item }">
                                                   <a href="#">
                                                       <v-icon icon="$vuetify"/>
                                                       {{ item.download }}
                                                   </a>
                                                </template>
                                            </v-data-table>
                                        </div>
                                        <div class="mt-4 w-100 d-flex justify-end align-center">
                                            <label for="file_modal_credit" class="cursor-pointer">
                                                <v-icon :icon="'$vuetify'"/>
                                                <span class="ml-2">Загрузить документ</span>
                                                <input hidden type="file" id="file_modal_credit" name="file_modal_credit">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </template>
                </v-dialog>
            </div>
        </div>
        <div class="mt-8">
            <div class="tw-text-black tw-font-bold tw-text-l">Текущие финансовые покозатели</div>
            <div class="border rounded tw-max-w-[600px] mt-4">
                <div class="tw-flex tw-flex-col tw-justify-between" v-for="(element, key_element) in finans" :key="key_element">
                    <div class="tw-grid tw-grid-cols-2 tw-justify-between align-center border-b tw-p-3 ">
                        <div class="tw-text-gray-400">{{element.title}}</div>
                        <div :class="[{'text-black bg-green rounded tw-p-1 tw-w-max': element.marker}, 'ml-6 tw-place-self-end']" >{{element.value}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

