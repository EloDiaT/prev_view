<template>
    <ProfilePageLayout>
        <v-main>
            <div class="pl-4">
                <v-list density="compact" class="d-flex ">
                    <v-list-item
                        :min-height="'auto'"
                        :class="[ ($page.url === ($page.props.prefix + item.href)) ? 'bg-white' : 'tw-opacity-50 bg-grey-lighten-1 hover:bg-white'] "
                        class="border-b pt-0 pb-0 rounded-t-lg cursor-pointer"
                        v-for="(item, key) in data_list"
                        :key="key">
                        <Link
                            class="text-decoration-none tw-text-black tw-text-l"
                            :href="$page.props.prefix + item.href"
                        >
                            {{ item.value }}
                        </Link>
                    </v-list-item>
                </v-list>
                <div class="mt-6">
                    <v-text-field
                        class="tw-max-w-[400px]"
                        v-model="search"
                        label="Поиск по названию или инн"
                        prepend-inner-icon="mdi-magnify"
                        variant="outlined"
                        hide-details
                        single-line
                    />
                </div>
            </div>
            <div class="tw-max-w-[896px] ml-4">
                <slot/>
            </div>
        </v-main>
    </ProfilePageLayout>
</template>
<script setup>
import ProfilePageLayout from "@/Layouts/ProfilePageLayout.vue";
import {Link} from "@inertiajs/vue3";
import {provide, ref} from "vue";

defineOptions({
    Layout: ProfilePageLayout
})
const data_list = [
    { value: 'Контрагенты', href: '/my_counterparties' },
    { value: 'Вас приглашают', href: '/you_invited' },
    { value: 'Ваши запросы', href: '/#' },
    { value: 'Заблокированные', href: '/#' },
    { value: 'Закладки', href: '/#' }
]
const search = ref('')
provide('search', search)
</script>
