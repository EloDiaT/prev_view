<template>
    <ProfileItem :title="'Ключевые слова'">
        <v-text-field
            class="tw-text-gray-500"
            v-model="newKeyword"
            @keyup.enter="addKeyword"
        >
            <div @click="keyword.delite(index)"
                 class="tw-bg-gray-300 tw-rounded tw-p-1 tw-text-gray-500"
                 v-for="(keyword, index) in keywords"
                 :key="index">
               <span> {{ keyword }}</span>
               <span
                   @click="keywords.splice(index , 1)"
                   class="tw-ml-5 tw-mr-2 tw-text-xl tw-border tw-border-white cursor-pointer"
               > x </span>
            </div>
        </v-text-field>
    </ProfileItem>
</template>

<script setup>
import { ref } from 'vue'
import ProfileItem from "@/Pages/components/ProfileItem.vue";

const newKeyword = ref('')
const keywords = ref([])

function addKeyword() {
    if (keywords.value.length >= 3) return
    if (newKeyword.value.trim() !== '') {
        keywords.value.push(newKeyword.value.trim())
        newKeyword.value = ''
    }
}

function removeKeyword(index) {
    keywords.value.splice(index, 1)
}
</script>
