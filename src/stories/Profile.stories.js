import MyProfile from './Profile.vue'

export default {
  title: 'Example/Profile',
  component: MyProfile,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
}

export const Profile = {
  args: {
    user: {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://reqres.in/img/faces/1-image.jpg'
    }
  }
}
