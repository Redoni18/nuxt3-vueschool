<template>
    <header class="header-container">
      <div class="logo-container">
        <button aria-label="Toggle Mobile Menu" class="mobile-menu-button">
          <img src="../../assets/HamburgerIcon.svg" alt="Mobile Menu Button Icon">
        </button>
        <img src="../../assets/logo.svg" alt="Vue School Logo">
      </div>
  
      <nav class="header-links links">
        <p>Courses</p>
        <p>Plans</p>
        <p>Business Service</p>
        <p>Learning Paths</p>
        <p>Hiring</p>
        <p>Articles</p>
        <p>Events</p>
        <p>Get Certified</p>
      </nav>
  
      <div class="auth-links">
        <p class="login-link">Login</p>
        <CommonsButton buttonText="Sign up" variant="outline" />
      </div>
    </header>
  </template>

<style scoped lang="postcss">
.header-container {
    @apply h-24 py-5 px-3 md:px-8 lg:px-12 flex justify-between items-center;
}

.logo-container {
    @apply flex gap-4 items-center;
}

.mobile-menu-button {
    @apply block lg:hidden cursor-pointer;
}

.header-links {
    @apply hidden lg:flex items-center gap-5;
}

.auth-links {
    @apply hidden sm:flex items-center gap-5;
}

.login-link,
.links {
    @apply text-primaryWhite font-normal text-base leading-6 cursor-pointer;
}
</style>
