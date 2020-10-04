import { GetterTree } from 'vuex'
import { StateInterface } from '../../index'
import { ReportStateInterface } from './state'

const getters: GetterTree<ReportStateInterface, StateInterface> = {
  getReports(s){
    return s.reports
  },
  getActive(s){
    return s.reports.filter(value => value.STATUS == 'active')
  },
  getClosed(s){
    const reps = s.reports
    return reps.filter(value => value.STATUS == 'closed')
  }
}

export default getters
