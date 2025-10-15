<template>
  <section class="vision-section">
    <div class="container">
      <h3 data-aos="flip-right"><span>//</span> Sharing Is Caring</h3>
      <hr />
      <div class="content" data-aos="fadeIn">
        <div class="text">
          <h3>MultiGroup</h3>
          <p>
            Multi Group BD is a diversified Bangladeshi conglomerate established in 2008, specializing in international trade, industrial solutions, and technology integration. With over 250 completed projects and a network of 12 sister companies, Multi Group BD has become a recognized leader in sectors such as agriculture, construction, IT, and security solutions.
          </p>
        </div>
        <div class="image">
          <img src="@/assets/green.png" alt="Group of People" />
        </div>
      </div>
    </div>
      <div class="container">
      <!-- <h3 data-aos="flip-right"><span>//</span> Sharing Is Caring</h3> -->
      
      <hr />
      <div class="content" data-aos="fadeIn">
        <div class="text">
          <h2>CloudLoop</h2>
          <p>
            Multi Group BD is a diversified Bangladeshi conglomerate established in 2008, specializing in international trade, industrial solutions, and technology integration. With over 250 completed projects and a network of 12 sister companies, Multi Group BD has become a recognized leader in sectors such as agriculture, construction, IT, and security solutions.
          </p>
        </div>
        <div class="image">
          <img src="@/assets/cloudloop.png" alt="Group of People" />
        </div>
      </div>
    </div>
        <div class="container">
      <!-- <h3 data-aos="flip-right"><span>//</span> Sharing Is Caring</h3> -->
      <hr />
      <div class="content" data-aos="fadeIn">
        <div class="text">
            <h2>Green CyberSec Ltd </h2>
          <p>
            Green CyberSec Ltd. is a cybersecurity company founded in May 2024, with offices in both Bangladesh and the UK. The company specializes in providing comprehensive cybersecurity solutions to safeguard digital ecosystems. Their services encompass a wide range of areas, including cybersecurity audits, IT risk assessments, cloud security, DevSecOps, vulnerability assessments, blockchain technology, Web3 security, and digital forensics. Green CyberSec Ltd. aims to empower organizations to stay secure in an increasingly digital world by offering advanced protection for critical infrastructure, data privacy, and threat mitigation</p>
        </div>
        <div class="image">
          <img src="@/assets/groupofpeople.jpg" alt="Group of People" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed yet
</script>

<style scoped>
.vision-section {
  padding: 60px 20px;
  background-color: #f9f9f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h3 {
  font-size: 28px;
  font-weight: 700;
  font-family: "Thundermed", sans-serif;
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
  margin-bottom: 30px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap; /* allows wrapping on smaller screens */
}

.text {
  flex: 1; /* takes up available space */
  min-width: 300px; /* prevents text from shrinking too much */
}

.text p {
  font-size: 18px;
  line-height: 1.6;
  font-family: "Thundermed", sans-serif;
  color: #333;
}

.image {
  flex: 1; /* image takes equal space */
  min-width: 300px;
  text-align: center;
}

.image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

/* Responsive layout for smaller screens */
@media (max-width: 768px) {
  .content {
    flex-direction: column; /* stack text and image */
    text-align: center;
  }

  .text p {
    font-size: 16px;
  }
}
</style>
