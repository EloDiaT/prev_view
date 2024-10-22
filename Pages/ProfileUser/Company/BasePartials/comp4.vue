<template>
  <ContentBox :border="false">
      <v-row>
          <v-col>
              <div class="d-flex align-center justify-space-between">
                  <h2> Адресс склада для самовывоза </h2>
                  <div v-if="this.$page.url === $page.props.prefix + '/warehouse/editing'" :class="[toggle ? 'tw-bg-blue-200' : 'tw-bg-gray-200' , 'tw-h-[20px] tw-w-[35px] rounded-xl tw-p-[2px] border cursor-pointer tw-transition ']" @click="toggle = !toggle">
                      <div :class="[{'ml-auto': toggle}, 'tw-transition tw-h-full tw-w-[14px] rounded-circle tw-bg-white ']"/>
                  </div>
              </div>
              <div class="tw-mt-8">
                <slot>
                    <v-table>
                        <thead class="tw-mb-4 tw-bg-gray-100">
                            <tr>
                                <th class="text-left border-s border-t tw-font-semibold tw-text-black">
                                    №
                                </th>
                                <th class="text-left border-t tw-font-semibold tw-text-black">
                                    Адресс
                                </th>
                                <th class="text-left border-t tw-font-semibold tw-text-black">
                                    Изменен
                                </th>
                                <th class="text-left border-t tw-font-semibold tw-text-black">
                                    Доступен
                                </th>
                                <th class="text-left border-t border-e tw-font-semibold tw-text-black">
                                    Настройки
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  class="cursor-pointer hover:tw-bg-blue-100 tw-transition" v-for="(item, key) in warehouse_list" :key="key">
                                <td v-for="(element, eKey) in item.date" :key="eKey">
                                    <Link  :href="$page.props.prefix + item.href" class="text-decoration-none tw-text-black tw-w-full d-block">
                                        {{ (typeof element === "boolean") ? element ? 'Да' : 'Нет' : element}}
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </slot>
              </div>
          </v-col>
      </v-row>
  </ContentBox>
</template>

<script setup>
import ContentBox from "@/Pages/components/ContentBox.vue";
import {ref} from "vue";
import {Link} from "@inertiajs/vue3";

const toggle = ref(true)
const warehouse_list = ref([
    {
        href: '/warehouse/editing',
        date: {
            number: 1, address: 'Лип. Область, г. Липецк, ул. Юбилейная, д.45', replace: '23.05.2024', available: true, setting: '!@#',
        }
    },
    {
        href: '/warehouse/editing',
        date: {
            number: 2, address: 'Лип. Область, г. Липецк, ул. Юбилейная, д.45', replace: '23.05.2024', available: true, setting: '!@#',
        }
    }
])

</script>

<style lang="scss" scoped>

</style>
