<template>
  <div>
    <div class="flex h-min items-center justify-center bg-cover bg-center relative overflow-hidden bg-white py-14"  >

      <!--div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
      
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow sm:shadow-xl shadow-black/30 lg:hover:shadow-xl lg:hover:shadow-black/30">
          <div class=" h-min sm:h-96 w-72">
            <img class="h-full w-full object-cover transition-transform duration-500 lg:group-hover:rotate-3 lg:group-hover:scale-125" src="https://images.pexels.com/photos/5605061/pexels-photo-5605061.jpeg?cs=srgb&dl=pexels-maksim-goncharenok-5605061.jpg&fm=jpg" alt="" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black lg:group-hover:from-black/70 lg:group-hover:via-black/60 lg:group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 lg:group-hover:translate-y-0">
            <h1 class="font-dmserif text-3xl font-bold text-white">Apoyo por Email 24/7</h1>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100">No te preocupes si tienes dudas o consultas tanto de tu Plan de Comidas como de tu Plan de Entrenamiento. Contarás con apoyo por correo electrónico 24/7.</p>

          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow lg:hover:shadow-xl lg:hover:shadow-black/30">
          <div class="h-full sm:h-96 w-72">
            <img class="h-full w-full object-cover transition-transform duration-500 lg:group-hover:rotate-3 lg:group-hover:scale-125" src="https://images.pexels.com/photos/13709184/pexels-photo-13709184.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black lg:group-hover:from-black/70 lg:group-hover:via-black/60 lg:group-hover:to-black/70"></div>
          <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 lg:group-hover:translate-y-0">
            <h1 class="font-dmserif text-3xl font-bold text-white">Contenido Exclusivo</h1>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100">Todos los miembros de EverTeam podrán acceder a mi Instagram Privado donde comparto  conocimiento y consejos tanto de entrenamiento como de nutrición</p>

          </div>
        </div>

      </div>-->
      <div class=" grid grid-cols-1 sm:grid sm:grid-cols-3  gap-12 w-3/4 items-center ">




        <div class="grid justify-items-center">
          <img class="h-52 pb-7" src="/assets/videollamda.jpg" alt="">
          <div class="text-2xl py-1.5 font-semibold">
            Videollamadas Semanal
          </div>
          <div class="font-normal py-1.5 font-base text-center">
            Control semanal conmigo mediante videollamadas, para revisar tu progreso, ajustar tu plan de entrenamiento y nutrición según tus necesidades y motivarte para seguir adelante.
          </div>
        </div>

        <div class="grid justify-items-center">
          <img class="h-max pb-7" src="/assets/appIsma.PNG" alt="">
          <div class="text-2xl py-1.5 font-semibold">
            Aplicación Móvil Exclusiva
          </div>
          <div class="font-normal  font-base text-center">
            Acceso a una aplicación exclusiva donde tendrás toda la información sobre tu programa de entrenamiento y nutrición, videos explicativos de los ejercicios, clases de fitness impartidas por mí y métricas para que puedas medir tu progreso y mucho más.
          </div>
        </div>
        <div class="grid justify-items-center">
          <img class="h-52 pb-7" src="/assets/icons/whatsapp.png" alt="">
          <div class="text-2xl py-1.5 font-semibold">
            Soporte Por Whatsapp 24h
          </div>
          <div class="font-normal py-1.5 font-base text-center">
            Tendrás soporte 24/7 por whatsaap para resolver dudas en cualquier momento  y recibir asistencia personalizada en cualquier momento.
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