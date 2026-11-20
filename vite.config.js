import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep the build independent from optional native CSS minifier binaries.
    cssMinify: false,
  },
});
