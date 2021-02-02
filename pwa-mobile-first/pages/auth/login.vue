<template>
  <div class="h-full overflow-hidden">
    <div class="flex justify-end p-4">
      <ColorSwitch />
    </div>
    <h1 class="text-center text-3xl font-bold">Tu tienda online</h1>

    <div
      class="login-body mt-12 pt-56 h-full flex flex-col items-center bg-light dark:bg-blue-main-800"
    >
      <SocialLoginButton
        text="Iniciar sesión con google"
        class="m-2"
        @click="loginWithGoogle"
      />
      <SocialLoginButton
        type="facebook"
        text="Iniciar sesión con facebook"
        class="m-2"
        @click="loginWithFacebook"
      />
      <SocialLoginButton
        type="email"
        text="Iniciar sesión con tu correo"
        class="m-2"
        @click="loginWithEmail"
      />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import SocialLoginButton from '~/components/auth/SocialLoginButton.vue'
import ColorSwitch from '~/components/ui/ColorSwitch.vue'

export default {
  name: 'Login',
  layout: 'auth',
  components: {
    ColorSwitch,
    SocialLoginButton,
  },
  methods: {
    async loginWithEmail() {
      try {
        const result = await this.$fire.auth.createUserWithEmailAndPassword(
          'contacto@tedesco.es',
          '222324'
        )
        console.log(result)
      } catch (e) {
        console.log(e)
      }
    },
    async loginWithGoogle() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider()
        debugger
        const result = await this.$fire.auth.signInWithPopup(provider)
        console.log(result)
      } catch (error) {
        // TODO: show toast
        console.error('login error', error)
      }
    },
    async loginWithFacebook() {},
  },
}
</script>

<style scoped>
.login-body {
  width: 200%;
  margin-left: -50%;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
}
</style>
