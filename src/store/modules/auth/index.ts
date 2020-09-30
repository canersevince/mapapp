import { Module } from 'vuex'
import { StateInterface } from '../../index'
import state, { AuthStateInterface } from './state'
import getters from "./getters";
const authModule: Module<AuthStateInterface, StateInterface> = {
  namespaced: true,
  state,
  getters
};

export default authModule
