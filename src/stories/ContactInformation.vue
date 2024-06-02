<template>
  <a :class="classes" :href="`mailto:${email}`">{{ email }}</a>
</template>

<script>
import './contactInformation.css'
import { reactive, computed } from 'vue'

export default {
  name: 'my-contact-information',

  props: {
    email: {
      type: String,
      required: true
    }
  },

  setup(props) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        'storybook-link': true
      }))
    }
  }
}
</script>
