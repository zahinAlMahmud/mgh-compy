<template>
  <section class="vision-section">
    <div class="container">
      <h3 data-aos="flip-right"><span>//</span> Our Vision</h3>
      <hr />
    </div>
    <div class="description">
      <p>Empowering organizations to thrive securely in a connected world — where data, trust, and technology work together</p>

    </div>
  </section>
</template>

<script setup>
// No logic needed yet — script left empty intentionally
</script>

<style scoped>
.vision-section {
  padding: 40px 0;
  background-color: #f9f9f9; /* optional subtle bg */
}

.container {
  text-align: start;
}

h3 {
  font-size: 24px;
  font-weight: 700;
  font-family: "Thundermed" sans-serif;
  color: #000;
  margin-bottom: 10px;
}

h3 span {
  font-weight: 900;
  color: #000;
  margin-right: 10px;
  letter-spacing: 2px;
}

hr {
  width: 100%;
  border: 2px solid #000;
  margin: 10px auto;
  text-align: start;
}
.description{
  padding: 20px;
  margin-left: 40px;
}
.description p {
  font-size: 50px;
  font-family: "Thundermed";
  padding: 20px;
}
</style>
