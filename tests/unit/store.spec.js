import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

const factory = (values = {}) => {
  return shallowMount(App, {
    data: { ...values  }
  })
}

describe('App', () => {
  it('Draws a welcome message', () => {
    const wrapper = factory()

    expect(wrapper.find('h1').text()).toEqual('Welcome to weather app 🙈')
  })


  it('There is an active class on the button', () => {
    const wrapper = factory()

    expect(wrapper.find('.tabs__button').classes()).toContain('is-active')
  })

})
