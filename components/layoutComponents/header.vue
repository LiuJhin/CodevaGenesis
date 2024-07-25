<template>
  <div class="home_header">
    <div class="header-title">CodeVa Genesis</div>
    <div class="header-buttons">
      <button class="talk-button">LET'S TALK</button>
      <div class="menu-container">
        <button class="menu-button" @click="toggleMenu">MENU</button>
        <div v-if="showMenu" class="dropdown-menu">
          <ul>
            <li @click="navigateTo('home')">HOME</li>
            <li @click="navigateTo('/about-us')">ABOUT US</li>
            <li @click="navigateTo('project')">PROJECT</li>
            <li @click="navigateTo('contact')">CONTACT</li>
          </ul>
        </div>

        <div v-if="showMenu" class="dropdown-menu additional-menu">
          <ul>
            <li @click="navigateTo('github')">GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home_header {
  padding: 2% 2%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  margin: 0 auto;
}

.header-title {
  margin-left: 3%;
  font-size: 2.5em;
  font-weight: bold;
  color: #333;
}

.header-buttons {
  margin-right: 5%;
  display: flex;
  gap: 10px;
}

.talk-button,
.menu-button {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: #000000;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.talk-button:hover,
.menu-button:hover {
  background-color: #0056b3;
}

.menu-container {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 130%; /* Align below the menu button */
  left: -150%; /* Align with the left edge of the menu button */
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  width: 200px;
  margin-top: 10px;
}

.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu li {
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
  border-radius: 8px;

}

.additional-menu {
  top: calc(130% + 160px); /* Adjust based on the height of the previous menu */
}
</style>

<script setup>
import { ref } from 'vue';

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const navigateTo = (section) => {
  console.log(`Navigating to ${section}`);
  // Add your navigation logic here, e.g., using Vue Router
};
</script>