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

//Material Design
// import '@mdi/font/css/materialdesignicons.css' 

//Font Awesome5
import '@fortawesome/fontawesome-free/css/all.css'

//icons
import { aliases, fa } from 'vuetify/iconsets/fa'
//--------------------------------------------------------------

//--------------------------------------------------------------
// Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

//icons
export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    },
  },
})

//mount
createApp(App).use(vuetify).mount('#app')
//--------------------------------------------------------------

