<template>
  <div :style="BackgroundStyle">
    <h4 style="margin-left: 250px;">A trusted network of satisfied and successful customers</h4>
    <div class="cards-container" data-aos="flip-right">
    <!-- Loop over cards -->
    <div class="card" v-for="(service, index) in services" :key="index">
      <div class="card-body">
        <h4>{{ service.heading }}</h4>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BackgroundStyle: {
        backgroundColor: '#000',
        color: 'white',
        padding: '60px 0',
        height: '250px',
      },
     services: [
      {
        heading: "Cybersecurity",
        text: "Protect your digital assets with advanced threat detection and security measures."
      },
      {
        heading: "Email Security",
        text: "Secure your email communications and prevent phishing, malware, and spam attacks."
      },
      {
        heading: "Big Data",
        text: "Leverage big data analytics to gain insights and make data-driven decisions."
      },
      {
        heading: "Firewall",
        text: "Implement robust firewall solutions to safeguard your network from unauthorized access."
      },
      {
        heading: "Cloud Security",
        text: "Ensure your cloud infrastructure and applications remain secure and compliant."
      },

    ],
    };
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  gap: 20px; /* space between cards */
  flex-wrap: wrap; /* wrap to next line if needed */
  justify-content: center; /* center cards horizontally */
}

.card {
  border: 2px solid black;
  background-color: transparent;
  border-radius: 8px;
  width: 200px;
}

.card-body {
  padding: 15px;
  text-align: center;      /* center text */
  color: white;            /* white text */
  font-weight: bold;       /* bold text */
  font-size: 16px; 
  border: 2px solid #d9d9d9;
          /* font size */
}
</style>
