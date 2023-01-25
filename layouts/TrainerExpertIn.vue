<template>
  <div>
    <section class="bg-cover bg-center grid-cols-1 justify-center rounded-t-3xl bg-gray-50">


      <div class="h-24 grid  place-content-center  w-full pt-12">
        <h2 class=" text-white sm:text-2xl text-base  font-semibold  py-1.5">
          SOMOS <span class="text-teal-400">EXPERTOS EN:</span>
        </h2>

      </div>
      <div class="flex justify-center h-full sm:h-96  ">
        <div class="grid grid-cols-1 sm:grid sm:grid-cols-3  gap-12 w-3/4 items-center ">

          <div class=" items-center justify-center py-1.5  text-center">
            <div class="flex items-center justify-center">
              <img src="/assets/icons/fitness.png" alt="" class="h-24">
            </div>

            <h2 class=" text-teal-400 text-2xl font-semibold py-1.5">
              Bajar de peso
            </h2>
            <p class="text-white text-base font-normal py-1.5">
              Si tu objetivo es bajar de peso y darle una mejor silueta a tu cuerpo este programa es para ti.
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
                Si tu objetivo es darle una forma mucho mas estetica a tu cuerpo reafirmando todo lo que ya esta trabajado, nosotros te podemos ayudar
              </p>
          </div>
          <div class=" items-center justify-center py-1.5  text-center">
            <div class="flex items-center justify-center">
              <img src="../public/assets/icons/muscle.png" alt="" class="h-24">
            </div>
            <h2 class=" text-teal-400 text-2xl font-semibold py-1.5">
              Aumentar Musculo
            </h2>
            <p class="text-white text-base font-normal py-1.5">
              Si tu objetivo es ponerte en forma o ganar fuerza, entonces el boxeo es para ti.
            </p>

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