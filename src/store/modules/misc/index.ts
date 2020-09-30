import { Module } from 'vuex'
import { StateInterface } from '../../index'
import state, { MiscStateInterface } from './state'
import getters from "./getters";
import mutations from "./mutations"
const miscModule: Module<MiscStateInterface, StateInterface> = {
  namespaced: true,
  state,
  getters,
  mutations
};

export default miscModule
