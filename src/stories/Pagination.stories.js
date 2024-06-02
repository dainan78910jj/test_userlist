import { fn } from '@storybook/test'
import MyPagination from './Pagination.vue'

export default {
  title: 'Example/Pagination',
  component: MyPagination,
  tags: ['autodocs'],
  argTypes: {},
  args: { onSetPage: fn() }
}

export const Profile = {
  args: {
    totalPages: 5,
    currentPage: 4
  }
}
