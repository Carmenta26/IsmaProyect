<template>
  <section class="grid grid-cols-2 md:grid-cols-4 py-10">
    <div
        v-for="link in links"
        class="w-full group relative cursor-pointer items-center justify-center p-3"
    >
      <video class="rounded-video" width="320" height="600" controls>
        <source v-bind:src="link.videoLink" type="video/mp4"/>
      </video>
    </div>
    <div
        v-for="foto in fotos"
        class="group relative cursor-pointer items-center justify-center m-3"
    >
      <img class="rounded-image" width="320" height="600" v-bind:src="foto.imageLink"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsContent',
  data() {
    return {
      links: [
        {
          videoLink:
              'https://drive.google.com/uc?export=download&id=1Y3i7lsNmQL6GU9CqSqIEaiShcFy0SmHU',
        },
        {
          videoLink:
              'https://drive.google.com/uc?export=download&id=1X9jj9Zsj_sU2mB-dR8p7rCPGs1QcChlD',
        },
        {
          videoLink:
              'https://drive.google.com/uc?export=download&id=1IGE2nphQjqQLdno2-jHqfmLyC2OjLZkL',
        },
        {
          videoLink:
              'https://drive.google.com/uc?export=download&id=1KGI5vtLJ7ZivaCPH-rwCjK83Vs-2mlfa',

        },
        {
          videoLink:
              'https://drive.google.com/uc?export=download&id=1GyKYm4x2PAitTNbq3W4DFBdzMqZlxKoh',
        },
      ],
      fotos: [
        {
          imageLink:
              'https://drive.google.com/uc?export=view&id=1A2i-tHQ2CP969xKUQ0lWuOXtmQs8xUNJ',
        },
        {
          imageLink:
              'https://drive.google.com/uc?export=view&id=12h_OEn7CvD-UiIxrXsY5i0XpcsvFFuxW',
        },
        {
          imageLink:
              'https://drive.google.com/uc?export=view&id=1az30bUd0NYAu_sIDhSbaRS06naxsaPA3',
        },
      ],
    };
  },
};
</script>
