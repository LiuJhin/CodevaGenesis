<template>
  <div class="containers">
    <h1 class="title">欢迎来到我的页面</h1>
    <div class="particles"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    // 背景渐变动画
    gsap.to(".container", {
      backgroundPosition: "200% 200%",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "linear",
      background: "linear-gradient(45deg, #6a11cb, #2575fc)",
      backgroundSize: "200% 200%"
    });

    // 标题动画
    gsap.fromTo(
        ".title",
        { opacity: 0, y: -50, scale: 1.2 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power2.out" }
    );

    // 粒子动画
    gsap.to(".particles", {
      duration: 10,
      opacity: 0,
      repeat: -1,
      yoyo: true,
      ease: "linear"
    });
  }
};
</script>

<style scoped>
.containers {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  background-size: 200% 200%;
  overflow: hidden;
  position: relative;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
  z-index: 1;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 20%, transparent 80%);
  opacity: 0.5;
  mix-blend-mode: overlay;
  z-index: 0;
}
</style>
