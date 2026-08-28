import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    //base: "/YOUR_REPOSITORY_NAME",
    base: "/conference_event_planner",
    plugins: [react()],
})
