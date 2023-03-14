<template>
  <div>
    <section>
      <div class="grid lg:grid-cols-3">
        <div class="bg-cover bg-center backdrop-brightness-0  lg:h-screen"
             style="background-image: url(/assets/why.jpg);">
          <div class="grid place-content-center h-full bg-transparent px-10 text-center lg:text-justify">
            <TrainerSubtitle
                title=" Si quieres transformar tu físico y lifestyle por completo en 3 meses conmigo como entrenador online, rellena el formulario abajo para conocer tu caso y déjame saber ¿COMO TE PUEDO AYUDAR?"
                text-style="text-white"></TrainerSubtitle>
          </div>
        </div>

        <div class="bg-white md:my-2 lg:col-span-2 h-max">
          <div class="px-8 lg:px-32 flex flex-col space-y-1 bg-white">
            <div>
              <h3 class="text-center text-black text-2xl font-bold  py-10">
                ENTRA Y CAMBIA TU VIDA YA
              </h3>
            </div>
            <div class="bg-white  rounded-lg   space-y-1">
              <form action="https://formsubmit.co/fitbyisma@gmail.com"
                    method="post"
                    onsubmit="window.location.href='https://buy.stripe.com/bIY9C815V8FwckE4gK'"
                    class="grid gap-2">
                <label class="px-1">
                  Nombre:
                </label>
                <TrainerInput type-of-input="text" name="nombre"/>
                <label class="px-1">
                  Edad
                </label>
                <TrainerInput type-of-input="number" name="edad"/>

                <label class="px-1">
                  Telefono Movil:
                </label>
                <TrainerInput type-of-input="number" name="telefono"/>
                <label class="px-1">
                  ¿Dónde vives?
                </label>
                <TrainerInput type-of-input="text" name="location"/>

                <label class="px-1">
                  Cual es tu objetivo a cumplir en los próximos 3 meses si empezamos a trabajar uno a uno?
                </label>
                <TrainerInput type-of-input="text" name="objetive"/>


                <div class="flex justify-center">
                  <button class="bg-yellow-600 px-20 py-3 rounded-lg my-7" type="submit">
                    UNIRME
                  </button>
                  <input type="hidden" name="_next" value="https://buy.stripe.com/bIY9C815V8FwckE4gK">
                  <input type="hidden" name="_captcha" value="false">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


</template>


<script>
import TrainerTitle from "../components/Texts/TrainerTitle";
import TrainerRoundedButton from "../components/Buttons/TrainerRoundedButton";
import TrainerTitleDescrition from "../components/Texts/TrainerTitleDescrition";
import TrainerDescription from "../components/Texts/TrainerDescription";
import TrainerSubtitle from "../components/Texts/TrainerSubtitle";
import TrainerInput from "../components/Buttons/TrainerInput";

export default {
  name: "ContactForm",
  components: {
    TrainerSubtitle,
    TrainerTitle,
    TrainerRoundedButton,
    TrainerTitleDescrition,
    TrainerDescription,
    TrainerInput
  },


}

</script>