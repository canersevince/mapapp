import { GetterTree } from 'vuex'
import { StateInterface } from '../../index'
import { EventStateInterface } from './state'

const getters: GetterTree<EventStateInterface, StateInterface> = {
  getEvents(s){
    return s.events
  },
  getPastEvents(s){
    return s.pastEvents
  },
  getAll(s){
    return [...s.events, ...s.pastEvents]
  }
}

export default getters
