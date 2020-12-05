export const actions = {
    async nuxtServerInit({ dispatch }) {
      try {
        await dispatch('article/getJobs')
      } catch (error) {}
    },
  }  