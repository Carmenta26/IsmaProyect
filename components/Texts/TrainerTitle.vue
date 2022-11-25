<template>
  <div>
    <h1 class="text-center text-white sm:text-3xl md:text-3xl lg:text-5xl font-bold  py-1.5">
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