import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutus: resolve(__dirname, 'project/aboutus.html'),
        androidchrome192: resolve(__dirname, 'project/android-chrome-192x192.png'),
        androidchrome512: resolve(__dirname, 'project/android-chrome-512x512.png'),
        appleicon: resolve(__dirname, 'project/apple-touch-icon.png'),
        contactus: resolve(__dirname, 'project/contactus.html'),
        directory: resolve(__dirname, 'project/directory1.html'),
        favicon16: resolve(__dirname, 'project/favicon-16x16.png'),
        favicon32: resolve(__dirname, 'project/favicon-32x32.png'),
        join: resolve(__dirname, 'project/join.html'),
        message: resolve(__dirname, 'project/message.html'),
        news: resolve(__dirname, 'project/news.html'),
        newsmark: resolve(__dirname, 'project/newsmark.html'),
        productr: resolve(__dirname, 'project/product_review.html'),
        productnew: resolve(__dirname, 'project/productnew.html'),
        review: resolve(__dirname, 'project/review.html'),
        siteweb: resolve(__dirname, 'project/site.webmanifest'),
        sitemap: resolve(__dirname, 'project/sitemap.html'),
        steamlogo: resolve(__dirname, 'project/steamo1.png'),
        thanks: resolve(__dirname, 'project/thanks.html'),
        thankyou: resolve(__dirname, 'project/thankyou.html'),
      }
    }
  }
})
