<template>
  <div>
    <p class="text-lg  py-1.5 text-justify" :class="textStyle">
      {{description}}
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "TrainerDescription",
  props:{
    textStyle:{
      type:String,
      default: "text-black",
    },
    description:{
      type:String,
      required:true,
    },

  }

}
</script>

<style scoped>

</style>