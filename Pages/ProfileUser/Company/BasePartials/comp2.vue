<template>
    <ContentBox :border="false" :max_w="'max-content'">
<!--        <div class="d-flex justify-space-between tw-items-start">-->
<!--            <div class="d-flex">-->
<!--                <v-select v-model="download" class="tw-w-min-[150px] " :items="['Скачать1', 'Скачать2', 'Скачать3']"/>-->
<!--                <v-select v-model="approve" class="tw-w-min-[150px] tw-ml-4 " :items="['Соглосовать1', 'Соглосовать2', 'Соглосовать3']"/>-->
<!--            </div>-->
<!--            <div>-->
<!--                <v-btn-->
<!--                    color="primary"-->
<!--                    @click="triggerFileInput"-->
<!--                    outlined-->
<!--                >-->
<!--                    <v-icon left>mdi-upload</v-icon>-->
<!--                    Добавить файл-->
<!--                </v-btn>-->
<!--                <input-->
<!--                    ref="fileInput"-->
<!--                    type="file"-->
<!--                    style="display: none"-->
<!--                    @change="onFileSelected"-->
<!--                />-->
<!--            </div>-->
<!--        </div>-->
        <div>
            <BaseConditionTable/>
        </div>
    </ContentBox>
</template>

<script setup>
import BaseConditionTable from "@/Pages/components/BaseConditionTable.vue";
import ContentBox from "@/Pages/components/ContentBox.vue";
import { ref } from "vue";

const download = ref('Скачать');
const approve = ref('Согласовать');
const fileInput = ref(null);
function triggerFileInput() {
    fileInput.value.click();
}

function onFileSelected(event) {
    const files = event.target.files;
    console.log(files);
}
</script>

<style lang="scss" scoped>

</style>
