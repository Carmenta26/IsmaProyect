<template>
<div>
  <head>

  </head>
  <div id="body">

    <NuxtLayout name="navbar">

      <!--Header-->
      <section>
        <div>
          <div class="wave parallax  bg-center brightness-50 z-0 "
               style="background-image: url(/assets/head.jpg); height: 850px;">
            <div class=" grid place-content-center h-full bg-transparent">
              <TrainerTitle title="ASESORAMIENTO PERSONAL PARA PERDER GRASA Y TONIFICAR"/>
              <TrainerTitleDescrition title=" CAMBIA TU VIDA COMIENDO DE TODO."/>

              <div class="grid place-content-center">

                <TrainerRoundedButton>
                  <p>QUIERO CAMBIAR </p>
                  <p>AHORA</p>
                </TrainerRoundedButton>

              </div>
            </div>
          </div>
        </div>

      </section>

      <!--Why-->
      <section class="grid justify-items-center place-content-center sm:flex sm:justify-center ">
        <div class="grid  md:grid-cols-3 px-4 md:gap-10 py-10 sm:w-3/4">
          <div class=" sm:col-span-2  text-justify">
            <TrainerSubtitle title="¿Por qué TEAM FITBYISMA?"/>
            <TrainerDescription :description="why.description1" class="font-bold"/>
            <p>
              <span class="font-bold text-base  py-1.5">Conozco esa sensacion de verte mal por cada espejo al que pasas. De no verte bien con cualquier prenda de ropa y tener una baja autoestima asi que Ayudo a hombres y mujeres</span> que les cueste perder grasa, a que lo consigan disfrutando de sus comidas favoritas y mejorando sus habitos y salud sin pasar hambre y viendo resultados en menos de 1 més.
            </p>

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
                   style="background-image: url(/assets/why.jpg);">
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
        <!--<TrainerCarrousel/>-->
        <!--<GaleryPhone/>-->
        <GaleryPhone/>
    </section>


    <!--containing-->
      <div class="h-24 grid place-content-center text-center bg-teal-400 w-full ">
        <TrainerSubtitle title="Programas diseñados para ti"/>
      </div>

      <section class="grid justify-items-center place-content-center sm:flex sm:justify-center ">
        <div class=" grid  md:grid-cols-3 px-4 md:gap-10 py-10 sm:w-3/4">
          <div class=" sm:col-span-2  text-justify">
            <TrainerSubtitle title="Programas de entrenamiento adaptado a ti"/>
            <p>Te crearé un plan de entrenamiento totalmente personalizado y adaptado a tu cuerpo para que consigas <span class="font-bold text-base  py-1.5">los mejores resultados en el menor tiempo posible.</span></p>
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
            <TrainerSubtitle title="Planes de alimentación adaptados a ti"/>

            <TrainerDescription :description="containing2.description1"/>

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
            <TrainerSubtitle title="¡Ismael Charafi!"/>
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
        <div>
          <TestimonialsContent />
        </div>
      </section>


      
      <!--Footer-->
      <section>
        <div class=" text-center h-auto grid place-content-center bg-neutral-800 w-full mx-auto text-white gap-7">
          <div class="flex justify-center">
            <img src="/assets/logo.png" alt="Logo" class="h-14 pt-3">
          </div>
          <div class="grid justify-items-center">
            <p class="text-center"> © FITBYISMA 2022 All Rights Reserved</p>
            <p class="text-center">Términos y condiciones</p>

            <div class="flex gap-5 py-1">
              <a href="https://www.instagram.com/fitbyisma/" target="_blank">
              <img class="h-10 py-1.5" src="/assets/icons/instagram.png">
              </a>
              <a href="https://www.tiktok.com/@fitbyisma" target="_blank">
              <img class="h-10 py-1.5" src="/assets/icons/tik-tok.png">
              </a>
              <a href="https://www.youtube.com/@fitbyisma/videos" target="_blank">
              <img class="h-10 py-1.5" src="/assets/icons/youtube.png">
              </a>
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
import GaleryPhone from "~/layouts/GaleryPhone.vue";
import TestimonialsContent from "~~/layouts/TestimonialsContent.vue";



