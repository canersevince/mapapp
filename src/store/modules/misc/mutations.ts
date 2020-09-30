import { MutationTree } from 'vuex'
import { MiscStateInterface } from './state'

const mutation: MutationTree<MiscStateInterface> = {
  hideMenu(state){
    state.showMenu = false
  },
  showMenu(state){
    state.showMenu = true
  }
};

export default mutation
