<template>
    <footer class="footer-container">
        <div>
            <div class="logo-socials-section">
                <img loading="lazy" src="../../assets/logo.svg" alt="Vue School Footer Logo">
                <div class="socials">
                    <p class="footer-message">Thanks to fine people like you, Vue School can proudly sponsor Evan and the future of Vue.js by being a Platinum Patreon</p>
                    <p class="follow-text">FOLLOW US IN SOCIAL MEDIA</p>
                    <div class="social-icons">
                        <div v-for="(socialMedia, index) in socialIcons" :key="index" class="social-icon">
                            <img :src="socialMedia.path" :alt="socialMedia.name + ' Icon'">
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="relevant-links-section">
                <div class="first-col">
                    <ul>
                        <p class="list-header">PRODUCTS</p>
                        <li>Courses</li>
                        <li>Workshops</li>
                        <li>Vue Masterclass</li>
                        <li>Mastering Nuxt</li>
                    </ul>
    
                    <ul>
                        <p class="list-header">PRICING</p>
                        <li>Plans</li>
                    </ul>
    
                    <ul>
                        <p class="list-header">CONNECT WITH US</p>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
    
                <div class="second-col">
                    <ul>
                        <p class="list-header">EVENTS</p>
                        <li>Vue.js Nation</li>
                        <li>Nuxt Nation</li>
                        <li>Vue.js Forge</li>
                    </ul>
    
                    <ul>
                        <p class="list-header">CORPORATE</p>
                        <li>Corporate Training</li>
                        <li>Developer Recruitment</li>
                        <li>Course Development</li>
                        <li>On-site Workshops</li>
                        <li>Consulting</li>
                        <li>Affiliate Programs</li>
                    </ul>
    
                    <ul>
                        <p class="list-header">RESOURCES</p>
                        <li>Articles</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import FacebookIcon from "@/assets/FacebookIcon.svg"
import TwitterIcon from "@/assets/TwitterIcon.svg"
import GithubIcon from "@/assets/GithubIcon.svg"
import LinkedInIcon from "@/assets/LinkedInIcon.svg"
import YoutubeIcon from "@/assets/YoutubeIcon.svg"

const socialIcons = ref([
    { 
        path: FacebookIcon, 
        name: "Facebook" 
    },
    { 
        path: TwitterIcon,
        name: "Twitter" 
    },
    { 
        path: GithubIcon,
        name: "Github" 
    },
    { 
        path: LinkedInIcon,
        name: "LinkedIn" 
    },
    { 
        path: YoutubeIcon,
        name: "Youtube" 
    },
])
</script>

<style scoped lang="postcss">
.footer-container {
    @apply px-10 lg:px-[135px] w-full gap-14 h-fit lg:h-full py-32 lg:pt-16 flex items-center;
}

.footer-container > div {
    @apply lg:h-[588px] flex flex-col gap-16 lg:gap-0 w-full lg:flex-row 
}

.logo-socials-secion {
    @apply w-1/2 h-fit;
}

.logo-socials-section {
    @apply flex flex-col gap-[85px] w-full lg:w-1/2 text-center items-center lg:text-left lg:items-start;
}

.logo-socials-section > img {
    @apply w-[268px] h-[88px]
}

ul > li,
.footer-message {
    @apply font-normal text-base leading-6 text-white
}

ul > li {
    @apply mt-5
}

ul > li + li {
    @apply mt-[14px]
}

.list-header,
.follow-text {
    @apply font-medium text-[22px] text-mutedColor leading-[30px];
}

.follow-text {
    @apply mt-[60px]
}

.social-icons {
    @apply flex items-center gap-3 sm:gap-[42px] mt-9 justify-center lg:justify-start
}
.social-icon {
    @apply p-[10px] bg-cardBackground rounded-full w-[60px] h-[60px] flex justify-center items-center
}

.relevant-links-section {
    @apply grid grid-rows-2 lg:grid-cols-2 gap-[30px] w-full lg:w-1/2 h-fit lg:h-full;
}

.first-col,
.second-col {
    @apply flex flex-col text-center sm:text-left items-center sm:items-start sm:justify-between sm:flex-row lg:flex-col gap-5 lg:gap-[50px]
}
</style>