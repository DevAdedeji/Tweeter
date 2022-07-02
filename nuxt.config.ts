import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head:{
       " link": [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          ]
    },
    ssr: false,    
    css:['@/public/css/style.css'],
    tailwindcss: {
      jit: true,
    },build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
    publicRuntimeConfig:{
      API_BASE_URL: process.env.API_BASE_URL
    }
})
