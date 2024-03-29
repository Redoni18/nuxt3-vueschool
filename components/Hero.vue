<template>
    <div>
        <div class="hero-container">
            <div class="hero-starter-text">
                <h1 class="hero-header">
                    Complete <span>Vue.js training</span> solutions for companies
                </h1>
                <p class="description">
                    Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework
                </p>
            
                <CommonsButton variant="primary">Talk to Sales</CommonsButton>
            </div>
            <img class="image-container" src="../assets/Hero-Image.svg" alt="">
        </div>

        <div class="background-pattern-container">
            <img src="../assets/Hero-BackgroundPattern.svg" alt="">
            <img src="../assets/Hero-BackgroundPattern2.svg" alt="">
        </div>
    </div>
</template>

<style scoped lang="postcss">
.hero-container {
    @apply flex items-center pl-[135px] pr-20 pt-8 gap-[52px];
}

.hero-starter-text {
    @apply flex flex-col items-start gap-10;
}

.hero-header {
    @apply text-6xl font-bold text-white;
}

.hero-header > span {
    @apply text-[#0BD88F];
}

.image-container {
    @apply w-[600px]
}

.description {
    @apply text-[22px] font-normal text-[#F3F5FF] leading-8;
}

.background-pattern-container {
    @apply relative;
}

.background-pattern-container > img:first-child {
    @apply absolute top-0 w-full;
}
.background-pattern-container > img:last-child {
    @apply absolute top-0 w-full;
}


</style>