<template>
    <div class="pricing-bundle-card">
      <header class="bundle-header">
        <img loading="lazy" src="../../../assets/BundleIcon.svg" class="bundle-plan-icon" alt="Bundle Icon"/>
        <h2 class="bundle-plan-title">Bundle Plan Title</h2>
      </header>
  
      <main class="bundle-body">
        <p class="intro-text">Includes 1 year access to:</p>
        <div class="bundle-specifics">
          <ul class="bundle-specifics-list">
            <li class="specific-list-item">
              <div class="checkmark-item-container">
                <img loading="lazy" alt="Checkmark Icon" src="../../../assets/CheckMark.svg" class="checkmark" />
                <span class="bundle-offering">All Video Courses </span>
              </div>
              <img src="../../../assets/InfoIcon.svg" class="info-icon" alt="Information Icon">
            </li>
            <li class="specific-list-item">
              <div class="checkmark-item-container">
                <img loading="lazy" alt="Checkmark Icon" src="../../../assets/CheckMark.svg" class="checkmark" />
                <span class="bundle-offering">All Video Courses </span>
              </div>
              <img src="../../../assets/InfoIcon.svg" class="info-icon" alt="Information Icon">
            </li>
            <li class="specific-list-item">
              <div class="checkmark-item-container">
                <img loading="lazy" alt="Checkmark Icon" src="../../../assets/CheckMark.svg" class="checkmark" />
                <span class="bundle-offering">All Video Courses </span>
              </div>
              <img src="../../../assets/InfoIcon.svg" class="info-icon" alt="Information Icon">
            </li>
            <li class="specific-list-item">
              <div class="checkmark-item-container">
                <img loading="lazy" alt="Checkmark Icon" src="../../../assets/CheckMark.svg" class="checkmark" />
                <span class="bundle-offering">All Video Courses </span>
              </div>
              <img src="../../../assets/InfoIcon.svg" class="info-icon" alt="Information Icon">
            </li>
          </ul>
        </div>
      </main>
  
      <footer class="bundle-footer">
        <CommonsButton class="w-full" variant="primary" buttonText="Start Learning" />
        <CommonsButton class="w-full" variant="default" buttonText="Refer your manager" />
      </footer>
    </div>
  </template>
  

<style scoped land="postcss">
.pricing-bundle-card {
    @apply py-10 px-6 bg-cardBackground flex flex-col gap-10 items-start rounded-[30px] w-[370px];
}

.bundle-header {
    @apply flex gap-4 items-center;
}

.bundle-plan-title {
    @apply font-bold text-[22px] text-primaryWhite leading-[30px]
}

.bundle-body {
    @apply flex flex-col gap-6 w-full;
}

.intro-text {
    @apply text-[#0BD88F] text-base font-normal leading-6
}

.bundle-specifics {
    @apply w-full;
}

.bundle-specifics-list {
    @apply flex flex-col gap-4 w-full;
}

.specific-list-item {
    @apply flex justify-between w-full;
}

.checkmark-item-container {
    @apply flex gap-4
}

.bundle-offering {
    @apply text-sm text-primaryWhite leading-5;
}

.bundle-footer {
    @apply flex flex-col w-full justify-center items-center gap-3;
}
</style>