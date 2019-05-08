/*
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

 describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

*/
import Player from '@/vuex/gameMechanics/adventureMechanics/Player.js'
import Man from '@/vuex/gameMechanics/adventureMechanics/enemies/Man.js'
import Fields from '@/vuex/gameMechanics/adventureMechanics/areas/Fields.js'
import Adventure from '@/vuex/gameMechanics/adventureMechanics/Adventure.js'


describe("Fields is created properly", ()=>{
  let fields;
  beforeAll(() => {
    fields = new Fields(new Player);
  })
  it('this is not complete', ()=>{

  })
})
describe("Fieldsadventure is created properly", ()=>{
  let adventure;
  beforeAll(() => {
    adventure = new Adventure(new Fields(new Player));
  })
  it('tick does no crash', ()=>{
    adventure.tick();
  })
})





