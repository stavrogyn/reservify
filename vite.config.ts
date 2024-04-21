import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        '@uikit': `${path.resolve(__dirname, "./src/shared/ui-kit/")}`,
        '@entities': `${path.resolve(__dirname, "./src/entities/")}`,
    }
}
})
