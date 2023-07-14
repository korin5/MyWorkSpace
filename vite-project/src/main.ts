
//--------------------------------------------------------------
// Vue
//--------------------------------------------------------------
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router'
const app = createApp(App)
const pinia = createPinia()

//--------------------------------------------------------------
// Vuetify
//--------------------------------------------------------------
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
})

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css'
import { aliases,mdi } from 'vuetify/iconsets/mdi'
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

//--------------------------------------------------------------
// Another Icons
//--------------------------------------------------------------
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

//--------------------------------------------------------------
// use & mount
//--------------------------------------------------------------
app.use(vuetify)
app.use(router)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
