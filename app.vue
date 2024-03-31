<template>
  <div class="h-full">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'Vue School Technical Assignment',
    ogTitle: 'Vue School Technical Assignment',
    description: 'Website made with NuxtJS as part of the Frontend Developer assignment',
    ogDescription: 'Website made with NuxtJS as part of the Frontend Developer assignment',
    ogImage: 'https://rock-the-prototype.com/wp-content/uploads/2022/01/Nuxt_JavaScript_Framework.jpg',
    twitterCard: 'summary_large_image',
  })
</script>

