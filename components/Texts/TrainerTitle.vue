<template>
  <div>
    <h1 class="font-rubik text-center text-white text-2xl md:text-xl lg:text-3xl lg:text-4xl font-bold  py-1.5 ">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "TrainerTitle",
  props:{
    title:{
      type: String
    }
  }
}
</script>