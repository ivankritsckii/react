import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
    return {
        plugins: [react(), tsconfigPaths()],
        base: '/',
        test: {
          globals: true,
          environment: 'jsdom',
          setupFiles: './src/__tests__/setupFile.ts',
          include: ['src/__tests__/**/*.test.ts', 'src/__tests__/**/*.test.tsx'],
          coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
          },
    }
}
})
