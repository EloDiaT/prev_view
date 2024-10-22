<template>
    <v-data-table
        :headers="headers"
        :items="items"
        item-value="id"
        hide-default-footer
        class="elevation-1 border"
    >
        <template v-slot:item.сheck="{ item }">
            <div>
                <span v-if="item.status === 'Good'" class="tw-opacity-70">
                    <span class="tw-inline-block tw-bg-green-700 rounded-circle tw-w-2 tw-h-2 tw-mr-2" />
                    <span>Утверждено SayPay</span>
                </span>
                <span v-else-if="item.status === 'Error'">
                    <span class="tw-inline-block tw-bg-red-700 rounded-circle tw-w-2 tw-h-2 tw-mr-2" />
                    Документ отклонён
                </span>
                <span v-else-if="item.status === 'Checked'">
                    <span class="tw-inline-block tw-bg-gray-300 rounded-circle tw-w-2 tw-h-2 tw-mr-2" />
                    Проверка
                </span>
                <span v-else>
                    <span class="tw-inline-block tw-bg-yellow-400 rounded-circle tw-w-2 tw-h-2 tw-mr-2" />
                    Требуется проверка
                </span>
            </div>
        </template>
        <template v-slot:item.delete="{ item }">
            <div >
                <v-btn
                    :color="item.status === 'Good' || item.status === 'Error' || item.status === 'Checked' ? '' : 'rgb(168 85 247 / 1)'"
                    :disabled="item.status === 'Good' || item.status === 'Error' || item.status === 'Checked'"
                    height="20"
                    class="rounded-xl">
                    <span
                        :class="{'tw-text-white': !(item.status === 'Good' || item.status === 'Error' || item.status === 'Checked')}"
                        class="tw-text-[10px] tw-font-medium">
                        <span v-if="item.template !== 'В архиве'">Утвердить</span>
                        <span v-else>Восстановить</span>
                    </span>
                </v-btn>
            </div>

        </template>
        <template v-slot:item.trade="{ item }">
            <div>
                <v-btn :color="item.status !== 'Good' ? '' : 'rgb(168 85 247 / 1)'"  :disabled="item.status !== 'Good'" height="20" class="rounded-xl">
                    <span class="tw-text-[10px] " :class="{'tw-text-white': item.status === 'Good'}">
                         Создать сделку
                    </span>
               </v-btn>
            </div>
        </template>
        <template v-slot:item.dash="{ item }">
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
                        v-for="item in status_pattern(item.status)"
                        :key="item.id"
                        :disabled="item.disabled"
                        @click="selectItem(item)"
                    >
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
    </v-data-table>
</template>

<script setup>
import { ref } from 'vue'

const selectedOption = ref(null)


const headers = ref([
    { title: 'Документы', value: 'documents' },
    { title: 'Загружен', value: 'uploaded' },
    { title: 'Тип', value: 'type' },
    { title: 'Статус', value: 'status' },
    { title: 'Проверка', value: 'сheck' },
    { title: '', value: 'delete', sortable: false },
    { title: '', value: 'trade' },
    { title: '', value: 'dash' },
])
let items = ref( [
    { id: 1, documents: 'Оферта №367', uploaded: '15.04.24', type: 'Рамочный договор', template: 'Доступен', status: 'Good', canDelete: false },
    { id: 2, documents: 'Оферта №365', uploaded: '15.04.24', type: 'Рамочный договор', template: 'Доступен', status: 'Error', canDelete: true },
    { id: 3, documents: 'Оферта №366', uploaded: '15.04.24', type: 'Рамочный договор', template: 'Доступен', status: 'Checked', canDelete: false },
    { id: 4, documents: 'Оферта №364', uploaded: '15.04.24', type: 'Разовая оферта', template: 'Доступен', status: 'Good',canDelete: true},
    { id: 5, documents: 'Оферта №363', uploaded: '15.04.24', type: 'Разовая оферта', template: 'Доступен', status: '', canDelete: true },
    { id: 6, documents: 'Оферта №362', uploaded: '15.04.24', type: 'Разовая оферта', template: 'В архиве', status: 'Archive', canDelete: false },
])
function status_pattern (item) {
    const result = []
    switch (item) {
        case 'Good':
            result.push(...[1,3,4,5,6])
            break
        case 'Error':
            result.push(...[1,4,6])
            break
        case 'Checked':
            break
        case 'Archive':
            result.push(...[1,4,5,6])
            break
        default:
            result.push(...[1,2,4,6])
            break
    }
    return [
        { id: 1, name: 'Открыть', disabled: !result.includes(1) },
        { id: 2, name: 'Утвердить', disabled: !result.includes(2) },
        { id: 3, name: 'Создать сделку', disabled: !result.includes(3) },
        { id: 4, name: 'Скачать', disabled: !result.includes(4) },
        { id: 5, name: 'В архив', disabled: !result.includes(5) },
        { id: 6, name: 'Удалить', disabled: !result.includes(6) }
    ]
}
function selectItem(item) {
    if (!item.disabled) {
        selectedOption.value = item;
    }
}
</script>

<style lang="scss" scoped>

</style>
