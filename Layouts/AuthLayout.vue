<template>
    <v-container class="fill-height tw-min-h-screen tw-bg-gray-100" fluid >
        <v-row class="justify-center align-center">
            <v-col cols="12" md="6" lg="5">
                <div>
                    <slot name="logo" />
                </div>
                <slot />
            </v-col>
        </v-row>
    </v-container>
</template>
