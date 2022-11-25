<template>
  <head>
    <link rel="stylesheet" href="../layouts/style/style.css">
  </head>
  <div id="body">

    <NuxtLayout name="navbar">

      <!--Header-->
      <section>
        <div>
          <div class="bg-cover bg-center brightness-50 z-0"
               style="background-image: url(/assets/head.jpeg); height: 800px;">
            <div class="grid place-content-center h-full bg-transparent">
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
            <TrainerSubtitle title="¿Por qué TEAM DATUPA?"/>
            <TrainerDescription :description="why.description1"/>
            <TrainerDescription :description="why.description2"/>
            <TrainerDescription :description="why.description3"/>
            <TrainerDescription :description="why.description4"/>
            <TrainerDescription :description="why.description5"/>

            <div class=" flex items-center sm:grid sm:justify-items-start">
              <TrainerButtonMedium content="ÚNETE AHORA "/>
            </div>
          </div>
          <div>
            <div class=" sm:block sm:inline py-4 px-4">
              <div class="bg-cover bg-center h-[600px] sm:h-[600px] "
                   style="background-image: url(/assets/why.webp); ">
              </div>
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
        <div class="bg-cover bg-center " style="background-image: url(/assets/transform.png); height: 1500px ;">

        </div>
      </section>


      <!--containing-->
      <section>
        <div class="h-24 grid place-content-center text-center bg-teal-400 w-full">
          <TrainerSubtitle title="Programas diseñados para ti"/>
        </div>
        <div class="flex justify-center ">
          <div class=" grid sm:grid sm:grid-cols-3 gap-12 py-14 sm:py-10 w-3/4">
            <div class=" sm:inline ">

              <div class="bg-cover bg-center h-[600px] sm:h-[600px] " style="background-image: url(/assets/conrtent_1.jpeg);"/>

            </div>
            <div class="col-span-2">
              <TrainerSubtitle title="Programas de entrenamiento adaptado a ti"/>
              <TrainerDescription :description="containing1.description1"/>
              <TrainerDescription :description="containing1.description2"/>
              <TrainerDescription :description="containing1.description3"/>
            </div>
            <div class=" sm:inline">

              <div class="bg-cover bg-center h-[600px] sm:h-[600px] " style="background-image: url(/assets/content2.jpeg); "/>

            </div>
            <div class="col-span-2">
              <TrainerSubtitle title="Planes de alimentación adaptados ati"/>

              <TrainerDescription :description="containing2.description1"/>
              <TrainerDescription :description="containing2.description5"/>
              <TrainerDescription :description="containing2.description3"/>
              <TrainerDescription :description="containing2.description4"/>
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

      <section>

        <div class="h-24 grid place-content-center bg-teal-400 w-full">
          <TrainerSubtitle title="Conoce a tu entrenador "/>
        </div>
        <div class="flex justify-center">
          <div class="grid md:grid md:grid-cols-3 gap-40 py-10 w-3/4">
            <div class="h-[600px] sm:h-[600px]  md:inline ">

              <div class="bg-cover bg-center " style="background-image: url(/assets/know.jpeg); height: 700px ;"/>

            </div>
            <div class="col-span-2">
              <TrainerSubtitle title="¡Hola, soy Llados!"/>
              <TrainerDescription :description="know.description1"/>
              <TrainerDescription :description="know.description2"/>
              <TrainerDescription :description="know.description3"/>
              <TrainerDescription :description="know.description4"/>
            </div>
          </div>
        </div>


      </section>


      <!--TESTIMONIALS-->
      <section>
        <div>

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


