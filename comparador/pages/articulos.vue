<template>
  <div class="row mt-5">
    <div class="card-group">
      <div class="row">
        <div class="col-md-8">
          <Articles v-for="(job, i) in jobs" :key="i" :job="job" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    const getJobs = store.getters['article/getJobs']
    let jobs = getJobs()
    if (!jobs.length) {
      jobs = await store.dispatch('article/getJobs')
    }
    return { jobs }
  },
}
</script>