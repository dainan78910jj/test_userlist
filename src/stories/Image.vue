<template>
  <img :src="url" :class="classes" :style="style" />
</template>

<script>
import './image.css'
import { reactive, computed } from 'vue'

export default {
  name: 'my-image',

  props: {
    url: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  },

  setup(props) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'storybook-image': true
      })),
      style: computed(() => ({
        height: `${props.size}rem`,
        width: `${props.size}rem`
      }))
    }
  }
}
</script>
