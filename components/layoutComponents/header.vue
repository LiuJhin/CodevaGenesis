<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import gsap from "gsap";

const router = useRouter();
const showMenu = ref(false);

const jumpMenuLocal = (local) => {
  router.push({
    path: local,
  });
};

const jumpGitHub = () => {
  window.open("https://github.com/LiuJhin/CodevaGenesis");
};

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const additionalMenu = document.querySelector(".additional-menu");

  if (showMenu.value) {
    gsap.to(dropdownMenu, { opacity: 1, display: "block", duration: 0.5 });
    gsap.to(additionalMenu, { opacity: 1, display: "block", duration: 0.5 });
  } else {
    gsap.to(dropdownMenu, { opacity: 0, display: "none", duration: 0.5 });
    gsap.to(additionalMenu, { opacity: 0, display: "none", duration: 0.5 });
  }
};

const closeMenu = (event) => {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const additionalMenu = document.querySelector(".additional-menu");

  if (
    showMenu.value &&
    !dropdownMenu.contains(event.target) &&
    !additionalMenu.contains(event.target) &&
    !event.target.closest(".menu-button")
  ) {
    showMenu.value = false;
    gsap.to(dropdownMenu, { opacity: 0, display: "none", duration: 0.5 });
    gsap.to(additionalMenu, { opacity: 0, display: "none", duration: 0.5 });
  }
};

onMounted(() => {
  document.addEventListener("click", closeMenu);
});

onUnmounted(() => {
  document.removeEventListener("click", closeMenu);
});

const navigateTo = (section) => {
  console.log(`Navigating to ${section}`);
};
</script>

<template>
  <div class="home_header">
    <div class="header-title" @click="jumpMenuLocal('/')">CodeVa Genesis</div>
    <div class="header-buttons">
      <button class="talk-button">LET'S TALK</button>
      <div class="menu-container">
        <button class="menu-button" @click="toggleMenu">MENU</button>
        <div ref="dropdownMenu" class="dropdown-menu">
          <ul>
            <li @click="jumpMenuLocal('/home')">HOME</li>
            <li @click="jumpMenuLocal('/about-us')">ABOUT US</li>
            <li @click="jumpMenuLocal('/project')">PROJECT</li>
            <li @click="navigateTo('contact')">CONTACT</li>
            <li @click="navigateTo('project')">DEVELOPMENT</li>
          </ul>
        </div>
        <div ref="additionalMenu" class="dropdown-menu additional-menu">
          <ul>
            <li @click="jumpGitHub()">GitHub</li>
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
  display: none; /* Hide initially */
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
  top: calc(130% + 200px); /* Adjust based on the height of the previous menu */
}
</style>
