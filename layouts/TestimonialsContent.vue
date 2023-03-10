<template>
  <section
    class="sm:grid sm:grid-cols-2  items-center lg:flex mt-4 mb-4 items-center justify-center bg-cover bg-center relative overflow-hidden"
  >
    <div
      v-for="link in links"
      class="group relative cursor-pointer items-center justify-center m-3"
    >
      <video class="rounded-video" width="320" height="600" controls>
        <source v-bind:src="link.videoLink" type="video/mp4" />
      </video>
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
      ],
    };
  },
};
</script>
