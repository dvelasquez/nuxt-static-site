<template>
  <!-- Container -->
  <nuxt-link :to="to" :class="className">
    <div class="mdc-button__ripple"></div>
    <!-- Icon (optional) -->
    <slot name="before" :iconClass="UI_BUTTON.cssClasses.icon">
      <i
        v-if="materialIcon"
        :class="getIconClassName(UI_BUTTON.cssClasses.icon)"
        aria-hidden="true"
        v-text="materialIcon"
      ></i>
    </slot>
    <!-- Text label -->
    <span :class="UI_BUTTON.cssClasses.label">
      <slot></slot>
    </span>
    <!-- Icon (optional) -->
    <slot name="after" :iconClass="UI_BUTTON.cssClasses.icon"></slot>
  </nuxt-link>
</template>

<script>
import buttonMixin from 'balm-ui-source/mixins/button'
import cardActionMixin from 'balm-ui-source/mixins/card-action'
// Define button constants
const UI_LINK = {
  TYPES: {
    text: 0,
    outlined: 1,
    raised: 2,
    unelevated: 3,
  },
  cssClasses: {
    icon: 'mdc-button__icon',
    label: 'mdc-button__label',
    touch: 'mdc-button--touch',
  },
}
export default {
  name: 'UiLink',
  mixins: [buttonMixin, cardActionMixin],
  props: {
    // UI variants
    to: {
      type: String,
      required: true,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    raised: {
      type: Boolean,
      default: false,
    },
    unelevated: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      UI_BUTTON: UI_LINK,
    }
  },
  computed: {
    isOutlined() {
      return this.checkType(UI_LINK.TYPES, 'outlined')
    },
    isRaised() {
      return this.checkType(UI_LINK.TYPES, 'raised')
    },
    isUnelevated() {
      return this.checkType(UI_LINK.TYPES, 'unelevated')
    },
    className() {
      const isAccessible =
        this.$el && this.$el.classList.contains(UI_LINK.cssClasses.touch)
      return [
        {
          // Text button
          'mdc-button': true,
          // Outlined button
          'mdc-button--outlined': this.isOutlined,
          // Contained button
          'mdc-button--raised': this.isRaised,
          'mdc-button--unelevated': this.isUnelevated,
          // Accessibility
          'mdc-button--touch': isAccessible,
        },
        this.cardActionClassName,
      ]
    },
  },
}
</script>