export default {
  components: {
    GaleryPhone,
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
    TestimonialsContent
},
  data: () => {
    return {
      why: {
        description1: `¿No te gusta tu fisico?`,
        description2: `Conozco esa sensacion de verte mal por cada espejo al que pasas. De no verte bien con cualquier prenda de ropa y tener una baja autoestima asi que Ayudo a hombres y mujeres que les cueste perder grasa, a que lo consigan disfrutando de sus comidas favoritas y mejorando sus habitos y salud sin pasar hambre y viendo resultados en menos de 1 més.`,
        description3: `El 87% de las personas que intentan perder grasa no lo consiguen porque en los métodos convencionales se necesita demasiada fuerza de voluntad, son demasiado aburridos y estrictos, es difícil de aguantar, y el 87% NO CONSIGUE SER CONSTANTE.`,
        description4: `Pero mi método es completamente diferente, conmigo no vas a estar a dieta estricta, si no que vas a aprender a comer de todo, disfrutar de comidas deliciosas y fáciles de preparar al mismo tiempo que consigues resultados, y te puedo asegurar que los tendrás en menos de 1 mes, mi metodología es simple:`,
        description5: `"Disfruta de tus alimentos favoritos, sin pasar hambre, y pierde grasa en menos de 30 días"`,
        //description6: `¿Prepárate y únete a los miles de miembros de Team Llados que ya cambiaron sus vidas con mi programa?`,
      },
      containing1: {
        description1: `Recibirás un programa de entrenamineto personalizado, adaptado a tus necesidades y objetivos, con rutinas de ejercicios que esto ayudara a transformar tu cuerpo y que consigas los mejores resultados en el menor tiempo posible.`,
        description2: `Puedes elegir rutinas de entrenamiento en gym o en casa, con las series y repeticiones adaptadas a tu objetivo.`,
        description3: `Las rutinas de ejercicio cada una tendra un video que explicativo de la ejecución para asegurarme que aprendes a entrenar y ejecutes con la mejor técnica posible cada ejercicio y así evitaremos cualquier lesion.`,

      },
      containing2: {
        description5: `3 Planes de comidas adaptados a ti estilo FITBYISMA al mes. No necesitarás una dieta nunca más.`,
        description1: `Mi metodología es la dieta flexible y personalizada, con la que disfrutarás de tus comidas favoritas, sin pasar hambre, y verás resultados en menos de 1 mes.`,
        description2: `Te daré 7 días de variedad dentro del plan para que puedas cambiarlos todos los días o simplemente elegir un día para seguir (personalmente prefiero este método). Puedes enviarme un correo electrónico para ajustar las comidas y agregar comidas específicas o sustituir las que no te gusten.`,
        description3: `Puede expresar sus disgustos/alergias antes de comenzar para que no tenga que comer alimentos que no le gustan. Mi objetivo es que comas tus comidas favoritas mientras obtienes los mejores resultados. Esta es en realidad mi experiencia!`,
        description4: `¡Quiero que este proceso sea lo más cómodo posible!`,
      },
      know: {
        description1: `Hace unos años, era un chico gordito y mi físico no me gustaba nada. Me sentía incapaz de ponerme cualquier tipo de ropa que quisiera, y la idea de quitarme la camiseta en la playa me causaba vergüenza. Estaba atrapado en un círculo vicioso en el que intentaba seguir dietas estrictas y aburridas, pero siempre las abandonaba porque no lograba ser constante y los resultados no eran los esperados.`,
        description2: `Pero un día, decidí tomar el control de mi vida y convertirme en el entrenador y experto en nutrición que necesitaba. Diseñé mi propia metodología, la dieta flexible, que me permitió comer todo tipo de comidas, disfrutar de mis platos favoritos y ver resultados notables en menos de un mes. Conseguí un cambio físico impresionante que no solo transformó mi cuerpo, sino que también cambió mi vida. La seguridad y la confianza en mí mismo que obtuve me permitieron dedicarme a lo que realmente me apasiona: ayudar a otras personas a transformar sus cuerpos y cambiar sus vidas.`,
        description3: `Hoy en día, siento una gran satisfacción al saber que he ayudado a cientos de personas a lograr los mismos cambios que yo experimenté. No solo me he convertido en una figura de referencia en el mundo de la nutrición y el acondicionamiento físico, sino que también me he convertido en un modelo a seguir para aquellos que buscan mejorar su bienestar físico y emocional. Todo lo que he logrado es gracias a mi dedicación, esfuerzo y perseverancia, y me siento agradecido por cada día que tengo la oportunidad de seguir ayudando a otros a alcanzar sus objetivos y vivir la vida que merecen.`,
        description4: `En FITBYISMA somos una comunidad unida y dedicada, que ofrece programas personalizados y cercanos. Aquí, no somos meros proveedores de servicios, sino familia comprometidos con tu bienestar y dispuestos a ayudarte en cada paso del camino.`,

      },

    }
  }
}

</script>