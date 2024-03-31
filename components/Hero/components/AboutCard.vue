<template>
    <div class="about-card">
        <div class="img-container">
            <img loading="lazy" class="card-img" src="../../../assets/vueschool.svg" alt="About Vue School Card Image">
        </div>
        <div class="about-card-info">
            <h2 class="card-header">About Vue School corporate training</h2>
            <p class="description">School is the #1 training resource for Vue.js and has provided the most comprehensive Vue.js video library in the world to over 140,000 developers. Private individuals and small to enterprise companies have used our services to develop their skills since 2016. </p>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.about-card{
    @apply flex-col  text-center  md:flex-row md:text-left relative z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 flex items-center justify-center gap-10 rounded-[30px] bg-cardBackground w-full h-fit;
}

.about-card-info {
    @apply flex flex-col justify-center gap-8 w-full;
}

.card-header {
   @apply font-bold text-white md2:text-[40px] text-2xl leading-7 md:leading-[47px];
}

.description {
    @apply text-sm sm:text-[22px] font-normal text-primaryWhite leading-6 sm:leading-8;
}

.img-container {
    @apply w-[85px] h-[88px] sm:w-[280px] sm:h-[247px] flex justify-center items-center;
}
</style>