<template>
  <header class="header"></header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pageName = computed(() => route.meta.pageName);
</script>

<style lang="scss"></style>
