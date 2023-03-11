<template>
  <div>
    <nav class="flex  h-24 bg-black">
      <div class="container flex flex-wrap justify-center items-center mx-auto">
        <a href="" class="flex items-center">
            <img src="assets/logo.png" class="mx-auto mr-3 h-6 sm:h-14" alt="Flowbite Logo"/>
        </a>
      </div>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "navbarToTerms"
}
</script>

<style scoped>

</style>