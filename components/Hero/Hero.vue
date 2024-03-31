<template>
    <div>
        <main class="hero-container">
            <div class="hero-starter-text">
                <h1 class="hero-header">
                    Complete <span>Vue.js training</span> solutions for companies
                </h1>
                <p class="description">
                    Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework
                </p>
            
                <CommonsButton variant="primary" buttonText="Talk to Sales" />
            </div>
            <img loading="lazy" class="image-container" src="../../assets/Hero-Image.svg" alt="Nuxt Hero Image">
        </main>

        <section class="background-pattern-container">
            <AboutCard />
            <Brands />
        </section>
    </div>
</template>

<script setup>
import AboutCard from './components/AboutCard.vue';
import Brands from './components/Brands.vue';
</script>

<style scoped lang="postcss">
.hero-container {
    @apply flex flex-col items-center px-10 lg:pl-[135px] lg:pr-20 pt-8 gap-[52px] md2:flex-row mt-10 md2:mt-0;
}

.hero-starter-text {
    @apply flex flex-col items-center md2:items-start text-center md2:text-left gap-10;
}

.hero-header {
    @apply text-[40px] leading-[47.4px] sm:text-6xl sm:leading-[70px] font-bold text-white;
}

.hero-header > span {
    @apply text-[#0BD88F];
}

.image-container {
    @apply w-full md2:w-1/2
}

.description {
    @apply text-base leading-6 sm:text-[22px] font-normal text-primaryWhite sm:leading-8;
}

.background-pattern-container {
    @apply relative w-full h-screen px-10 lg:px-[135px];
}

.background-pattern-container::before,
.background-pattern-container::after {
  @apply absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover;
  content: '';
}

.background-pattern-container:before {
    @apply bg-heroPattern1;
}
.background-pattern-container:after {
    @apply bg-heroPattern2;
}
</style>