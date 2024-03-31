<template>
    <div class="courses-info-container">
        <div class="info-text">
            <p class="intro-text gradient-text">YOUR #1 SOURCE OF VUE.JS COURSES</p>
            <h2 class="main-text">Full Stack <span class="gradient-text">Vue Training</span> Solutions</h2>
        </div>
        <div class="courses-stats">
            <div class="video-number-container">
                <p class="stat-number gradient-text">763</p>
                <p class="stat-details">Video Lessons</p>
            </div>
            <div class="courses-number-container">
                <p class="stat-number gradient-text">40</p>
                <p class="stat-details">Courses</p>
            </div>
            <div class="hours-number-container">
                <p class="stat-number gradient-text">64</p>
                <p class="stat-details">15 hours</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.courses-info-container {
    @apply w-full flex items-center justify-between gap-20 relative -top-14 flex-wrap lg:flex-nowrap;
}

.info-text {
    @apply flex flex-col gap-3 text-center lg:text-left;
}

.gradient-text {
    @apply bg-gradient-text text-transparent bg-clip-text
}
.intro-text {
    @apply font-medium text-base leading-[19px] sm:text-2xl sm:leading-7;
}

.main-text {
    @apply text-[40px] leading-[47.4px] sm:text-6xl sm:leading-[70px] font-bold text-primaryWhite;
}

.courses-stats {
    @apply flex items-center justify-center gap-6 md2:gap-[60px] w-full lg:w-auto;
}

.video-number-container,
.courses-number-container,
.hours-number-container {
    @apply flex flex-col items-center gap-3;
}

.stat-number {
    @apply text-[64px] leading-[75px] md2:text-[90px] md2:leading-[106px] font-medium;
}

.stat-details {
    @apply text-sm text-primaryWhite leading-4;
}
</style>