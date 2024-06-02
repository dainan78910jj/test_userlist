import MyContactInformation from './ContactInformation.vue'

export default {
  title: 'Example/ContactInformation',
  component: MyContactInformation,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
}

export const ContactInformation = {
  args: {
    email: 'george.bluth@reqres.in'
  }
}
