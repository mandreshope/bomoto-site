import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set BASE_PATH env var when deploying to GitHub Pages, e.g. /portfolio/
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base,
})
