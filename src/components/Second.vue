<template>
  <section class="slider-section" data-aos="fade-right">
    <div class="slider-container">
      <transition name="fade" mode="out-in">
        <!-- Image slide -->
        <img
          v-if="sliders[currentIndex].image"
          :key="'img-' + sliders[currentIndex].id"
          :src="sliders[currentIndex].image"
          class="slider-media"
        />
        <!-- Video slide -->
        <video
          v-else-if="sliders[currentIndex].video"
          :key="'video-' + sliders[currentIndex].id"
          :src="sliders[currentIndex].video"
          autoplay
          muted
          loop
          playsinline
          class="slider-media"
        ></video>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { sliders as initialSliders } from '@/data/data.js'

const sliders = ref(initialSliders)
const currentIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % sliders.value.length
  }, 5000)
})
</script>

<style scoped>
/* Full screen slider section */
.slider-section {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #111; /* optional background for empty areas */
}

/* Container for padding/margin and shadow */
.slider-container {
  width: 95%;
  height: 95%;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000; /* optional, for contrast */
}

/* Fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Media styling */
.slider-media {
  width: 100%;
  height: 100%;
  object-fit: cover; /* change to 'contain' if you want the full image visible */
  border-radius: 10px;
  display: block;
}
</style>
