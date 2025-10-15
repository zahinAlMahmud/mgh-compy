<template>
  <footer class="bg-dark text-white pt-5 pb-3">
    <div class="container">
      <div class="row">

        <!-- About Section -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">About Us</h5>
          <p>
            We are committed to delivering innovative digital solutions that empower businesses and individuals worldwide.
          </p>
        </div>

        <!-- Links Section -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="#home" class="text-white text-decoration-none">Home</a></li>
            <li><a href="#services" class="text-white text-decoration-none">Services</a></li>
            <li><a href="#about" class="text-white text-decoration-none">About</a></li>
            <li><a href="#contact" class="text-white text-decoration-none">Contact</a></li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Contact Us</h5>
          <p class="mb-1">123 Street Name, City, Country</p>
          <p class="mb-1">Phone: +123 456 7890</p>
          <p>Email: info@example.com</p>
        </div>

      </div>

      <!-- Bottom -->
      <div class="text-center border-top pt-3 mt-3">
        &copy; 2025 Your Company. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
a.text-white:hover {
  color: #cccccc !important; /* Slight hover effect */
  transition: color 0.3s;
}
</style>
