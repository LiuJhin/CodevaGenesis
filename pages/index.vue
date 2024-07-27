<template>
  <div class="container">
    <div class="content">
      <div class="headerText-container">
        <p id="headerText">
          We help brands create digital experiences that connect with their
          audience
        </p>
      </div>
      <div class="canvas">
        <video autoplay loop muted class="background-video">
          <source
            src="https://1322820936.vod-qcloud.com/67d7c58dvodsh1322820936/57cbd0451253642701274948870/2paFQsONlzIA.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <sectionHomeReel />

      <sectionFeatured />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  padding: 0 2%;
  width: 100%;

  .content {
    width: 100%;

    .headerText-container {
      display: flex;
      justify-content: center;
      margin-top: 2%;
      width: 100%;
    }

    #headerText {
      width: 500px;
      font-size: 3.8em;
      opacity: 0; /* Start hidden */
    }
  }

  .canvas {
    position: relative;
    width: 100%;
    height: 600px;
    margin-top: 20px;
    border-radius: 30px;

    .background-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
      border-radius: 30px;
    }
  }
}
</style>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.fromTo(
    "#headerText",
    { y: -150, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#headerText",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
        toggleActions: "play none none none",
      },
    }
  );
});
</script>
