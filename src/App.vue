<template>
  <!--
        Vue가 만들어지고 #app에 마운트 됐을 때, 가장 먼저 실행되는 파일
        
        여기서 Header나 Footer 같은 전역 컴포넌트를 import
        router-view로 페이지에 해당하는 Vue 파일을 뿌려줌
    -->
  <TheHeader />
  <router-view></router-view>
  <TheFooter />

  <teleport to="#modal">
    <Modal :show="isFail" @close="hanldeAPIFail">
      <template #body>
        <div>API 에러!</div>
      </template>
      <template #header>
        <div>메인페이지로 가집니다</div>
      </template>
    </Modal>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { TheHeader, TheFooter } from "@layouts";
import { Modal } from "@components/share";
import { useComponent } from "@stores";
import { storeToRefs } from "pinia";

const router = useRouter();

const component = useComponent();
const { apiFail: isFail } = storeToRefs(component);

function hanldeAPIFail() {
  router.push("/");

  component.toggleApiFail();
}
</script>

<style lang="scss"></style>
