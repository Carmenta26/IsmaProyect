<template>
    <NuxtLink to="/ContactForm">
    <button class="text-white text-sm sm:text-xl font-semibold bg-yellow-600 hover:text-black hover:bg-amber-50  py-2 px-6 m-3 rounded-lg mx-auto" >
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