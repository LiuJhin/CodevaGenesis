<template>
  <div class="project-page">
    <div class="row">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
      <div class="box">7</div>
    </div>
    <div class="row">
      <div class="box">a</div>
      <div class="box">b</div>
      <div class="box">c</div>
      <div class="box">d</div>
      <div class="box">e</div>
    </div>
    <div class="row">
      <div class="box">g</div>
      <div class="box">h</div>
      <div class="box">i</div>
      <div class="box">j</div>
      <div class="box">k</div>
      <div class="box">l</div>
      <div class="box">m</div>
      <div class="box">n</div>
      <div class="box">o</div>
      <div class="box">p</div>
    </div>
    <div class="row">
      <div class="box">q</div>
      <div class="box">r</div>
      <div class="box">s</div>
      <div class="box">t</div>
      <div class="box">u</div>
      <div class="box">v</div>
      <div class="box">w</div>
      <div class="box">x</div>
      <div class="box">y</div>
      <div class="box">z</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;  /* 使用视口宽度 */
  height: 100vh; /* 使用视口高度 */
  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;

  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    width: 100%;
    max-width: 100%; /* 确保不超出视口 */

    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 300px;  /* 固定宽度 */
      height: 300px; /* 固定高度 */
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 5px;
      transition: transform 0.3s ease, background-color 0.3s ease;
      font-size: 2rem; /* 增大文字字体以适应盒子 */
      text-align: center;

      /* 统一的悬停动画 */
      &:hover {
        transform: scale(1.1);
        background-color: #e0e0e0;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.from(".box", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out"  // 使用统一的动画缓动
  });
});
</script>
