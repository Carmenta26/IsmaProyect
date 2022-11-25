<template>
<div>
  <h2 class="text-center text-white md:text-xl lg:text-3xl font-medium text-xl py-1.5 sm:px-28 lg:px-48">
    {{ title }}
  </h2>
</div>
</template>

<script>
export default {
  name: "TrainerTitleDescrition",
  props:{
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>