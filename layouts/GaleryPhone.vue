<template>
  <div class="bod">
    <div class="gallery" id="gallery">
      <div class="gallery-item">
        <div class="content"><img src="/assets/Transforms/1.jpg" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://images.pexels.com/photos/15569152/pexels-photo-15569152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,substance" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,choose" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,past" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,lamp" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,yet" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,eight" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,crew" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,event" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,instrument" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,practical" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,pass" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,bigger" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,number" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,feature" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,line" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,railroad" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,pride" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,too" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,bottle" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,base" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,cell" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,bag" alt=""></div>
      </div>
      <div class="gallery-item">
        <div class="content"><img src="https://source.unsplash.com/random/?tech,card" alt=""></div>
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
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
      });
    };
    gallery.querySelectorAll('img').forEach(function (item) {
      item.classList.add('byebye');
      item.addEventListener('load', function () {
        var altura = getVal(gallery, 'grid-auto-rows');
        var gap = getVal(gallery, 'grid-row-gap');
        var gitem = item.parentElement.parentElement;
        gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
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