import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        cors: {
            origin: ["https://github.com"],
            credentials: true,
            preflightContinue: false,
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
        }
    }
})
