import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, loadEnv } from 'vite'



export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
      define: {
        'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
      },
        plugins: [react(), tsconfigPaths()],
        base: '/react/',
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
