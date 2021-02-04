<template>
  <button
    class="rounded-full border py-2 px-6 flex items-center"
    :class="type"
    @click="$emit('click')"
  >
    <component :is="socialComponent" class="w-6 mr-2" />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'SocialLoginButton',
  components: {
    GoogleIcon: () => import('../../assets/icons/google.svg?inline'),
    FacebookIcon: () => import('../../assets/icons/facebook.svg?inline'),
    EmailIcon: () => import('../../assets/icons/email.svg?inline'),
  },
  props: {
    type: {
      type: String,
      default: 'google',
      validate: (value) => ['google', 'facebook', 'email'].includes(value),
    },
    text: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    socialOptions: {
      google: 'GoogleIcon',
      facebook: 'FacebookIcon',
      email: 'EmailIcon',
    },
  }),
  computed: {
    socialComponent() {
      return this.socialOptions[this.type]
    },
  },
}
</script>

<style scoped>
.google {
  @apply bg-red-main-600 border-red-main-600 text-white;
}
.facebook {
  @apply bg-blue-main-700 border-blue-main-700 text-white;
}
</style>
