<template>
  <div>
    <div class="flex min-h-screen items-center justify-center bg-cover bg-center " style="background-image: url(/assets/free.jpeg); height: 600px ;">

      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">

        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class=" h-min sm:h-96 w-72">
            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.pexels.com/photos/5605061/pexels-photo-5605061.jpeg?cs=srgb&dl=pexels-maksim-goncharenok-5605061.jpg&fm=jpg" alt="" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="font-dmserif text-3xl font-bold text-white">Apoyo por Email 24/7</h1>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">No te preocupes si tienes dudas o consultas tanto de tu Plan de Comidas como de tu Plan de Entrenamiento. Contarás con apoyo por correo electrónico 24/7.</p>
            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div class="h-full sm:h-96 w-72">
            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.pexels.com/photos/13709184/pexels-photo-13709184.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="font-dmserif text-3xl font-bold text-white">Contenido Exclusivo</h1>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Todos los miembros de EverTeam podrán acceder a mi Instagram Privado donde comparto  conocimiento y consejos tanto de entrenamiento como de nutrición</p>
            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import TrainerTitle from "../components/Texts/TrainerTitle";
import TrainerRoundedButton from "../components/Buttons/TrainerRoundedButton";
import TrainerTitleDescrition from "../components/Texts/TrainerTitleDescrition";
import TrainerSubtitle from "../components/Texts/TrainerSubtitle";
import TrainerDescription from "../components/Texts/TrainerDescription";
import TrainerButtonMedium from "../components/Buttons/TrainerButtonMedium";
import TrainerCardsContent from "../layouts/TrainerCardsContent";

export default {
  name: "TrainerCardsContent",
  components:{

  }
}
</script>

<style scoped>

</style>