import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path' // 主要用于alias文件路径别名
import {fileURLToPath, URL} from 'url'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: true,
        port: 3007,
        host: '0.0.0.0'
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    // 打包配置
    build: {
        lib: {
            entry: resolve(__dirname, 'package/main.ts'),
            name: 'wei-tool',
            fileName: (format) => `wei-tool.${format}.js`
        },
        outDir: 'lib',
        sourcemap: true,
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    plugins: [vue()],
})
