<template>
    <div class="header-container">
        <div>
            <img src="../../assets/logo.svg" alt="Vue School Logo">
        </div>

        <div class="header-links links">
            <p>Courses</p>
            <p>Plans</p>
            <p>Business Service</p>
            <p>Learning Paths</p>
            <p>Hiring</p>
            <p>Articles</p>
            <p>Events</p>
            <p>Get Certified</p>
        </div>

        <div class="flex items-center gap-5">
            <p class="login-link">Login</p>
            <CommonsButton variant="outline">Sign up</CommonsButton>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.header-container {
    @apply h-24 py-5 px-12 flex justify-between items-center;
}

.header-links {
    @apply flex items-center gap-5;
}

.auth-links {
    @apply flex items-center gap-5;
}

.login-link,
.links {
    @apply text-[#F3F5FF] font-normal	text-base leading-6 cursor-pointer;
}
</style>
