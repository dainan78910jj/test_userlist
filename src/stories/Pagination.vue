<template>
  <div class="storybook-pagination">
    <my-button
      v-for="page in pageList"
      :label="page.label"
      :primary="page.isPrimary"
      @click="$emit('setPage', page.pageNumber)"
    />
  </div>
</template>

<script>
import './pagination.css'
import MyButton from './Button.vue'
import { reactive, computed } from 'vue'

export default {
  name: 'my-pagination',

  components: { MyButton },

  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },

  emits: ['setPage'],

  setup(props) {
    props = reactive(props)
    return {
      pageList: computed(() => {
        const arr = []
        for (let i = 1; i <= props.totalPages; i++) {
          arr.push({
            pageNumber: i,
            label: `${i}`,
            isPrimary: i === props.currentPage
          })
        }
        return arr
      })
    }
  }
}
</script>