export default {
  components: {
    TrainerCardsContent,
    TrainerButtonMedium,
    TrainerDescription,
    TrainerSubtitle,
    TrainerTitleDescrition,
    TrainerRoundedButton,
    TrainerTitle,
    ExpertIn,
  },
  data: () => {
    return {
      why: {
        description1: `¿Quieres sentirte más seguro y poderoso mientras logras el mejor físico de tu vida?`,
        description2: `¡Con mis métodos probados, transformarás tu vida y obtendrás el cuerpo que siempre has soñado! El fitness es solo el principio.`,
        description3: `Hay cientos de programas en línea que prometen "soluciones rápidas" a través de dietas rápidas y suplementos. Claro, puedes perder peso rápidamente, pero no funcionarán a largo plazo. Mi plan es diferente. Como miembro del equipo DATUPA, aprenderás a entrenar, comer y vivir como yo. Este no es cualquier plan de acondicionamiento físico y dieta, es un cambio total de estilo de vida. ¡No es una inversión en dietas y rutinas individualizadas, es una inversión en aprender un método que te permitirá pasar el resto de tu vida de una manera completamente diferente!`,
        description4: `Fitness construye la disciplina, la confianza en sí mismo y la fortaleza mental. El fitness es la clave del éxito en todas las demás áreas de la vida. Si está listo para ponerse en forma, hacerse cargo de su vida, experimentar el éxito como lo hice yo y hacer que todos se pregunten cómo lo logró, ahora es el momento.`,
        description5: `¿Listo para unirte a los miles de miembros del equipo que ya han cambiado vidas a través de mi programa?`,
        description6: `¿Prepárate y únete a los miles de miembros de Team Llados que ya cambiaron sus vidas con mi programa?`,
      },
      containing1: {
        description1: `Recibirás un programa de entrenamineto personalizado, adaptado a tus necesidades y objetivos, con rutinas de ejercicios que esto ayudara a transformar tu cuerpo y que consigas los mejores resultados en el menor tiempo posible.`,
        description2: `Puedes elegir rutinas de entrenamiento en gym o en casa, con las series y repeticiones adaptadas a tu objetivo.`,
        description3: `Las rutinas de ejercicio cada una tendra un video que explicativo de la ejecución para asegurarme que aprendes a entrenar y ejecutes con la mejor técnica posible cada ejercicio y así evitaremos cualquier lesion.`,

      },
      containing2: {
        description5: `3 Planes de comidas adaptados a ti estilo Datupa al mes. No necesitarás una dieta nunca más.`,
        description1: `Los planes de comidas son DELICIOSOS y FÁCILES si deseas que este estilo de vida sea sostenible y agradable. Estoy muy orgulloso de mi plan de comidas, porque las comidas son absolutamente increíbles.`,
        description2: `Te daré 7 días de variedad dentro del plan para que puedas cambiarlos todos los días o simplemente elegir un día para seguir (personalmente prefiero este método). Puedes enviarme un correo electrónico para ajustar las comidas y agregar comidas específicas o sustituir las que no te gusten.`,
        description3: `Puede expresar sus disgustos/alergias antes de comenzar para que no tenga que comer alimentos que no le gustan. Mi objetivo es que comas tus comidas favoritas mientras obtienes los mejores resultados. Esta es en realidad mi experiencia!`,
        description4: `¡Quiero que este proceso sea lo más cómodo posible!`,
      },
      know: {
        description1: `Siempre me había interesado el gimnasio y el fitness, pero mi carrera como piloto profesional significaba que no podía perseguirlo plenamente. Cuando dejé de competir en motos, dediqué toda mi energía al gimnasio, mi verdadera pasión.`,
        description2: `Comencé levantando pesas y experimentando con la nutrición. Lo que empezó como un simple objetivo de conseguir esos deseados abdominales y un físico muscular para impresionar a las chicas, se convirtió rápidamente en una adicción a todo el estilo de vida del fitness. Me sentí en la cima del mundo y quería compartir este sentimiento con los demás, el fitness cambio radicalmente mi vida a mejor.`,
        description3: `En 2014 me mudé a Australia para continuar con mis sueños en el mundo del fitness, quería ser el mejor por lo que me tenia que rodear y aprender de los mejores. Fui un entrenador personal exitoso en Sydney, donde logre transformar muchas vidas pero me di cuenta que siendo un entrenador presencial nunca podría ayudar a miles de personas a cambiar su vida y sentir que era mi obligación enseñar y compartir este gran lifestyle que había aprendido! Fue cuando empece a dedicarme al entrenamiento online y después me mude a USA para seguir aumentando mis conocimientos sobre nutrición y entrenamiento en la mecca del Fitness mundial, en Los Angeles, California.`,
        description4: `Después de vivir 2 años en California mi presencia como entrenador online ya había crecido muchísimo y había conseguido transformar miles de vidas, en California conocí al amor de mi vida, Thalia que cariñosamente la llamo yo y mis seguidores Puchi. Decidimos mudarnos a Las Vegas y al día de hoy vivo el lifestyle de mis sueños, pero lo que mas feliz me hace es poder compartirlo y enseñarlo a todos vosotros.`,

      }
    }
  }
}
</script>