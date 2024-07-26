<template>
  <div class="footer-container">
    <div class="footer-section">KEEP SCROLLING <br />TO LEARN MORE</div>

    <div class="footer-nav">
      <div class="footer-nav-title">ABOUT US</div>
      <div class="next-pages">NEXT PAGE -></div>
    </div>
    <div class="footer-icp">
      ICP备案号: <a href="https://beian.miit.gov.cn">湘ICP备2024073097号-1</a>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  width: 100%;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
}

.footer-section {
  width: 100%;
  font-size: 2em;
  text-align: left;
  font-weight: bold;
  padding: 0 2%;
  margin: 20px 0 0 6%;
}

.footer-nav {
  box-sizing: border-box;
  padding: 0 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px;
}

.footer-nav-title {
  font-size: 9em;
  cursor: pointer;
  transition: color 0.3s;
}

.next-pages {
  font-size: 2em;
  cursor: pointer;
  transition: color 0.3s;
}

.footer-nav > div:hover {
  color: #ccc;
}

.footer-icp {
  padding: 0 0 50px 0;
  margin: 20px 0 0 6%;
  width: 100%;
  text-align: left;
  font-size: 13px;
}

.footer-icp a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.footer-icp a:hover {
  color: #ccc;
}
</style>

<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  // Animating the footer section text
  gsap.from(".footer-section", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  });

  // Animating the footer nav titles
  gsap.from(".footer-nav-title", {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });

  gsap.from(".next-pages", {
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });

  // Animating the ICP record info
  gsap.from(".footer-icp", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    ease: "power2.out",
  });
});
</script>
