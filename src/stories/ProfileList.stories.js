import MyProfileList from './ProfileList.vue'

export default {
  title: 'Example/ProfileList',
  component: MyProfileList,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
}

export const ProfileList = {
  args: {
    userList: [
      {
        id: 1,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg'
      },
      {
        id: 1,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg'
      }
    ]
  }
}
