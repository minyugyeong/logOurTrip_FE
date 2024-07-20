/*
    main.js (Vue를 만들어주는 파일)

    Vue를 만들어서 #app 태그에 Mount하기 전에
    사용하는 라이브러리의 플러그인들을 여기서 등록함

    라이브러리 문서를 보다가 import plugin 같은게 있으면 여기서 하면 됨
*/
import { createApp } from "vue";
import App from "./App.vue";

// 전역 SCSS 불러오기
import "@assets/css/style.scss";

// Router 사용
import router from "@router";

// Pinia 사용
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).mount("#app");
