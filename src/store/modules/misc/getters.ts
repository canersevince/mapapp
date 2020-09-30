import { GetterTree } from 'vuex'
import { StateInterface } from '../../index'
import { MiscStateInterface } from './state'

const getters: GetterTree<MiscStateInterface, StateInterface> = {
  getMenuState(s){
    return s.showMenu
  }
};

export default getters
