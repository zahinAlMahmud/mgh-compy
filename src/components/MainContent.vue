<template>
  <div class="hero-section" :style="backgroundStyle">
    <section class="split-section">
      <div class="text-side" data-aos="fade-right">
        <h2 style="color: aliceblue;">Main Concept</h2>
        <p style="color: #004aad;">
          MGH operates across logistics, aviation, and technology sectors —
          empowering global trade through innovation and efficiency.
        </p>
       <button style="border-radius: 8px; background-color:#d9d9d9; color: #000; padding: 10px 20px; border: none; cursor: pointer;">
  Explore More
</button>
      </div>

      <div class="image-side" data-aos="fade-left">
        <img src="@/assets/twopeople2.png" alt="Our Business" />
      </div>
    </section>
  </div>
</template>

<script>
import bgImage from '@/assets/background.png';

export default {
  name: 'Home',
  data() {
    return {
      backgroundStyle: {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '400px', // makes it full viewport height
        display: 'flex',
        alignItems: 'center',
      },
    };
  },
};
</script>

<style>
.hero-section {
  /* fallback background color in case image fails */
  background-color: #f9f9f9;
}

/* Flex container */
.split-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 10%;
  flex-wrap: wrap; /* responsive */
  width: 100%;
}

/* Left side: Text */
.text-side {
  flex: 1;
  min-width: 300px;
  padding-right: 30px;
}

.text-side h2 {
  font-size: 3.5rem;
  color: #004aad;
}

.text-side p {
  font-size: 2rem;
  color: #555;
  margin: 20px 0;
}

.text-side button {
  background-color: #004aad;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

.text-side button:hover {
  background-color: #003080;
}

/* Right side: Image */
.image-side {
  flex: 1;
  min-width: 300px;
  text-align: right;
}

.image-side img {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
