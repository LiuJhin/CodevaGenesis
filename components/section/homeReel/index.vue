<template>
  <div class="main-container">
    <div class="background-animation"></div>
    <div class="headline">
      <div class="headline-right">Beyond Visions</div>
      <div class="headline-left">Within Reach</div>
    </div>
    <div class="content-container">
      <div class="image-box">
        <video autoplay loop muted class="background-video">
          <source
            src="https://1322820936.vod-qcloud.com/08e44ec6vodcq1322820936/943857b71253642701275212709/UqvBl5TKvRoA.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="text-box">
        <div class="text-content">
          <p class="paragraphContent">
            Codeva Genesis is a digital production studio that brings your ideas
            to life through visually captivating designs and interactive
            experiences. With our talented team, we push the boundaries by
            solving complex problems and delivering tailored solutions that
            exceed expectations and engage audiences.
          </p>
          <div class="about-button">ABOUT US</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const createRandomShapes = () => {
  const container = document.querySelector(".background-animation");
  for (let i = 0; i < 10; i++) {
    const shape = document.createElement("div");
    shape.classList.add("shape");
    container.appendChild(shape);
  }
};

onMounted(() => {
  createRandomShapes();

  gsap.from(".headline-right", {
    duration: 1.5,
    opacity: 0,
    x: -200,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".headline",
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
    },
  });

  gsap.from(".headline-left", {
    duration: 1.5,
    opacity: 0,
    x: 200,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".headline",
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
    },
  });

  gsap.from(".image-box", {
    duration: 1.5,
    x: -100,
    opacity: 0,
    scale: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".content-container",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.from(".text-box", {
    duration: 1.5,
    x: 100,
    opacity: 0,
    scale: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".content-container",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.from(".text-content p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".text-box",
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
    },
  });

  gsap.from(".about-button", {
    duration: 1.5,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".text-box",
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
    },
  });

  gsap.utils.toArray(".shape").forEach((shape) => {
    gsap.to(shape, {
      duration: 5,
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 300, y: 200 },
          { x: -200, y: 300 },
          { x: 0, y: 0 },
        ],
        curviness: 1.25,
        autoRotate: true,
      },
      repeat: -1,
      ease: "none",
    });
  });
});
</script>

<style scoped lang="scss">
.main-container {
  position: relative;
  overflow: hidden;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.shape {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 150, 255, 0.5);
  border-radius: 50%;
  opacity: 0.5;
}

.headline {
  position: relative;
  z-index: 1;
  font-size: 23rem; /* Increased size */
  margin-bottom: 20px;
  color: #333;
  line-height: 1.2;
}

.headline-right,
.headline-left {
  display: inline-block;
  width: 100%;
}

.headline-right {
  text-align: right;
  padding-right: 10px;
}

.headline-left {
  text-align: left;
  padding-left: 10px;
}

.content-container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.image-box {
  position: relative;
  flex: 1;
  height: 400px;
  background-color: #e0e0e0;
  border-radius: 8px;

  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
    z-index: 1;
  }
}

.text-box {
  flex: 1;
  border-radius: 8px;
  padding: 20px;
}

.text-content {
  text-align: left;

  .paragraphContent {
    font-size: 2.5em;
  }
}

.text-content p {
  font-size: 2.5rem; /* Increased size */
  color: #333;
  margin-bottom: 20px;
}

.about-button {
  text-align: center;
  width: 200px;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #0054a8;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.about-button:hover {
  background-color: #66b1ff;
}
</style>
