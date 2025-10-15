<template>
  <div class="ceo-section">
    <!-- Image Side -->
    <div class="ceo-image" data-aos="slide-right">
      <img src="@/assets/speech.png" alt="CEO Image" />
    </div>

    <!-- Text Side -->
    <div class="ceo-text" data-aos="slide-left">
      <p class="ceo-quote">
        As an 'accidental' entrepreneur, my journey began in June 1992 when I started MGH after leaving my father's business. Inspired by his advice, the group has evolved into a Singapore-based global brand. Now, converging all our capabilities into a singular e-commerce platform, we aim to impact over 1 billion lives, and the only way we see is up.
      </p>
      <p class="ceo-name">
        Micheal Jackson<br />
        Founder & Group CEO<br />
        Group 
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ceo-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  max-width: 1200px;       /* Wider container */
  margin: 0 auto;
  padding: 40px 20px;
}

.ceo-image {
  flex: 1.2;               /* Image takes more space than text */
}

.ceo-image img {
  width: 100%;
  max-height: 600px;       /* Set maximum height */
  object-fit: cover;
  border-radius: 10px;
}

.ceo-text {
  flex: 0.8;               /* Text takes smaller portion */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.ceo-quote {
  font-size: 1.2rem;       /* Slightly bigger text */
  line-height: 1.8;
  margin-bottom: 20px;
  color: #333;
}

.ceo-name {
  font-weight: bold;
  font-size: 1rem;
  color: #555;
}

/* Responsive: stack image above text on smaller screens */
@media (max-width: 768px) {
  .ceo-section {
    flex-direction: column;
    text-align: center;
  }

  .ceo-text {
    justify-content: flex-start;
  }
}
</style>
