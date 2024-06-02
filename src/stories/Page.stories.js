import { within, userEvent, expect } from '@storybook/test'
import MyPage from './Page.vue'

export default {
  title: 'Example/Page',
  component: MyPage,
  parameters: {
    layout: 'fullscreen'
  }
}

export const Page = {}
