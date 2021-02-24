import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('add 1 to 4 to get 5', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1')
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('subtract 4 from 7 to get 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('multiply 3 and 5 to get 15', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5')
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('divide 21 by 7 to get 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('click 2 button then 3 button to give number 23', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick(2)
    wrapper.vm.numberClick(3)
    expect(wrapper.vm.runningTotal).to.equal(23)
  })

  it('add two numbers together, then add a third number to that total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('3')
    wrapper.vm.operatorClick('*')
    wrapper.vm.multiply('6')

    expect(wrapper.vm.runningTotal).to.equal(42)
  })

  it('clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('3')
    wrapper.vm.operatorClick("+")
    wrapper.vm.clearClick()
    wrapper.vm.add('12')
    expect(wrapper.vm.runningTotal).to.equal(19)
  })

})
