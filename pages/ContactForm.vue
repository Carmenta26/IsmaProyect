<template>
  <div>
    <section>
      <div class="grid lg:grid-cols-3">
        <div class="bg-cover bg-center backdrop-brightness-0 h-96 lg:h-full"
             style="background-image: url(/assets/form2.jpeg);">
          <div class="grid place-content-center h-full bg-transparent px-10 text-center lg:text-justify">
            <TrainerSubtitle
                title=" Si quieres transformar tu físico y lifestyle por completo en 3 meses conmigo como entrenador online, rellena el formulario abajo para conocer tu caso y déjame saber ¿COMO TE PUEDO AYUDAR?"
                text-style="text-white"></TrainerSubtitle>
          </div>
        </div>

        <div class="bg-white md:my-2 lg:col-span-2">
          <div class="px-8 lg:px-32 flex flex-col space-y-1 bg-white">
            <div>
              <h3 class="text-center text-black text-2xl font-bold  py-10">
                ENTRA en lista de espera para el Team Llados
              </h3>
            </div>
            <div class="bg-white  rounded-lg   space-y-1">
              <form onsubmit="sendEmail()">
                <label class="px-1">
                  Nombre:
                </label>
                <TrainerInput/>
                <label class="px-1">
                  Edad
                </label>
                <TrainerInput/>
                <label class="px-1">
                  Email
                </label>
                <TrainerInput/>
                <label class="px-1">
                  Telefono Movil:
                </label>
                <TrainerInput/>
                <label class="px-1">
                  ¿Dónde vives?
                </label>
                <TrainerInput/>
                <label class="px-1">
                  Instagram
                </label>
                <TrainerInput/>
                <label class="px-1">
                  Cual es tu objetivo a cumplir en los próximos 3 meses si empezamos a trabajar uno a uno?
                </label>
                <TrainerInput/>
                <label class="px-1">
                  ¿Que tipo de ayuda estas buscando?
                </label>
                <select name="cars" id="cars" class="border-2 border-gray-200 rounded-lg w-full h-12 bg-gray-200 ">
                  <option value="(X) - No puedo permitírmelo ahora $ y prefiero hacerlo por mi cuenta">(X) - No puedo
                    permitírmelo ahora $ y prefiero hacerlo por mi cuenta
                  </option>
                  <option
                      value="($) - Solo puedo invertir una cantidad pequeña ahora. No mucho mas de lo que pagaría por 1 cafe al día">
                    ($) - Solo puedo invertir una cantidad pequeña ahora. No mucho mas de lo que pagaría por 1 cafe al
                    día
                  </option>
                  <option
                      value="($$) - Quiero que tú me ayudes y me guíes paso a paso. Estoy dispuesto a invertir $ para lograr RESULTADOS">
                    ($$) - Quiero que tú me ayudes y me guíes paso a paso. Estoy dispuesto a invertir $ para lograr
                    RESULTADOS
                  </option>
                  <option
                      value="($$$) - Quiero que tú me ayudes personalmente 1 a 1 en tu Coaching VIP. El dinero no es un problema y estoy bien económicamente ">
                    ($$$) - Quiero que tú me ayudes personalmente 1 a 1 en tu Coaching VIP. El dinero no es un problema
                    y estoy bien económicamente
                  </option>
                </select>

                <div class="flex justify-center">
                  <button class="bg-teal-400 px-20 py-3 rounded-lg mt-7">
                    Aplicar
                  </button>
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

  methods: {
    routeEmail(){
      // type: String,
      // default: "https://smtpjs.com/v3/smtp.js",
      // method: function sendEmail() {
      //   Email.send({
      //     Host: "smtp.elasticemail.com",
      //     Username: "carmenta689@gmail.com",
      //     Password: "05D7215342E0D1FFAAA5FC8B3DBAC871A1A1",
      //     To: 'carlos.armenta216551@potros.itson.edu.mx',
      //     From: "",
      //     Subject: "This is the subject",
      //     Body: "And this is the body"
      //   }).then(
      //       message => alert(message)
      //   );
      // }
    }
  }

}

</script>