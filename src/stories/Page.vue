<template>
  <div class="storybook-page">
    <my-profile-list :user-list="userList" />
    <my-pagination :total-pages="totalPages" :current-page="page" @set-page="getData" />
  </div>
</template>

<script>
import './page.css'
import MyProfileList from './ProfileList.vue'
import MyPagination from './Pagination.vue'
import { ref } from 'vue'

export default {
  name: 'my-page',

  components: { MyProfileList, MyPagination },

  setup() {
    let page = ref(1)
    let totalPages = ref(1)
    let userList = ref([])

    function getData(pageNumber) {
      fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then((response) => response.json())
        .then((data) => {
          page.value = data.page
          totalPages.value = data.total_pages
          userList.value = data.data
        })
    }
    getData(1)
    return {
      page,
      totalPages,
      userList,
      getData
    }
  }
}
</script>
