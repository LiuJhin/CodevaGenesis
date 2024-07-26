<template>
  <div class="featured-work-container">
    <div class="section-header">
      <div class="header-titles">Featured Work</div>
      <div class="header-text-content">A SELECTION OF OUR MOST PASSIONATELY CRAFTED WORKS WITH FORWARD-THINKING CLIENTS AND FRIENDS OVER THE YEARS.</div>
    </div>
    <div class="cards-container">
      <template v-for="(featured, index) in featuredList" :key="featured.title">
        <div class="card">
          <div class="image">
            <img :src="featured.url" alt="Featured Work Image">
          </div>
          <div class="tag">{{ featured.tag.join('·') }}</div>
          <div class="title">{{ featured.title }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featuredList = ref([
  {
    url: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f71005202370897.6684fcf24942f.jpg',
    tag: ['Web', 'DESIGN', 'DEVELOPMENT', '3D'],
    title: 'Synthetic Human'
  },
  {
    url: 'https://images.unsplash.com/photo-1721627679019-1c065961a6b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: ['App', 'UX', 'DEVELOPMENT'],
    title: 'Future Vision'
  },
  {
    url: 'https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: ['3DMAX', 'UX', 'DEVELOPMENT'],
    title: 'Future Vision'
  },
  {
    url: 'https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: ['AE', 'UX', 'DEVELOPMENT'],
    title: 'Future Vision'
  },
  {
    url: 'https://images.unsplash.com/photo-1721715115717-8dfeea6bfb8a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: ['AI', 'UX', 'DEVELOPMENT'],
    title: 'Future Vision'
  },
  {
    url: 'https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tag: ['Photoshop', 'UX', 'DEVELOPMENT'],
    title: 'Future Vision'
  }
]);

onMounted(() => {
  gsap.from('.header-titles', {
    duration: 1.5,
    opacity: 0,
    x: -100,
    scale: 0.9,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.section-header',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 1
    }
  });

  gsap.from('.header-text-content', {
    duration: 1.5,
    opacity: 0,
    x: 100,
    scale: 0.9,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.section-header',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 1
    }
  });

  gsap.from('.card', {
    duration: 1.5,
    opacity: 0,
    y: 50,
    scale: 0.95,
    stagger: {
      each: 0.2,
      from: "edges",
      grid: "auto"
    },
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.cards-container',
      start: 'top 80%',
      end: 'bottom 50%',
      scrub: 1
    }
  });

  gsap.to('.card:hover', {
    scale: 1.1,
    rotation: 0,
    duration: 0.5,
    ease: 'power1.out',
    paused: true
  });

  gsap.from('.card .tag, .card .title', {
    duration: 1,
    opacity: 0,
    y: 20,
    scale: 0.8,
    stagger: 0.2,
    ease: 'elastic.out(1, 0.3)',
    scrollTrigger: {
      trigger: '.cards-container',
      start: 'top 80%',
      end: 'bottom 50%',
      scrub: 1
    }
  });
});
</script>

<style scoped lang="scss">
.featured-work-container {
  padding: 50px 20px;
  text-align: center;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.header-titles {
  margin-left: 2%;
  font-size: 14.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  transform-origin: left center;
}

.header-text-content {
  width: 400px;
  font-size: 2.25rem;
  color: #666;
  transform-origin: right center;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  width: calc(50% - 40px);
  border-radius: 8px;
  overflow: hidden;
  text-align: left;
  padding: 10px;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}

.image {
  border-radius: 8px;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-bottom: 1px solid #e0e0e0;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tag {
  font-size: 1.875rem;
  color: #333;
  margin: 10px 0;
}

.title {
  font-size: 4.25rem;
  color: #333;
}
</style>
