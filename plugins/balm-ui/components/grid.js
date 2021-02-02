import 'balm-ui/components/grid/grid.css'
import Vue from 'vue'
import UiGridComponents from 'balm-ui-source/components/grid'
import $grid from 'balm-ui/plugins/grid' // Optional

Vue.use(UiGridComponents, {
  // Optional. Overwrite `<ui-grid>` props with default value.
  UiGrid: {
    // some props
  },
})
Vue.use($grid) // Optional
