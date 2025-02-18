import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/arbuz-app/",  // Укажи имя своего репозитория на GitHub
  plugins: [react()],
});
