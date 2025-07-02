import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDemo = mode === 'demo';
  
  if (isDemo) {
    // Configuration for demo build (Vercel deployment)
    return {
      plugins: [react(), tailwindcss()],
      base: './',
      build: {
        outDir: 'dist-demo',
        emptyOutDir: true,
        rollupOptions: {
          input: path.resolve(process.cwd(), 'index.html')
        }
      }
    };
  }

  // Configuration for library build
  return {
    plugins: [react(), tailwindcss()],
    build: {
      lib: {
        entry: path.resolve(process.cwd(), 'src/lib/index.ts'),
        name: 'ReactInScroll',
        fileName: 'index',
        formats: ['es']
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return 'styles/[name][extname]'
            }
            return 'assets/[name][extname]'
          }
        }
      },
      copyPublicDir: false,
      cssCodeSplit: false,
      emptyOutDir: false
    }
  };
});
