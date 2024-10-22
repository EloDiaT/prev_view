<script setup>
import CounterpartiesBaseLayout from "@/Layouts/CounterpartiesBaseLayout.vue";
import ProfileBaseCreditLayout from "@/Layouts/ProfileBaseCreditLayout.vue";
import {inject, ref} from "vue";

defineOptions({
    layout: CounterpartiesBaseLayout
})

const headers = ref([
    { title: 'Организация', value: 'organization' },
    { title: 'Инн', value: 'inn' },
    { title: 'Сделки', value: 'transactions', sortable: false },
    { title: 'ИТР', value: 'itr', sortable: false },
    { title: 'Рейтинг', value: 'rating', sortable: false },
    { title: 'Группа', value: 'group', sortable: false },
    { title: '', value: 'mail', sortable: false },
    { title: '', value: 'create', sortable: false },
    { title: '', value: 'menu', sortable: false },
])
let items = ref( [
    {
        id: 1,
        organization: 'ООО "ТяжМетБытХим"',
        inn: '00000',
        transactions: '14',
        itr: 'A2',
        rating: '4,2',
        group: 'Поставщик',
    },
    {
        id: 2,
        organization: 'ПАО "Дальневосточный банк развития"',
        inn: '00000',
        transactions: '187',
        itr: 'A0',
        rating: '4,6',
        group: 'Покупатель',
    },
    {
        id: 3,
        organization: 'ООО "Порешатор-2"',
        inn: '000000',
        transactions: '1',
        itr: 'С2',
        rating: '3,7',
        group: 'Поставщик',
    }
])
const menu = ref([
    { name: 'Написать' },
    { name: 'Предложить оферту' },
    { name: 'Запросить оферту' },
    { name: 'Назначить в группу',
        group: [
            { name: 'Поставщик' },
            { name: 'Покупатель' },
        ]
    },
    { name: 'Разорвать связь' },
    { name: 'Удалить контр агента' },
    { name: 'Заблокировать' },
])
const search = inject('search')
</script>
<template>
    <div class="tw-mt-4" style="max-width: max-content; min-width: 63.6em;">
        <v-data-table
            :headers="headers"
            :items="items"
            :pagina
            item-value="id"
            :search="String(search)"
            hide-default-footer
            :items-per-page="items.length"
            class="elevation-1 border"
        >
            <template v-slot:header.itr>
                <div class="position-relative">
                    <div>ИТР</div>
                    <div class="position-absolute" style="top: -15px; right: 0;">
                        <v-tooltip top width="200" >
                            <template v-slot:activator="{ props }">
                                <v-icon dark v-bind="props" size="15" class="cursor-pointer">
                                    mdi-information
                                </v-icon>
                            </template>
                            <template v-slot:default>
                                Здесь объясняется, <br> что такое ИТР. <br> И как оно присваевается.
                            </template>
                        </v-tooltip>
                    </div>
                </div>
            </template>
            <template v-slot:item.organization="{ item }">
                <div>
                    {{item.organization}}
                </div>
            </template>
            <template v-slot:item.inn="{ item }">
                <div>
                    {{item.inn}}
                </div>
            </template>
            <template v-slot:item.transactions="{ item }">
                <div>
                    {{item.transactions}}
                </div>
            </template>
            <template v-slot:item.itr="{ item }">
                <div class="tw-w-max text-center rounded" :style="{'backgroundColor': item.itr[0] === 'A' ? '#BDEDCB' : '#FDCCCC'}">
                    <div class="pl-2 pr-2">
                        {{item.itr}}
                    </div>
                </div>
            </template>
            <template v-slot:item.rating="{ item }">
                <div class="tw-w-max text-center rounded" :style="{'backgroundColor': item.itr[0] === 'A' ? '#BDEDCB' : '#F6E4B0'}">
                    <div class="pl-2 pr-2">
                        {{item.rating}}
                    </div>
                </div>
            </template>
            <template v-slot:item.group="{ item }">
                <div>
                    {{item.group}}
                </div>
            </template>
            <template v-slot:item.mail="{ item }">
                <v-icon icon="$vuetify"/>
            </template>
            <template v-slot:item.create="{ item }">
                <div class="rounded-xl pt-1 pb-1 pl-2 pr-2 bg-purple-accent-4 border d-flex align-center justify-center cursor-pointer">
                    Создать сделку
                </div>
            </template>
            <template v-slot:item.menu="{ item }">
                <v-menu offset-y :disabled="item.status === 'Checked'">
                    <template v-slot:activator="{ props }">
                        <div v-bind="props" class="cursor-pointer">
                            <div v-for="item in 3" :key="item" :class="[
                         item.status === 'Checked' ? 'tw-bg-gray-600' : 'tw-bg-purple-500',
                         'tw-mb-0.5 rounded-circle tw-w-1 tw-h-1 tw-mr-1']"/>
                        </div>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, id) in menu"
                            :key="id"
                        >

                            <v-list-item-title class="cursor-pointer">
                               <div v-if="!item.group">
                                    {{ item.name }}
                               </div>
                                <div v-else>
                                    {{ item.name }}
                                    <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
                                    <v-menu activator="parent" location="right"  :open-on-focus="false" open-on-hover submenu>
                                        <v-list>
                                            <v-list-item v-for="(i, k) in item.group" :key="k" link>
                                                <v-list-item-title>{{i.name}}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-data-table>
    </div>
</template>
