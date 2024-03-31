<template>
    <div class="brands-container">
        <div class="brand" v-for="index in 6" :key="index">
            <img loading="lazy" src="../../../assets/Brand.svg" alt="Brand Logo">
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.brands-container {
    @apply w-full hidden md:flex gap-8 relative top-[20%];
}

.brand {
    @apply flex items-center justify-center w-[169px] py-[10px];
}
</style>