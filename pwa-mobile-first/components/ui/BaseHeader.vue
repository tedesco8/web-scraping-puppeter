<template>
  <header class="header dark:text-white dark:bg-blue-main-800">
    <nuxt-link class="flex items-center" to="/">
      <img
        src="../../assets/icons/inglesLogoGraduado.png"
        alt=""
        class="w-6 mr-3"
      />
      <h1 class="font-bold text-base">Tu tienda online</h1>
    </nuxt-link>
    <nuxt-link class="hidden md:block" to="/profile">
      <img
        class="w-10 rounded-full"
        src="../../assets/images/defaultImage.jpg"
        alt=""
      />
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
}
</script>
<style scoped>
.header {
  @apply flex items-center justify-between p-4;

  height: var(--header);
}
</style>
