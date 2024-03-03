<script setup>
import Content from './components/Content.vue'
</script>

<template>
  <main class="m-0 p-0 box-border min-w-[1440px] max-w-full min-h-screen bg-l-g-blue">
    <section class="grid-cols-2 h-screen flex items-center justify-center">
      <div class="col-span-1 row-span-1">
        <img class="w-[328px] rounded-l-xl object-cover object-left h-[320px]" src="./assets/images/drawers.jpg" alt="">
      </div>
      <div class="col-span-1 row-span-1">
        <Content />
      </div>
  </section>
  </main>
</template>

