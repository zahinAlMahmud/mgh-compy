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
</script>

<style>
/* global styles if any */
</style>
