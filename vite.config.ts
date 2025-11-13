// vite.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './src/setupTests.ts',  // or wherever you put setup
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      enabled: true,
      provider: 'v8',                    // or 'istanbul'
      reporter: ['text', 'html'],        // output formats
      include: ['src/**/*.{ts,tsx}'],    // files you want included
      exclude: ['node_modules', 'dist'], // files to exclude
      // optional thresholds
      thresholds: {
        lines: 80,
        statements: 80,
        branches: 70,
        functions: 80
      }
    }
  },
});


