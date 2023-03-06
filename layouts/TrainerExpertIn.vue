<template>
  <div>
    <section class="bg-cover bg-center grid-cols-1 justify-center rounded-t-3xl bg-gray-50">


      <div class="h-24 grid  place-content-center  w-full pt-12">

        <h1 class=" text-white sm:text-3xl text-base  font-semibold  py-1.5">
          +102 <span class="text-teal-400">VIDAS TRANSFORMADAS</span>
        </h1>


      </div>
      <div class="grid grid-cols-1 text-center">
        <h2 class=" text-white sm:text-2xl text-base  font-semibold  py-2">
          SOMOS EXPERTOS EN:
        </h2>
        <div class="flex justify-center items-center h-full sm:h-96  ">
          <div class="grid grid-cols-1 sm:grid sm:grid-cols-2  gap-12 w-3/4 items-center ">
            <div class=" items-center justify-center py-1.5  text-center">
              <div class="flex items-center justify-center">
                <img src="/assets/icons/fitness.png" alt="" class="h-24">
              </div>

              <h2 class=" text-teal-400 text-2xl font-semibold py-1.5">
                Bajar de peso
              </h2>
              <p class="text-white text-base font-normal py-1.5">
                Transforma tu cuerpo y logra la figura que deseas con nuestro programa de pérdida de peso
              </p>

            </div>

            <div class=" items-center justify-center py-1.5  text-center">
                <div class="flex items-center justify-center">
                  <img src="/assets/icons/lose-weight.png" alt="" class="h-24">
                </div>
                <h2 class=" text-teal-400 text-2xl font-semibold py-1.5">
                  Tonificar
                </h2>
                <p class="text-white text-base font-normal py-1.5">
                  Tonifica y reafirma tu cuerpo para lograr una apariencia estética con nuestro programa de entrenamiento. Te ayudamos a alcanzar tus objetivos.
                </p>
            </div>

          </div>

        </div>

      </div>

      <div class="flex justify-center py-14 lg:py-8">
        <TrainerButtonMedium content="Agenda una llamada GRATUITA"/>
      </div>
    </section>
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
  name: "ExpertIn",
  components:{
    TrainerCardsContent,
    TrainerButtonMedium,
    TrainerDescription,
    TrainerSubtitle,
    TrainerTitleDescrition,
    TrainerRoundedButton,

  }
}

</script>

<style scoped>

</style>