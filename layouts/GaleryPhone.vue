<template>
  <div class="bod">
    <div class="gallery" id="gallery">
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/1.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/2.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/3.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/4.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/5.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/6.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/7.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/8.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/9.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/10.JPEG" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/11.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/12.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/13.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/14.jpg" alt=""></div>
      </div>

    </div>
    </div>
</template>

<script>
export default {
  name: "GaleryPhone",
  mounted() {
    var gallery = document.querySelector('#gallery');
    var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
    var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
    var resizeAll = function () {
      var altura = getVal(gallery, 'grid-auto-rows');
      var gap = getVal(gallery, 'grid-row-gap');
      gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil(((getHeight(item) + gap) / (altura + gap)) );
      });
    };
    gallery.querySelectorAll('img').forEach(function (item) {
      item.classList.add('byebye');
      item.addEventListener('load', function () {
        var altura = getVal(gallery, 'grid-auto-rows');

        var gap = getVal(gallery, 'grid-row-gap');
        var gitem = item.parentElement.parentElement;
        gitem.style.gridRowEnd = "span " + Math.ceil(((getHeight(gitem) + gap) / (altura + gap)));
        item.classList.remove('byebye');
      });
    });
    window.addEventListener('resize', resizeAll);
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {
        item.classList.toggle('full');
      });
    })},

  }
</script>