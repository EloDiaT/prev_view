import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import colors from 'vuetify/lib/util/colors'
import theme from './theme'
import defaults from './defaults'

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default createVuetify(
{
    aliases: {
      IconBtn: VBtn,
    },
    defaults,
    iconfont: 'mdi',
    theme,
})
