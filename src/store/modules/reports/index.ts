import { Module } from 'vuex'
import { StateInterface } from '../../index'
import state, { ReportStateInterface } from './state'
import getters from "./getters";
const reportModule: Module<ReportStateInterface, StateInterface> = {
  namespaced: true,
  state,
  getters
};

export default reportModule
