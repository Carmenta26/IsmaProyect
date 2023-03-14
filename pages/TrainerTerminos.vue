<template>
  <div>
    <NavbarToTerms>
      <section class="grid justify-items-center place-content-center" id="inicio">
        <div class="px-4 py-10 sm:w-3/4">
          <div class=" gap-11 grid lg:flex">
            <div>
              <TrainerSubtitle title="¡Política de Privacidad!"/>
              <TrainerDescription description="SU PRIVACIDAD ES IMPORTANTE" text-style="font-bold"/>
              <TrainerDescription :description="terminos.description1"/>
              <br>
              <TrainerDescription description="TU CONSENTIMIENTO" text-style="font-bold"/>
              <TrainerDescription :description="terminos.description2"/>
              <br>
              <TrainerDescription description="COMUNICACIÓN Y MARKETING" text-style="font-bold"/>
              <TrainerDescription :description="terminos.description3"/>
              <br>
              <TrainerDescription description="COOKIES" text-style="font-bold"/>
              <TrainerDescription :description="terminos.description4"/>
              <br>
              <TrainerDescription description="REMARKETING DE GOOGLE" text-style="font-bold"/>
              <TrainerDescription :description="terminos.description5"/>
              <br>
              <TrainerDescription :description="terminos.description6"/>
              <br>
              <TrainerDescription description="SITIOS DE TERCEROS" text-style="font-bold"/>
              <TrainerDescription :description="terminos.description7"/>
              <br>
              <TrainerDescription description="VERIFICANDO TUS DETALLES" text-style="font-bold"/>
              <TrainerDescription :description="terminos.description8"/>
              <br>
              <TrainerDescription description="CONTACTENOS" text-style="font-bold"/>
              <TrainerDescription :description="terminos.description9"/>
              <br>
              <TrainerDescription description="AVISO LEGAL" text-style="font-bold"/>
              <TrainerDescription description="AVISO LEGAL IMPORTANTE" text-style="font-bold"/>
              <br>
              <TrainerDescription description="RIESGOS DEL USO DEL PRODUCTO" text-style="font-bold"/>
              <TrainerDescription :description="terminos.description11"/>

              <TrainerDescription :description="terminos.description12"/>

              <TrainerDescription :description="terminos.description13"/>


              <TrainerDescription :description="terminos.description14"/>


              <TrainerDescription :description="terminos.description15"/>

              <TrainerDescription :description="terminos.description16"/>

              <TrainerDescription :description="terminos.description17"/>
              <br>
              <TrainerDescription description="RESULTADOS GENERALMENTE ESPERADOS" text-style="font-bold"/>
              <TrainerDescription :description="terminos.description18"/>
              <br>
              <TrainerDescription description="RENUNCIA DE RESPONSABILIDAD TESTIMONIAL" text-style="font-bold"/>
              <TrainerDescription :description="terminos.description19"/>
              <br>
              <TrainerDescription description="INFORMACIÓN DE FACTURACIÓN DE LA SUSCRIPCIÓN RECURRENTE IMPORTANTE"
                                  text-style="font-bold"/>
              <TrainerDescription :description="terminos.description20"/>

              <TrainerDescription :description="terminos.description21"/>

              <TrainerDescription :description="terminos.description22"/>
              <TrainerDescription :description="terminos.description23"/>
            </div>
          </div>
        </div>
      </section>
    </NavbarToTerms>
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
import TestimonialsContent from "~/layouts/TestimonialsContent.vue";
import NavbarToTerms from "~/layouts/NavbarToTerms.vue";


