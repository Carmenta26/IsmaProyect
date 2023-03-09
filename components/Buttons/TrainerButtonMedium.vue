<template>
<div>
  <button class="text-white text-lg font-semibold bg-yellow-600 hover:text-black hover:bg-amber-50  py-2 px-6 mt-1 rounded-lg ">
    {{content}}
  </button>
</div>
</template>

<script>
export default {
  name: "TrainerButtonMedium",
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