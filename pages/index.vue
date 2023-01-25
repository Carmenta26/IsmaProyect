<template>
<div>
  <head>

  </head>
  <div id="body">

    <NuxtLayout name="navbar">

      <!--Header-->
      <section>
        <div>
          <div class="wave parallax bg-cover bg-center brightness-50 z-0 "
               style="background-image: url(/assets/head.jpeg); height: 850px;">
            <div class=" grid place-content-center h-full bg-transparent">
              <TrainerTitle title="UNETE AL EQUIPO DATUPA"/>
              <TrainerTitleDescrition title=" CAMBIA TU VIDA DISFRUTANDO DE LA COMIDA Y DE LOS ENTRENAMIENTOS."/>

              <div class="grid place-content-center">

                <TrainerRoundedButton>
                  <p>Agenda una llamada</p>
                  <p>GRATUITA</p>
                </TrainerRoundedButton>

              </div>
            </div>
          </div>
        </div>

      </section>

      <!--Why-->
      <section class="grid justify-items-center place-content-center sm:flex sm:justify-center ">
        <div class=" grid  md:grid-cols-3 px-4 md:gap-10 py-10 sm:w-3/4">
          <div class=" sm:col-span-2  text-justify">
            <TrainerSubtitle title="¿Por qué TEAM Fitdos?"/>
            <TrainerDescription :description="why.description1"/>
            <TrainerDescription :description="why.description2"/>
            <TrainerDescription :description="why.description3"/>
            <TrainerDescription :description="why.description4"/>
            <TrainerDescription :description="why.description5"/>

            <div class=" flex justify-center sm:justify-start sm:grid sm:justify-items-start">
              <TrainerButtonMedium content="ÚNETE AHORA "/>
            </div>
          </div>
          <div>
            <div class=" sm:block sm:inline py-4 px-4">
              <atropos >

              <div class="bg-cover bg-center h-[600px]  w-72 mx-auto" data-atropos-offset="-5"
                   style="background-image: url(/assets/why.webp);">
              </div>
              </atropos>

            </div>
          </div>
        </div>
      </section>


      <!--Expert in-->
      <ExpertIn/>

      <!--Transforms-->
      <section>
        <div class="h-24 grid place-content-center text-center bg-teal-400 w-full ">
          <TrainerSubtitle title="Transformaciones de Clientes "/>
        </div>
        <TrainerCarrousel/>
      </section>


      <!--containing-->
      <div class="h-24 grid place-content-center text-center bg-teal-400 w-full">
        <TrainerSubtitle title="Programas diseñados para ti"/>
      </div>

      <section class="grid justify-items-center place-content-center sm:flex sm:justify-center ">
        <div class=" grid  md:grid-cols-3 px-4 md:gap-10 py-10 sm:w-3/4">
          <div class=" sm:col-span-2  text-justify">
            <TrainerSubtitle title="Programas de entrenamiento adaptado a ti"/>
            <TrainerDescription :description="containing1.description1"/>
            <TrainerDescription :description="containing1.description2"/>
            <TrainerDescription :description="containing1.description3"/>
           </div>
          <div>
            <div class=" sm:block sm:inline py-4 px-4">
              <atropos >
                <div class="bg-cover bg-center h-[600px]  w-72 mx-auto" data-atropos-offset="-5"
                     style="background-image: url(/assets/conrtent_1.jpeg);">
                </div>
              </atropos>

            </div>
          </div>

          <div class=" sm:col-span-2  text-justify">
            <TrainerSubtitle title="Planes de alimentación adaptados ati"/>

            <TrainerDescription :description="containing2.description1"/>
            <TrainerDescription :description="containing2.description5"/>
            <TrainerDescription :description="containing2.description3"/>
            <TrainerDescription :description="containing2.description4"/>
          </div>
          <div>
            <div class=" sm:block sm:inline py-4 px-4">
              <atropos >
                <div class="bg-cover bg-center h-[600px]  w-72 mx-auto" data-atropos-offset="-5"
                     style="background-image: url(/assets/content2.jpeg);">
                </div>
              </atropos>

            </div>
          </div>
        </div>
      </section>




      <!--free-->
      <section>

        <div class="h-24 grid place-content-center bg-teal-400 w-full">
          <TrainerSubtitle title="Lo que también recibes GRATIS"/>
        </div>
        <!--free
        <div class="flex content-center">
          <div class="grid-cols-2 gap-12  w-1/2">
              <div>
                <div class="bg-cover bg-center " style="background-image: url(/assets/content2.jpeg); height: 400px ;"/>
              </div>
            <div>
               <div class="bg-red-400 rounded-full col-span-2">
                 gñlm
               </div>
             </div>
          </div>
        </div>
        -->

        <TrainerCardsContent/>
      </section>


      <!--meet your coach-->

      <div class="h-24 grid place-content-center bg-teal-400 w-full">
        <TrainerSubtitle title="Conoce a tu entrenador"/>
      </div>
      <section class="grid justify-items-center place-content-center sm:flex sm:justify-center ">
        <div class=" grid  md:grid-cols-3 px-4 md:gap-10 py-10 sm:w-3/4">

            <div class=" sm:block sm:inline py-4 px-4">
              <atropos >
                <div class="bg-cover bg-center h-[600px]  w-72 mx-auto " data-atropos-offset="-5"
                     style="background-image: url(/assets/know.jpeg);">
                </div>
              </atropos>
            </div>

          <div class="col-span-1 sm:col-span-2  text-justify">
            <TrainerSubtitle title="¡DATUPA!"/>
            <TrainerDescription :description="know.description1"/>
            <TrainerDescription :description="know.description2"/>
            <TrainerDescription :description="know.description3"/>
            <TrainerDescription :description="know.description4"/>
          </div>



        </div>
      </section>


      <!--Expert in-->
      <ExpertIn/>



      <!--TESTIMONIALS-->

      <section>
        <div class="h-24 grid place-content-center bg-teal-400 w-full">
          <TrainerSubtitle title="TESTIMONIOS"/>
        </div>
        <div class="py-5">

        </div>
      </section>





      <!--Footer-->
      <section>
        <div class=" text-center h-auto grid place-content-center bg-neutral-800 w-full mx-auto text-white gap-7">
          <div class="flex justify-center">
            <img src="/assets/ring3city-logo-dark.png" alt="Logo" class="h-14 pt-3">
          </div>
          <div class="grid justify-items-center">
            <p class="text-center"> © DATUPA 2022 All Rights Reserved</p>
            <p class="text-center">Términos y condiciones</p>

            <div class="flex gap-5 py-1">
              <img class="h-10 py-1.5" src="/assets/icons/instagram.png">
              <img class="h-10 py-1.5" src="/assets/icons/tik-tok.png">
              <img class="h-10 py-1.5" src="/assets/icons/youtube.png">
            </div>
          </div>
        </div>
      </section>
    </NuxtLayout>
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
import ExpertIn from "../layouts/TrainerExpertIn";
import TrainerCarrousel from "/layouts/TrainerCarrousel.vue";
import Atropos from "atropos/vue";



