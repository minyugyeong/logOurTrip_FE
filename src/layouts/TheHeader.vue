<template>
    <header class="w-full flex flex-col">
        <ul class="flex gap-[10px] py-4 items-center justify-center">
            <li><router-link to="/">메인</router-link></li>
            <li><router-link to="/login">로그인</router-link></li>
            <li><router-link to="/join">회원가입</router-link></li>
        </ul>
        {{ pageName }} 페이지 입니다.
    </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pageName = computed(() => route.meta.pageName);
</script>

<style lang="scss"></style>
