
<template>
    <div class="price-bundles-container">
        <h2 class="bundles-title">Discounted <span class="gradient-text ">Corporate Training</span> Bundles</h2>

        <div class="cards-container">
            <BundleCard v-for="bundle in bundlesList" :key="bundle.id" :bundleType="bundle.bundleType" :packageOfferings="bundle.packageOffers" />
        </div>
    </div>
</template>

<script setup lang="ts">
import BundleCard from "./components/BundleCard.vue";
import { type BundleCardType } from "../../types/types";

const bundlesList = ref<BundleCardType[] | null>([]);
const query = groq`*[_type == 'pricingBundle']`;
const { data } = await useSanityQuery<BundleCardType[]>(query);

bundlesList.value = data.value

</script>

<style scoped lang="postcss">
.price-bundles-container {
    @apply mt-[200px] flex flex-col items-center h-full;
}

.bundles-title {
    @apply text-[40px] leading-[47.4px] sm:text-6xl sm:leading-[70px] text-primaryWhite font-bold w-full md:w-[752px] text-center;
}

.gradient-text {
    @apply bg-gradient-text text-transparent bg-clip-text
}

.cards-container {
    @apply flex gap-[30px] items-center justify-center mt-[120px] flex-wrap lg:flex-nowrap;
}
</style>