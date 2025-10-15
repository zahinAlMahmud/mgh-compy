<!-- src/App.vue -->
<template>
  <div id="app">
    <Home />
    <Home2 />
    <MainContent/>
    <SectionContent/>
    <Single/>
    <!-- <Second/> -->
    <Clients/>
    <OurVision/>
    <Speech/>
    <Believe/>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import Home from './components/Home.vue'
import Home2 from './components/Home2.vue';
import MainContent from './components/MainContent.vue';
// import Second from './components/Second.vue';
import SectionContent from './components/SectionContent.vue';
import Single from './components/Single.vue';
import Clients from './components/Clients.vue';
import OurVision from './components/OurVision.vue';
import Speech from './components/Speech.vue';
import Believe from './components/Believe.vue';
import Footer from './components/Footer.vue';
</script>

<style>
@font-face {
  font-family: "ThunderMed";
  src: url("@/assets/fonts/ThunderMed.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

/* Optional: apply globally */
body {
  font-family: "ThunderMed", sans-serif;
}

</style>
