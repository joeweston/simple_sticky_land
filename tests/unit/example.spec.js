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

describe("Man is created properly", ()=>{
  let man;
  beforeAll(() => {
    man = new Man();
  })
  it('has hp value bestween 9 and 14 not inclusive', ()=>{
    expect(man.hp).toBeGreaterThan(9);
    expect(man.hp).toBeLessThan(14);

  })
})
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





