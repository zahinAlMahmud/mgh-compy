<script setup>
// Logo
import image from '@/assets/image2.png'

// Images for submenu hover panels
import ourStoryImage from '@/assets/groupofpeople.jpg'
import ourLeadershipImage from '@/assets/leadership.jpg'
import ourPresenceImage from '@/assets/car.jpg'
import ourSustainabilityImage from '@/assets/sustainablitiy.jpg'
import darazImage from '@/assets/Daraz_Logo.png'
import nginxImage from '@/assets/nginx.png'
import odooImage from '@/assets/odoo.jpg'
import raceItImage from '@/assets/raceit.jpg'
import carvinalImage from '@/assets/carnival.png'
import wazuhImage from '@/assets/wazuh.png'
</script>

<template>
<nav class="navbar navbar-expand-lg custom-blue-box">
  <div class="container-fluid">
    <!-- Logo -->
    <a class="navbar-brand" href="#">
      <img :src="image" alt="Logo" width="80" height="80" class="d-inline-block align-text-top" />
    </a>

    <!-- Mobile Toggle -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Nav Links -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav align-items-center">

        <!-- ABOUT US Dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fontSize text-white" href="#" role="button" data-bs-toggle="dropdown">
            ABOUT US
          </a>
          <ul class="dropdown-menu">
            <li class="position-relative hover-panel-parent">
              <a class="dropdown-item" href="#">Our Story</a>
              <div class="hover-panel">
                <h6>Our Story</h6>
                <p>At MGH, our dedication lies in delivering groundbreaking supply chain solutions...</p>
                <img :src="ourStoryImage" alt="Our Story" />
              </div>
            </li>

            <li class="position-relative hover-panel-parent">
              <a class="dropdown-item" href="#">Our Leadership</a>
              <div class="hover-panel">
                <h6>Our Leadership</h6>
                <p>Our leadership team is composed of seasoned professionals...</p>
                <img :src="ourLeadershipImage" alt="Our Leadership" />
              </div>
            </li>

            <li class="position-relative hover-panel-parent">
              <a class="dropdown-item" href="#">Our Presence</a>
              <div class="hover-panel">
                <h6>Our Presence</h6>
                <p>We have a global footprint with offices spanning multiple continents...</p>
                <img :src="ourPresenceImage" alt="Our Presence" />
              </div>
            </li>

            <li class="position-relative hover-panel-parent">
              <a class="dropdown-item" href="#">Our Sustainability</a>
              <div class="hover-panel">
                <h6>Our Sustainability</h6>
                <p>Committed to sustainable practices, we integrate eco-friendly processes...</p>
                <img :src="ourSustainabilityImage" alt="Our Sustainability" />
                <button class="btn btn-success mt-2">Read More</button>
              </div>
            </li>
          </ul>
        </li>

        <!-- BUSINESS TO BUSINESS Dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fontSize text-white" href="#" role="button" data-bs-toggle="dropdown">
            BUSINESS TO BUSINESS
          </a>
          <ul class="dropdown-menu">
            <li class="position-relative hover-panel-parent">
              <a class="dropdown-item" href="#">Amazon</a>
              <div class="hover-panel">
                <h6>Amazon</h6>
                <p>Partnering with Amazon for e-commerce logistics...</p>
                <img :src="darazImage" alt="Amazon" />
              </div>
            </li>
            <li class="position-relative hover-panel-parent">
              <a class="dropdown-item" href="#">Odoo</a>
              <div class="hover-panel">
                <h6>Odoo</h6>
                <p>Providing integrated ERP and automation solutions...</p>
                <img :src="odooImage" alt="Odoo" />
              </div>
            </li>
            <li class="position-relative hover-panel-parent">
              <a class="dropdown-item" href="#">Wazuh</a>
              <div class="hover-panel">
                <h6>Wazuh</h6>
                <p>Implementing open-source security monitoring and threat detection...</p>
                <img :src="wazuhImage" alt="Wazuh" />
              </div>
            </li>
            <li class="position-relative hover-panel-parent">
              <a class="dropdown-item" href="#">Nginx</a>
              <div class="hover-panel">
                <h6>Nginx</h6>
                <p>Utilizing Nginx for high-performance web hosting and reverse proxy solutions...</p>
                <img :src="nginxImage" alt="Nginx" />
              </div>
            </li>
          </ul>
        </li>

        <!-- Home Link -->
        <li class="nav-item">
          <a class="nav-link active fontSize text-white" href="#">Home</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
</template>

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
  right: 100%;
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