export default {
  components: {
    TrainerCarrousel,
    TrainerCardsContent,
    TrainerButtonMedium,
    TrainerDescription,
    TrainerSubtitle,
    TrainerTitleDescrition,
    TrainerRoundedButton,
    TrainerTitle,
    ExpertIn,
    Atropos,
  },
  data: () => {
    return {
      why: {
        description1: `¿Quieres sentirte más seguro y fuerte mientras logras el mejor físico de tu vida?`,
        description2: `¡Con mis métodos probados, cambiarás tu vida y obtendrás el cuerpo que siempre has soñado! El ejercicio es solo el comienzo.`,
        description3: `Hay cientos de programas en línea que prometen "soluciones rápidas" a través de dietas y suplementos rápidos. Claro, puedes perder peso rápidamente, pero no funcionarán a largo plazo. Mi plan es diferente. Como parte del equipo de Datupa, aprendes sobre entrenamiento, dieta y vida como yo. No se trata de cualquier plan de acondicionamiento físico y dieta, sino de un cambio completo en el estilo de vida. ¡No es una inversión en su dieta y rutina personal, es una inversión en aprender un método que le permitirá pasar el resto de su vida de una manera completamente diferente!`,
        description4: `Fitness construye la disciplina, la confianza y la fortaleza mental. El fitness es la clave del éxito en todas las demás áreas de la vida. Si estás listo para ponerte en forma, tomar el control de tu vida, experimentar el éxito como lo hice yo y hacer que todos se pregunten cómo lo lograste, ahora es el momento.`,
        description5: `¿Estás listo para unirte a los miles de miembros del equipo que ya han cambiado vidas a través de mi programa?`,
        description6: `¿Prepárate y únete a los miles de miembros de Team Llados que ya cambiaron sus vidas con mi programa?`,
      },
      containing1: {
        description1: `Recibirás un programa de entrenamineto personalizado, adaptado a tus necesidades y objetivos, con rutinas de ejercicios que esto ayudara a transformar tu cuerpo y que consigas los mejores resultados en el menor tiempo posible.`,
        description2: `Puedes elegir rutinas de entrenamiento en gym o en casa, con las series y repeticiones adaptadas a tu objetivo.`,
        description3: `Las rutinas de ejercicio cada una tendra un video que explicativo de la ejecución para asegurarme que aprendes a entrenar y ejecutes con la mejor técnica posible cada ejercicio y así evitaremos cualquier lesion.`,

      },
      containing2: {
        description5: `3 Planes de comidas adaptados a ti estilo DATUPA al mes. No necesitarás una dieta nunca más.`,
        description1: `Los planes de comidas son DELICIOSOS y FÁCILES si deseas que este estilo de vida sea sostenible y agradable. Estoy muy orgulloso de mi plan de comidas, porque las comidas son absolutamente increíbles.`,
        description2: `Te daré 7 días de variedad dentro del plan para que puedas cambiarlos todos los días o simplemente elegir un día para seguir (personalmente prefiero este método). Puedes enviarme un correo electrónico para ajustar las comidas y agregar comidas específicas o sustituir las que no te gusten.`,
        description3: `Puede expresar sus disgustos/alergias antes de comenzar para que no tenga que comer alimentos que no le gustan. Mi objetivo es que comas tus comidas favoritas mientras obtienes los mejores resultados. Esta es en realidad mi experiencia!`,
        description4: `¡Quiero que este proceso sea lo más cómodo posible!`,
      },
      know: {
        description1: `A los 17 años lancé mi vida al mundo del fitness para deshacerme de los malos hábitos. Mi pasión por el fitness me ha llevado a centrar mi carrera universitaria en la especialización en Estudios del Movimiento Humano, Fisioterapia.`,
        description2: `Soy preparadora física online desde hace más de 5 años. Más de 5000 personas han cambiado su vida y su cuerpo con mis consejos`,
        description3: `Creo que cuando nos damos cuenta del estilo de vida que nos brinda el fitness, tenemos el poder de lograr cualquier cosa. Me encanta ver como el fitness ha cambiado mi vida y me ha apasionado al 100% y como puedo ayudar a cambiar la vida de miles de personas de esta manera, mejorar su salud, acabar con malos hábitos, solucionar sus problemas emocionales y al mismo tiempo mejorar. su apariencia y condición física.`,
        description4: `En Ever Team somos una gran familia, una gran comunidad sin clientes, solo aquellos que nos confían con sentido de intimidad y dedicación a través de un programa a la medida de sus necesidades.`,

      },

    }
  }
}

</script>