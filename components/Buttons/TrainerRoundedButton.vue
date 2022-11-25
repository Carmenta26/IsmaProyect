<template>
  <NuxtLink to="/ContactForm">
    <button class="text-white text-sm sm:text-xl font-semibold bg-teal-400 hover:text-black hover:bg-amber-50  py-2 px-6 m-3 rounded-lg " >
        {{ title }}
      <slot></slot>
    </button>
  </NuxtLink>
</template>

<script>
export default {
  name: "TrainerRoundedButton",
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>