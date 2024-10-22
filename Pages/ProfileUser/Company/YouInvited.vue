<script setup>
import CounterpartiesBaseLayout from "@/Layouts/CounterpartiesBaseLayout.vue";
import {inject, ref} from "vue";

defineOptions({
    layout: CounterpartiesBaseLayout
})

const headers = ref([
    { title: 'Организация', value: 'organization' },
    { title: 'Инн', value: 'inn' },
    { title: 'Действия', value: 'actions', sortable: false },
])
let items = ref( [
    {
        id: 1,
        organization: 'ООО "ТяжМетБытХим"',
        inn: '0000000',
    },
    {
        id: 2,
        organization: 'ПАО "Дальневосточный банк развития"',
        inn: '00000000',
    },
    {
        id: 3,
        organization: 'ООО "Порешатор-2"',
        inn: '00000000',
    }
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
            <template v-slot:item.actions="{ item }">
                <div class="tw-flex tw-items-center justify-space-between">
                    <div>y</div>
                    <div>n</div>
                    <div>d</div>
                </div>
            </template>
        </v-data-table>
    </div>
</template>
