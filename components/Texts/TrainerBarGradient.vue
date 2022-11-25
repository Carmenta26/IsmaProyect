<template>

  <div>
    <div class="h-24 grid place-content-center bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
      <TrainerSubtitle :title="{{title}} "/>
    </div>
  </div>
</template>

<script>
import TrainerSubtitle from "./TrainerSubtitle";
export default {
  name: "TrainerBarGradient",
  components: {
    TrainerSubtitle

  },
  props:{
    title: {
      type: String,
      required:true,
    }
  }

}
</script>

<style scoped>

</style>

