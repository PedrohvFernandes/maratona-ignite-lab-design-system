import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://dev.to/lixeletto/vite-js-o-build-tool-que-vai-facilitar-a-sua-vida-15ho
// https://eduardo-diogo.medium.com/vite-js-killer-na-criação-de-frontend-9b083f8a77e6
export default defineConfig({
  plugins: [react()]
})
