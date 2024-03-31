<template>
    <div class="workshop-card">
      <div class="card-header">
        <img loading="lazy" alt="Calendar Icon" src="../../../assets/CalendarIcon.svg" class="calendar-icon" />
        <span class="event-datetime">December 14th - 11:00 AM (GMT-3)</span>
      </div>
      <div class="card-body">
        <div class="workshop-time-length">
          <div class="training-type-container">
            <img class="video-play-icon" src="../../../assets/VideoPlayIcon.svg" alt="Video Play Icon" />
            <span class="training-type">LIVE Training</span>
          </div>
          <div class="workshop-length">
            <img src="../../../assets/ClockIcon.svg" class="workshop-length-icon" alt="Workshop Length Icon" />
            <span class="hours-length">15 Hours</span>
          </div>
        </div>
  
        <section class="card-content">
          <h3 class="content-header">Vue.js Fundamentals</h3>
          <p class="card-description">A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...</p>
        </section>
  
        <footer class="trainer-container">
          <img src="../../../assets/TrainerImage.png" class="trainer-image" alt="Trainer Profile Image Avatar" />
          <p class="trainer-name">Steve Popoola</p>
        </footer>
      </div>
    </div>
  </template>
  

<style scoped lang="postcss">
.workshop-card {
    @apply min-w-full sm:min-w-[570px] h-auto rounded-[30px];
}

.card-header {
    @apply py-6 px-[35px] flex items-center bg-workshop-header-gradient rounded-tr-[30px] rounded-tl-[30px] gap-3;
}

.event-datetime {
    @apply text-primaryWhite font-medium text-base leading-[18.96px]
}

.card-body {
    @apply p-[35px] bg-cardBackground flex flex-col gap-5 rounded-br-[30px] rounded-bl-[30px];
}

.training-type-container,
.workshop-length,
.trainer-container {
    @apply flex items-center gap-3
}

.training-type,
.hours-length,
.card-description,
.trainer-name {
    @apply font-normal text-sm leading-4 text-mutedColor
}

.workshop-time-length {
    @apply flex items-center gap-[35px]
}

.content-header {
    @apply font-medium text-2xl text-primaryWhite leading-[28px]
}

.card-content {
    @apply flex flex-col gap-3
}

.card-description,
.trainer-container {
    @apply leading-5;
}
</style>