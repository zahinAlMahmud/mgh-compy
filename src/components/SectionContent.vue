<template>
  <div :style="BackgroundStyle" class="business-gallery">
    <h2 data-aos="flip-left">Our Businesses</h2>
    <p>Catalysing your evolution. With partnerships that give a springboard to your ambitions.</p>

    <div class="scroll-wrapper" data-aos="fade-up-right">
      <div class="scroll-track">
        <div class="gallery-item" v-for="(img, index) in repeatedImages" :key="index">
          <img :src="img.src" :alt="img.alt" />
          <div class="caption">{{ img.caption }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/1.png';
import img2 from '@/assets/logo.png';
import img3 from '@/assets/metaheed.png';

export default {
  data() {
    return {
      images: [
        { src: img1, alt: 'MGH Logistics', caption: 'GreenCyberSec.net' },
        { src: img2, alt: 'MULTI GROUP', caption: 'MULTI GROUP' },
        { src: img3, alt: 'Metaheed', caption: 'Metaheed' },
      ],
      BackgroundStyle: {
        backgroundColor: '#3f3392',
        color: 'white',
        padding: '60px 0',
      },
    };
  },
  computed: {
    repeatedImages() {
      // repeat images to make infinite scroll effect
      return [...this.images, ...this.images];
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-align: center;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  text-align: center;
}

/* Scroll wrapper */
.scroll-wrapper {
  overflow: hidden;
  width: 100%;
}

/* Infinite scrolling track */
.scroll-track {
  display: flex;
  width: calc(300px * 6); /* 3 images repeated twice = 6 items */
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* half width, because images are repeated */
}

/* Gallery items */
.gallery-item {
  min-width: 300px;
  flex: 0 0 auto;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  margin-right: 20px;
  transition: transform 0.3s;
}

.gallery-item img {
  width: 80%;
  height: 400px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

/* Caption overlay */
.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.6);
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}
</style>
