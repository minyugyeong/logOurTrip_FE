<template>
    <div v-if="props.show" class="modal">
        <div class="modal-background" @click="emits('close')"></div>
        <div class="modal-main">
            <div class="modal-main-header">
                <slot name="header" />
                <button @click="emits('close')">X</button>
            </div>
            <div class="modal-main-body">
                <slot name="body" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch, defineProps, defineEmits } from "vue";
import { useScrollLock } from "@vueuse/core";

const props = defineProps({
    show: {
        default: false,
        type: Boolean,
    },
});

const emits = defineEmits(["close"]);

/*
    모달이 표시 됐을 때, body 태그의 스크롤을 막음

    Vueuse는 Vue에서 유용한 이벤트나 함수들을 제공하는 라이브러리
    useScrollLock 함수 인자로는 HTMLElement를 넣음
    ref로 건 변수를 넣어도 됨
*/

const scrollLock = useScrollLock(document.body);

watch(props, (to, from) => {
    // scrollLock 값에 따라 scroll이 막힘
    scrollLock.value = to.show;
});
</script>

<style lang="scss">
.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 200;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;

    &-background {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgb(0 0 0 / 0.5);
        z-index: 210;
    }

    &-main {
        position: relative;
        z-index: 220;
        background: #fff;
        border-radius: 8px;
        min-width: 200px;
        max-width: 400px;
        overflow-y: auto;
        width: calc(100% - 40px);
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.16);

        &-header {
            position: relative;
            padding: 20px 20px 0 20px;

            > button {
                position: absolute;
                top: 1rem;
                right: 1rem;
            }
        }

        &-body {
            padding: 0 20px;
        }
    }
}
</style>
