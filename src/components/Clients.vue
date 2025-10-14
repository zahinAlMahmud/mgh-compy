<template>
  <section class="py-5 bg-light">
    <div class="container text-center">
      <h2 class="mb-4 fw-bold">Our Clients & Media</h2>

      <div class="row g-4">
        <!-- Loop through sliders -->
        <div
          v-for="item in sliders"
          :key="item.id"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <div class="card shadow-sm border-0 h-100">
            <!-- Image card -->
            <img
              v-if="item.image"
              :src="item.image"
              alt="Client Media"
              class="card-img-top media-item"
            />

            <!-- Video thumbnail -->
            <div
              v-else-if="item.video"
              class="video-thumbnail"
              @mouseenter="showVideo(item.video)"
            >
             <video
  :src="item.video"
  class="card-img-top media-item"
  muted
  autoplay
  loop
  playsinline
  @mouseenter="showVideo(item.video)"
></video>
            </div>

            <div class="card-body">
              <h6 class="card-title mb-0">Client — {{ item.id }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Modal -->
    <div v-if="activeVideo" class="video-overlay" @mouseleave="closeVideo">
      <div class="video-container">
        <video :src="activeVideo" autoplay muted loop controls></video>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { sliders } from "../data/data.js";

const activeVideo = ref(null);

const showVideo = (videoUrl) => {
  activeVideo.value = videoUrl;
};

const closeVideo = () => {
  activeVideo.value = null;
};
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.media-item {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
}

/* Overlay for fullscreen video */
.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.video-container video {
  width: 70vw;
  max-width: 900px;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}
</style>
