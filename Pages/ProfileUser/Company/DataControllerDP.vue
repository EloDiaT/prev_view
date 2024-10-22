<script setup>

import { Head, Link, usePage } from '@inertiajs/vue3';
import ProfileDocumentBaseLayout from "@/Layouts/ProfileDocumentBaseLayout.vue";
import {ref} from "vue";


defineOptions({
    layout: ProfileDocumentBaseLayout
})

const headers = ref([
    { title: 'Документы', value: 'documents' },
    { title: 'Загружен', value: 'uploaded' },
    { title: 'Статус', value: 'status' },
    { title: '', value: 'delete', sortable: false },
    { title: '', value: 'download' },
    { title: '', value: 'tooltip' },
])
let items = ref( [
    { id: 1, documents: 'Регламент платформы', uploaded: '16.03.24 12:14:01', status: 'Требуется моя подпись / Подписан SayPay', error: true },
    { id: 2, documents: 'Договор факторинга', uploaded: '21.03.24 09:10:56', status: 'Документ подписан', error: false },
])
</script>

<template>

    <Head><title>Dashboard1</title></Head>

    <div class="tw-pl-4">
        <div class="tw-mt-4" style="max-width: max-content; min-width: 63.6em;">
            <v-data-table
                :headers="headers"
                :items="items"
                :pagina
                item-value="id"
                hide-default-footer
                :items-per-page="items.length"
                class="elevation-1 border"
            >
                <template v-slot:item.documents="{ item }">
                    <div>
                        <span>{{item.documents}}</span>
                    </div>
                </template>
                <template v-slot:item.uploaded="{ item }">
                    <div>
                        <span>{{item.uploaded}}</span>
                    </div>
                </template>
                <template v-slot:item.status="{ item }">
                    <div>
                        <div v-if="item.error" class="tw-bg-red-600 tw-rounded-full tw-w-[8px] tw-h-[8px] tw-inline-block mr-2"></div>
                        <span>{{item.status}}</span>
                    </div>
                </template>
                <template v-slot:item.delete="{ item }">
                    <v-btn
                        height="20"
                        class="rounded-xl text-white"
                        color="rgb(168 85 247 / 1)"
                    >
                        <span
                            class="tw-text-[10px] tw-font-medium"
                        >
                                <span v-if="item.template !== 'В архиве'">Подписать</span>
                        </span>
                    </v-btn>
                </template>
                <template v-slot:item.download="{ item }">
                    <div class="tw-w-[30px] tw-h-[30px] cursor-pointer  ">
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             viewBox="0 0 50 50" xml:space="preserve">
                            <path fill="rgb(168 85 247 / 1)" d="M11,32.996c-0.553,0-1,0.448-1,1v6.133c0,0.552,0.447,1,1,1h28c0.553,0,1-0.448,1-1v-6.133
                                c0-0.552-0.447-1-1-1s-1,0.448-1,1v5.133H12v-5.133C12,33.444,11.553,32.996,11,32.996z"
                            />
                            <path fill="rgb(168 85 247 / 1)" d="M25,9.129c-0.553,0-1,0.448-1,1v21.51l-6.343-6.127c-0.395-0.384-1.03-0.373-1.413,0.024
                                c-0.384,0.397-0.373,1.03,0.024,1.414l8.023,7.751c0.001,0.001,0.001,0.001,0.002,0.002l0.012,0.011
                                c0.037,0.036,0.084,0.051,0.124,0.08c0.062,0.045,0.12,0.095,0.192,0.124c0.121,0.05,0.249,0.076,0.378,0.076
                                s0.257-0.027,0.378-0.076c0.067-0.027,0.12-0.074,0.178-0.115c0.046-0.031,0.098-0.05,0.139-0.09l8.036-7.765
                                c0.396-0.384,0.407-1.017,0.023-1.414c-0.384-0.397-1.017-0.408-1.414-0.024L26,31.639v-21.51C26,9.577,25.553,9.129,25,9.129z"
                            />
                        </svg>
                    </div>
                </template>
                <template v-slot:item.tooltip="{ item }">
                    <div class="cursor-pointer">
                        <v-tooltip top width="200" text="Перед началом работы необходимо подписать документ">
                            <template v-slot:activator="{ props }">
                                <v-icon dark v-bind="props">
                                    mdi-information
                                </v-icon>
                            </template>
                        </v-tooltip>
                    </div>
                </template>
            </v-data-table>
        </div>
    </div>

</template>
