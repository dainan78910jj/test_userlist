import MyName from './Name.vue'

export default {
  title: 'Example/Name',
  component: MyName,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
}

export const Name = {
  args: {
    firstname: 'George',
    lastname: 'Bluth'
  }
}
