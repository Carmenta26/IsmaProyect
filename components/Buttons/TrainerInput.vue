<template>
  <div>
    <input :name="name" :type="typeOfInput" required class="border-2 border-gray-200 rounded-lg w-full h-12 bg-gray-200 sm:mx-0 md:px-6">
  </div>
</template>

<script>
export default {
  name: "TrainerInput",
  props:{
    typeOfInput:{
      type: String,
      required:true,
    },
    name:{
      type: String,
      required:true,
    }
  }
}
</script>

<style scoped>

</style>