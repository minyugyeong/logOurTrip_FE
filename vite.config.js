import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const resolveAlias = Object.fromEntries(
    Object.entries({
        "@api": "./src/api", // API
        "@assets": "./src/assets", // CSS나 다른 라이브러리 파일들
        "@components": "./src/components", // 컴포넌트
        "@layouts": "./src/layouts", // App.vue에 넣을 Header나 Footer 같은 파일들
        "@pages": "./src/pages", // router-view로 표시할 페이지
        "@router": "./src/router", // Router
        "@stores": "./src/stores", // Store
        "@utils": "./src/utils", // 암호화나 날짜계산 등 유틸함수
    }).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, path.join(__dirname, "./env"), "");

    return {
        plugins: [vue(), splitVendorChunkPlugin()],
        envPrefix: "VUE_", // 환경변수 접두사
        envDir: path.join(__dirname, "./env"), // 환경변수 경로 설정
        resolve: {
            alias: resolveAlias,
        },
        server: {
            host: true,
            proxy: {
                // CORS를 위한 프록시 설정
                "^/api": {
                    // '/api'로 시작하는 경로 앞에 target 값을 붙여주겠다는 뜻
                    target: env.VUE_APP_API,
                    changeOrigin: true,
                },
            },
        },
    };
});
