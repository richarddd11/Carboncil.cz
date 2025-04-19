import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { resolve } from 'path'
import { writeFileSync, readFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-index-as-404',
      closeBundle() {
        const indexPath = resolve(__dirname, 'dist/index.html')
        const indexContent = readFileSync(indexPath)
        writeFileSync(resolve(__dirname, 'dist/404.html'), indexContent)
      }
    }
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components')
    }
  },
  base: '/Carboncil.cz/',
})
