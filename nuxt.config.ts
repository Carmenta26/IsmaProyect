// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@/public/assets/style.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            link: [{
                rel: 'icon', type: 'image/png', href: '/assets/logo.png'
            }]
        }
    }
})
