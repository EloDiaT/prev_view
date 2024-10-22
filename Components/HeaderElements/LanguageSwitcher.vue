<script setup>

    import { languages, GetTranslate } from '@core/utils/GetTranslate'

    const props = defineProps(
    {
        locale: String
    });

</script>

<template>
    <v-avatar
        class="cursor-pointer mr-2"
        color="primary"
        variant="tonal"
    >
        {{ locale }}

        <!-- SECTION Menu -->
        <v-menu
            activator="parent"
            width="100"
            location="bottom end"
            offset="14px"
        >
            <v-list>
                <template v-for="(item, i) in languages">
                    <v-list-item link class="h-100 ma-0" @click="$inertia.get(route('language', item.lang))">
                        <v-list-item-title>{{ GetTranslate($page, '', item.name) }}</v-list-item-title>
                    </v-list-item>
                </template>
            </v-list>
        </v-menu>
    </v-avatar>
</template>
