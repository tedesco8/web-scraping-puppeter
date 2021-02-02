<template>
  <nuxt-link class="flex items-center" to="/">
    <!-- <BuscaloLogo class="BuscaloLogo"/> -->
    <img class="BuscaloLogo" src="../assets/icons/Buscaloimagotipo.png" />
  </nuxt-link>
</template>

<script>
// import BuscaloLogo from '~/assets/icons/LogoBuscalo.svg?inline'
// export default {
//   components: { BuscaloLogo },
// }
//
</script>

<style>
.BuscaloLogo {
  animation: 1s appear;
  margin: auto;
  width: 80%;
  height: auto;
}

@supports (object-fit: cover) {
  .BuscaloLogo svg {
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
