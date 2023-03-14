<template>
  <div>
    <h2 class="text-2xl lg:text-2xl font-bold py-1.5" :class="textStyle">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "TrainerSubtitle",
  props:{
    title: {
      type: String,
      required: true,
    },
    textStyle: {
      type: String,
      default: "text-black",
    }
  }

}
</script>

<style scoped>

</style>