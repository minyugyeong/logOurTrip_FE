import { defineStore } from "pinia";

export default defineStore("stores/component", {
    state: () => ({
        apiFail: false,
    }),
    getters: {},
    actions: {
        toggleApiFail() {
            this.apiFail = !this.apiFail;
        },
    },
});
