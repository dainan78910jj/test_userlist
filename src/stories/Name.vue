<template>
  <div :class="classes">{{ fullname }}</div>
</template>

<script>
import './name.css'
import { reactive, computed } from 'vue'

export default {
  name: 'my-name',

  props: {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    }
  },

  setup(props) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        'storybook-name': true
      })),

      fullname: computed(() => `${props.firstname} ${props.lastname}`)
    }
  }
}
</script>
