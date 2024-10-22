<script setup>
import ProfileDocumentBaseLayout from "@/Layouts/ProfileDocumentBaseLayout.vue";
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";

const groupBy = ref([
    {
        key: 'gluten',
    }
]);

const headers = ref([
    { title: 'Документ', key: 'data-table-group' },
    { title: 'Загружен', key: 'calories' },
    { title: 'Статус', key: 'fat' },
]);

const desserts = ref([
    {
        name: 'Анкета ООО "Ромашка".doc',
        calories: '17.05.24 16:05:10',
        fat: 'Проверяется',
        gluten: 'Анкета клиента',
    },
    {
        name: 'Анкета ООО "Ромашка".doc',
        calories: '24.04.24 14:38:56',
        fat: 'Утверждён',
        gluten: 'Анкета клиента',
    },
    {
        name: 'Анкета ООО "Ромашка".doc',
        calories: '24.04.24 14:38:56',
        fat: 'Утверждён',
        gluten: 'Устав',
    },
]);

defineOptions({
    layout: ProfileDocumentBaseLayout
});
</script>

<template>
    <Head><title>Dashboard1</title></Head>
    <div class="tw-pl-4 tw-mt-4">
        <div style="max-width: max-content; min-width: 63.6em;">
            <v-data-table
                :group-by="groupBy"
                :headers="headers"
                :items="desserts"
                item-value="name"
                class="elevation-1 border"
                hide-default-footer
            >
                <!-- Заголовок группы -->
                <template v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }" >
                    <tr>
                        <td :colspan="columns.length" class="tw-font-bold hover:tw-bg-gray-100  cursor-pointer" @click="toggleGroup(item)">
                            <VBtn
                                class="tw-float-end h-100"
                                :icon="isGroupOpen(item) ? '$collapse' : '$expand'"
                                size="small"
                                variant="text"
                            ></VBtn>
                            <div class="tw-flex align-center tw-h-full">
                                {{ item.value }}
                            </div>
                        </td>
                    </tr>
                </template>

                <!-- Элементы внутри группы -->
                <template v-slot:item="{ item }">
                    <tr>
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>{{ item.fat }}</td>
                    </tr>
                </template>
            </v-data-table>
        </div>
    </div>
</template>
