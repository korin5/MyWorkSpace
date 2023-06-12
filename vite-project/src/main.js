//--------------------------------------------------------------
//import
//--------------------------------------------------------------
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//icon
import '@mdi/font/css/materialdesignicons.css'

//vuelidate
import Vuelidate from 'vuelidate'
//--------------------------------------------------------------

//--------------------------------------------------------------
// Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

//icon
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
})

//mount
createApp(App).use(vuetify).mount('#app')
createApp(App).use(Vuelidate)
//--------------------------------------------------------------