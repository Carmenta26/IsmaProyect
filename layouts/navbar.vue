<template>
  <div>
    <!-- Nav Bar  -->
    <nav class="bg-white border-gray-200  sm:px-4 py-2 rounded dark:bg-gray-900">
      <div class="container flex h-20 flex-wrap justify-center sm:justify-between items-center mx-auto ">
        <a href="" class="flex items-center">
          <img src="/assets/logo.png" class="mr-3 h-10 sm:h-14" alt="Flowbite Logo"/>

        </a>
        <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>

        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4  bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <TrainerButtonSmall>
              <p>QUIERO CAMBIAR </p>
              <p>AHORA</p>
            </TrainerButtonSmall>
          </ul>
        </div>
      </div>
    </nav>
    <slot></slot>

  </div>
</template>

<script>

import TrainerButtonSmall from "../components/Buttons/TrainerButtonSmall";
export default {
  name: "navbar",
  components: {
    TrainerButtonSmall,
  }

}
</script>

<style scoped>

</style>