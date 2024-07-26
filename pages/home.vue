<template>
  <div class="container" ref="container">
    <div class="overlay-video">
      <video autoplay loop muted class="background-video">
        <source
          src="https://1322820936.vod-qcloud.com/67d7c58dvodsh1322820936/57cbd0451253642701274948870/2paFQsONlzIA.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="content">
      <h1 class="title" ref="title">Hi,花花 一切从这里开始</h1>
      <p class="subtitle" ref="subtitle">Welcome to my personal blog</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const container = ref(null);
const title = ref(null);
const subtitle = ref(null);

onMounted(() => {
  gsap.fromTo(
    title.value,
    { opacity: 0, y: -50 },
    { opacity: 1, y: 0, duration: 1 }
  );
  gsap.fromTo(
    subtitle.value,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, delay: 0.5 }
  );

  container.value.addEventListener("mouseenter", () => {
    gsap.to(title.value, { scale: 1.2, duration: 0.5 });
    gsap.to(subtitle.value, { scale: 1.1, duration: 0.5 });
  });

  container.value.addEventListener("mouseleave", () => {
    gsap.to(title.value, { scale: 1, duration: 0.5 });
    gsap.to(subtitle.value, { scale: 1, duration: 0.5 });
  });
});
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .overlay-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    .background-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    position: relative;
    z-index: 1;
    color: white;
  }
}

.title {
  font-size: 4rem;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
}

.subtitle {
  font-size: 1.5rem;
  transition: transform 0.3s ease-in-out;
}
</style>
