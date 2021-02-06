import Vue from 'vue'
import 'balm-ui/components/button/button.scss'
import 'balm-ui/components/icon-button/icon-button.scss'
import UiButton from 'balm-ui-source/components/button'
import UiIconButton from 'balm-ui-source/components/icon-button'
import vAnchor from 'balm-ui-source/directives/anchor'

Vue.use(UiButton)
Vue.use(UiIconButton)
Vue.directive(vAnchor.name, vAnchor)
