import { Module } from 'vuex'
import { StateInterface } from '../../index'
import state, { MapStateInterface } from './state'
import getters from "./getters";
const mapModule: Module<MapStateInterface, StateInterface> = {
  namespaced: true,
  state,
  getters
};

export default mapModule
