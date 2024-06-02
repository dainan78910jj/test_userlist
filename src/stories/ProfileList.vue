<template>
  <div class="storybook-profile-list">
    <TransitionGroup name="list" tag="ul">
      <my-profile :user="u" v-for="u in userList" :key="u.id" />
    </TransitionGroup>
  </div>
</template>

<script>
import './profileList.css'
import MyProfile from './Profile.vue'
import { reactive } from 'vue'

export default {
  name: 'my-profile-list',

  components: { MyProfile },

  props: {
    userList: {
      type: Array
    }
  },
  setup(props) {
    props = reactive(props)
  }
}
</script>
