import MyImage from './Image.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Image',
  component: MyImage,
  tags: ['autodocs'],
  argTypes: {
    url: {
      control: { type: 'select' },
      options: [
        'https://reqres.in/img/faces/1-image.jpg',
        'https://reqres.in/img/faces/2-image.jpg',
        'https://reqres.in/img/faces/3-image.jpg'
      ]
    },
    size: { control: { type: 'range', min: 1, max: 20, step: 0.1 } }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {}
}

export const Image = {
  args: {
    url: 'https://reqres.in/img/faces/1-image.jpg',
    size: 10
  }
}
