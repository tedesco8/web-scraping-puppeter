import Scrapper from '~/scrapper/scrapper_uy'

export const state = () => ({
  jobs: [],
  total_jobs: 0,
})

export const getters = {
  getJobs: (state) => () => {
    return state.jobs
  },
}

export const mutations = {
  STORE_JOBS(state, payload) {
    state.jobs = payload.jobs
    state.total_jobs = payload.total_jobs
  },
}

export const actions = {
  async getJobs({ commit }) {
    const data = await Scrapper.getJobs()
    if (data.total_jobs) {
      commit('STORE_JOBS', data)
      return data.jobs
    }
  },
}
