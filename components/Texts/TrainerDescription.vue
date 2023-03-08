<template>
  <div>
    <p class="text-base  py-1.5 " :class="textStyle">
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