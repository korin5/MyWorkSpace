
//--------------------------------------------------------------
// Vue全家桶
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
import './plugins/vuetify'
const vuetify = createVuetify({
  components,
  directives,
})

//--------------------------------------------------------------
// icons
//--------------------------------------------------------------
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)


//--------------------------------------------------------------
// use & mount
//--------------------------------------------------------------
app.use(vuetify)
app.use(router)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