export default {
  name: "TrainerTerminos",
  components: {
    NavbarToTerms,
    TestimonialsContent,
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
  },
  data: () => {
    return {

      terminos: {
        description1: 'Estamos totalmente comprometidos con la protección de la privacidad de los visitantes y clientes de nuestro sitio, apreciamos y respetamos plenamente la importancia de la privacidad en Internet. No divulgaremos información sobre nuestros clientes a terceros, excepto en el caso de que sea parte de un servicio para usted, por ejemplo, organizar el envío de un producto, realizar comprobaciones de crédito y otros controles de seguridad. Para fines de investigación y creación de perfiles de los clientes, o cuando tengamos su permiso expreso para hacerlo.\n',
        description2: 'No venderemos su nombre, dirección, dirección de correo electrónico, información de su tarjeta de crédito o información personal a ningún tercero (excluyendo a los socios a los que usted pueda haber vinculado a nuestro sitio) sin su permiso.\n',
        description3: 'Si ha realizado una compra en mi tienda, es posible que ocasionalmente le envíe actualizaciones de nuestros nuevos productos, noticias y ofertas especiales por correo electrónico. Todos nuestros clientes tienen la opción de optar por no recibir comunicaciones de marketing de parte mía y / o terceros seleccionados. Si no desea continuar recibiendo promociones de mi parte y / o de terceros seleccionados al finalizar la compra.',
        description4: 'Una cookie es un pequeño archivo de información que se envía a su computadora y se almacena en su disco duro. Si se ha registrado con nosotros, su computadora almacenará una cookie de identificación que le ahorrará tiempo cada vez que vuelva a visitar nuestro sitio, al recordar su dirección de correo electrónico. Puede cambiar la configuración de su navegador para evitar que las cookies se almacenen en su computadora sin su consentimiento explícito.\n',
        description5: 'Este sitio web utiliza el servicio de remarketing de Google AdWords para anunciarse en sitios web de terceros (incluido Google) a los visitantes anteriores de nuestro sitio. Podría significar que anunciamos a visitantes anteriores que no completaron una tarea en nuestro sitio, por ejemplo, utilizando el formulario de contacto para realizar una consulta. Esto podría ser una publicidad en la página de resultados de búsqueda de Google o un sitio en la Red de Display de Google. Los proveedores de terceros, incluido Google, usan cookies para publicar anuncios basados en las visitas anteriores de alguien a nuestro sitio. Por supuesto, cualquier información recopilada se usará de acuerdo con nuestra propia política de privacidad y la política de privacidad de Google.\n',
        description6: 'Puede establecer preferencias sobre cómo Google le anuncia mediante la página de preferencias de anuncios de Google y, si lo desea, puede optar por excluirse de la publicidad basada en intereses por completo mediante la configuración de cookies o utilizando permanentemente un complemento de navegador.\n',
        description7: 'Este sitio puede contener enlaces hacia y desde los sitios web de nuestras redes asociadas, anunciantes y otros terceros. Si sigue un enlace a cualquiera de estos sitios web, tenga en cuenta que tienen sus propias políticas de privacidad y que no aceptamos responsabilidad alguna por estas políticas. Consulte estas políticas antes de enviar datos personales a estos sitios web.\n',
        description8: 'Si desea verificar los detalles que nos ha enviado, puede hacerlo comunicándose con nosotros a través de la dirección de correo electrónico que se indica a continuación. Nuestros procedimientos de seguridad significan que podemos solicitar una prueba de identidad antes de revelar información. Esta prueba de identidad se basará en su dirección de correo electrónico y contraseña enviada al registrarse. Por lo tanto, debe mantener esta información segura ya que será responsable de cualquier acción que tomemos en respuesta a una solicitud de alguien que utilice su correo electrónico y contraseña. Recomendamos encarecidamente que no utilice la función de memoria de contraseña del navegador, ya que permitiría a otras personas que usan su terminal acceder a su información personal.\n',
        description9: 'Siempre nos complace escucharte (¡incluso si es una queja!). Siempre estamos agradecidos por el tiempo que nos dedicas, brindándonos el conocimiento que necesitamos para asegurar que nuestros clientes estén completamente satisfechos. Queremos que regrese al sitio y nos recomiende a sus amigos y familiares. Si tiene alguna pregunta o comentario sobre esta declaración, o si desea que dejemos de procesar su información, no dude en ponerse en contacto con fitbyisma@gmail.com, quien estará encantado de responder cualquier pregunta que pueda tener.\n' + '\n',
        description11: 'El contenido de este sitio web no reemplaza a la atención médica ni al diagnóstico directo, personal y profesional. Ninguno de los planes de comidas o programas de ejercicios debe realizarse o usarse de otra manera sin la autorización previa de su médico o proveedor de atención médica. La información contenida en este documento no tiene la intención de proporcionar consejos específicos de salud física o mental, o cualquier otro consejo, para ninguna persona o empresa y no se debe confiar en ese aspecto. No somos profesionales médicos y nada en este sitio web debe malinterpretarse en el sentido contrario.\n' + '\n',
        description12: 'Puede haber riesgos asociados con la participación en actividades mencionadas en nuestro sitio para personas con problemas de salud o con afecciones físicas o mentales preexistentes. Debido a que existen estos riesgos, no participará en ningún plan de comidas disponible de nosotros si tiene mala salud o tiene una condición mental o física preexistente. Si elige participar en estos riesgos, lo hace por su propia voluntad y acuerdo, asumiendo a sabiendas y voluntariamente todos los riesgos asociados con tales actividades dietéticas.',
        description13: 'Estos riesgos también pueden existir para aquellos que actualmente gozan de buena salud en este momento.\n' + '\n',
        description14: 'Como con cualquier programa de ejercicios, usted asume ciertos riesgos para su salud y seguridad. Cualquier forma de programa de ejercicios puede causar lesiones, y nuestros programas no son una excepción. Es posible que se lastime haciendo los ejercicios en su programa, especialmente si los ejecuta con una mala forma o técnica. Aunque se incluye una instrucción completa en el formulario para cada ejercicio.\n' + '\n',
        description15: 'Tenga en cuenta que nuestros programas (como cualquier otro programa de ejercicios) implican un riesgo de lesión. Si elige participar en estos riesgos, lo hace por su propia voluntad y acuerdo, asumiendo a sabiendas y voluntariamente todos los riesgos asociados con tales actividades de ejercicio. Estos riesgos también pueden existir para aquellos que actualmente gozan de buena salud en este momento.\n',
        description16: 'No somos médicos. Nuestros consejos, ya sea en nuestro sitio web, en nuestro plan de comidas, en nuestro programa de ejercicios o por correo electrónico, no pretenden sustituir el asesoramiento médico. Debe consultar a su médico antes de comenzar CUALQUIER plan de comidas o programa de ejercicios, sin excepciones. Está utilizando nuestros planes, programas de entrenamientos y tutorías bajo su propio riesgo y no somos responsables de ninguna lesión o problema de salud que pueda experimentar o incluso la muerte como resultado del uso de nuestros programas.\n',
        description17: 'Se debe aclarar que no somos responsables de ninguna lesión o problema de salud que pueda experimentar o incluso la muerte como resultado del uso de cualquiera de nuestros productos o servicios.\n',
        description18: 'Aunque nuestros productos y servicios están destinados a ser implementados en su totalidad, a veces no lo son, lo que podría resultar en una falta de progreso / resultados para el usuario. Si implementa correctamente nuestros productos y servicios, debería ver resultados satisfactorios, sin embargo, debe aclararse que incluso cuando los consumidores implementen todos nuestros productos o servicios, aun así es posible que no obtengan los resultados que podrían haber esperado y también es posible que no pierdan grasa ni ganan músculo ni tengan ningún resultado positivo de ningún tipo.',
        description19: 'Todas las transformaciones y testimonios son reales. Sin embargo, se aclara que estos testimonios no representan resultados típicos con nuestros planes de comidas y programas de entrenamiento. Están diseñados como una vitrina de lo que las personas más motivadas y dedicadas pueden lograr siguiendo nuestros planes de entrenamiento y plan de comidas personalizados. Tus resultados pueden variar y es posible que no obtengas los mismos resultados en comparación con otra persona cuando utiliza nuestros servicios debido a diferencias en su historial de ejercicio individual, genética y motivación / dedicación personal. Los resultados finales que obtenga dependen del individuo y de cuanto esfuerzo ponga.\n',
        description20: 'Si compra nuestro programa, se le cobrará automáticamente cada periodo y continuará recibiendo nuevos planes de comidas y programas de entrenamiento actualizados durante el tiempo que elija seguir siendo cliente. Para cancelar su suscripción, simplemente envíe un correo electrónico a fitbyisma@gmail.com al menos 3 días (72h de antelacion) antes de su próximo día de facturación.\n',
        description21: 'Al obtener el plan mensual, existe una permanencia de 3 meses como el propio Ismael (su entrenador) le haya explicado en la previa llamada o similar. Es decir los programas son siempre trimestrales, por tanto si el cliente supera esos 3 meses puede cancelar o continuar otros 3 meses mas. No se le hara un reembolso ni se le cancelara la suscripcion en caso de llevar 1,2, 4 o 5 meses\n',
        description22: 'Con nuestros productos en línea, tenemos una garantía de devolución del dinero de 14 días: si dentro de los primeros 14 días de su compra inicial no esta satisfecho con alguna de sus compras (servicios de suscripción y sin suscripción) por la razón de no haber conseguido resultados con el previo seguimiento del plan, es decir que conste en la app que lo ha seguido, simplemente solicite un reembolso completo poniéndose en contacto con el equipo de Atención al cliente. Se le reembolsará y se cancelará su suscripción. Sin embargo, si ha comprado un programa durante un periodo promocional y ha canjeado esa promoción (por ejemplo, suplementos, ropa, auriculares), no será elegible para un reembolso.\n',
        description23: 'Si el cliente realiza la compra y  obtiene su programa y pide un reembolso en los proximos 1 a 13 dias de obtenerlo, no se le reembolsara nada del importe.\n' +
            '¿Tiene preguntas acerca de esto? ¡Envíanos un email! Puedes ponerte en contacto con nuestro equipo de atención al cliente en fitbyisma@gmail.com y estaremos encantados de responder a cualquiera de sus preguntas\n'

      },

    }
  }
}

</script>

