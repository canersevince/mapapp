import { GetterTree } from 'vuex'
import { StateInterface } from '../../index'
import { AuthStateInterface } from './state'

const getters: GetterTree<AuthStateInterface, StateInterface> = {
  getAuth(s){
    return s.auth
  },
  getUser(s){
    return s.user
  }
}

export default getters
