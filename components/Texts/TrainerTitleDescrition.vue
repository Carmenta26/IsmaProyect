<template>
<div>
  <h2 class="text-center text-white text-xl sm:text-2xl  font-medium  py-1.5 sm:px-28 lg:px-48">
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