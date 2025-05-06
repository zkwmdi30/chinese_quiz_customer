// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    emailUser: "your-test-email@gmail.com",
    emailPassword: "your-app-password",
    adminEmail: "admin@example.com",
    public: {
      // publicKey: process.env.PUBLIC_KEY
    },
  },
});
