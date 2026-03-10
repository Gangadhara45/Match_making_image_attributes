import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },

    server: {
        host: true,


        proxy: {

            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                ws: true,
                rewrite: (path) => path,
            },
        },
    },
});
