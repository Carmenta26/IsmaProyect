<template>
<div>
  <NuxtLink to="/ContactForm">
  <button class="text-black text-base font-semibold bg-yellow-600 hover:text-black hover:bg-amber-50   px-6  rounded-lg ">
    {{content}}
    <slot></slot>
  </button>
    </NuxtLink>
</div>
</template>

<script>
export default {
  name: "TrainerButtonSmall",
  props:{
    content:{
      type:String,
      required:true,
    }
  }
}
</script>

<style scoped>

</style>