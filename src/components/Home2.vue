<template>
  <nav class="navbar navbar-expand-lg custom-blue-box">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img :src="image" alt="Logo" width="80" height="80" class="d-inline-block align-text-top" />
      </a>

      <!-- Mobile Toggle -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav Links -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav align-items-center">
          <!-- ABOUT US with dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle fontSize text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ABOUT US
            </a>
            <ul class="dropdown-menu">
              <!-- Our Story -->
              <li class="position-relative hover-panel-parent">
                <a class="dropdown-item" href="#">Our Story</a>
                <div class="hover-panel">
                  <h6>Our Story</h6>
                  <p>
                    At MGH, our dedication lies in delivering groundbreaking supply chain solutions that disrupt the norm.
                    With over three decades of logistics expertise, the group takes pride in our role as a worldwide
                    industry frontrunner, facilitating seamless global trade and commerce.
                  </p>
                  <img :src="" alt="Our Story" />
                </div>
              </li>

              <!-- Our Leadership -->
              <li class="position-relative hover-panel-parent">
                <a class="dropdown-item" href="#">Our Leadership</a>
                <div class="hover-panel">
                  <h6>Our Leadership</h6>
                  <p>
                    Our leadership team is composed of seasoned professionals with decades of experience driving innovation and excellence in logistics.
                  </p>
                  <img :src="ourLeadershipImage" alt="Our Leadership" />
                </div>
              </li>

              <!-- Our Presence -->
              <li class="position-relative hover-panel-parent">
                <a class="dropdown-item" href="#">Our Presence</a>
                <div class="hover-panel">
                  <h6>Our Presence</h6>
                  <p>
                    We have a global footprint with offices and operations spanning multiple continents to serve our clients worldwide.
                  </p>
                  <img :src="ourPresenceImage" alt="Our Presence" />
                </div>
              </li>

              <!-- Our Sustainability -->
              <li class="position-relative hover-panel-parent">
                <a class="dropdown-item" href="#">Our Sustainability</a>
                <div class="hover-panel">
                  <h6>Our Sustainability</h6>
                  <p>
                    Committed to sustainable practices, we integrate eco-friendly processes into our supply chain solutions.
                  </p>
                  <img :src="ourSustainabilityImage" alt="Our Sustainability" />
                  <button class="btn btn-success">Read More</button>
                </div>
              </li>
            </ul>
          </li>

          <!-- OUR BUSINESSES dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle fontSize text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              OUR BUSINESSES
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Business 1</a></li>
              <li><a class="dropdown-item" href="#">Business 2</a></li>
            </ul>
          </li>

          <!-- Home -->
          <li class="nav-item">
            <a class="nav-link active fontSize text-white" href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import image from '@/assets/image2.png'

// Import images for each submenu hover panel
import ourStoryImage from 'https://mghgroup.com/sites/mghcorp.vizualize.com/files/2024-09/Our_Story.jpg'
import ourLeadershipImage from '@/assets/image2.png'
import ourPresenceImage from '@/assets/image2.png'
import ourSustainabilityImage from '@/assets/image2.png'
</script>

<style scoped>
.custom-blue-box {
  background-color: #3e74c6;
  color: white;
  padding: 8px;
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
}

.fontSize {
  font-size: 15px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: white;
}

/* Hover panel container */
.hover-panel-parent {
  position: relative;
}

/* The actual hover panel */
.hover-panel {
  display: none;
  position: absolute;
  top: 0;
  right: 100%; /* Show right side of submenu */
  width: 320px;
  background-color: white;
  color: black;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

/* Show panel on hover */
.hover-panel-parent:hover .hover-panel {
  display: block;
}

/* Image styling */
.hover-panel img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 10px;
}

/* Optional: style headings */
.hover-panel h6 {
  margin-bottom: 10px;
  font-weight: 600;
}
</style>
