<template>
    <div class="workshops-container">
      <header class="workshop-header">
        <h2 class="workshops-title">Available Workshops</h2>
        <CommonsButton class="hidden md:block" variant="primary" buttonText="View all workshops"/>
      </header>
  
      <main class="cards-container">
        <WorkshopCard />
        <WorkshopCard />
        <WorkshopCard />
        <WorkshopCard />
      </main>
  
      <CommonsButton class="block md:hidden" variant="primary" buttonText="View all workshops"/>
    </div>
</template>
  

<script setup>
import WorkshopCard from "./components/WorkshopCard.vue"
</script>

<style scoped lang="postcss">

.workshops-container {
    @apply flex flex-col gap-[72px] mt-[160px] w-full h-full;
}

.workshop-header {
    @apply flex justify-between items-center;
}

.workshops-title {
    @apply text-[40px] leading-[47.4px] sm:text-6xl sm:leading-[70px] font-bold text-primaryWhite text-center md:text-left
}

.cards-container {
    @apply flex items-center gap-[30px] overflow-x-scroll w-full pr-0 md:w-calc-sm md:pr-10 lg:w-calc-lg lg:pr-[135px];
}
</style>