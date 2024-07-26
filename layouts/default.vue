<template>
  <div>
    <layoutComponentsHeader/>
    <NuxtPage />
    <layoutComponentsFoother/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// import HeaderComponent from './components/HeaderComponent.vue';
import { useTransitionComposable } from '~/composables/transiton-composable.ts';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const { toggleTransitionComplete } = useTransitionComposable();

onMounted(() => {
  toggleTransitionComplete(true);
});
</script>
