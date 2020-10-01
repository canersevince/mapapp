import { Module } from 'vuex'
import { StateInterface } from '../../index'
import state, { EventStateInterface } from './state'
import getters from "./getters";
const eventModule: Module<EventStateInterface, StateInterface> = {
  namespaced: true,
  state,
  getters
};

export default eventModule
