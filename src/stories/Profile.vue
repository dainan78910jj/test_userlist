<template>
  <div class="storybook-profile">
    <my-image :url="user.avatar" :size="4" />
    <div class="storybook-profile-info">
      <my-name :firstname="user.first_name" :lastname="user.last_name" />
      <my-contact-information :email="user.email" />
    </div>
  </div>
</template>

<script>
import './profile.css'
import MyImage from './Image.vue'
import MyName from './Name.vue'
import MyContactInformation from './ContactInformation.vue'
import { reactive } from 'vue'

export default {
  name: 'my-profile',

  components: { MyImage, MyName, MyContactInformation },

  props: {
    user: {
      type: Object
    }
  },
  setup(props) {
    props = reactive(props)
  }
}
</script>
