import { GetterTree } from 'vuex'
import { StateInterface } from '../../index'
import { MapStateInterface } from './state'

const getters: GetterTree<MapStateInterface, StateInterface> = {
  getPins (state) {
    return state.pins
  },
  getActive(s){
    const payload = s.pins.filter(pin => {
      return !pin.IS_DONE
    })
    return payload
  },
  getCompleted(s){
    const payload = s.pins.filter(pin => {
      return pin.IS_DONE
    })
    return payload
  }
}

export default getters
