import { defineStore } from "pinia";

export default defineStore("stores/user", {
    state: () => ({
        id: "",
        name: "",
    }),
    getters: {
        getName: (state) => state.name,
    },
    actions: {
        login(id, name) {
            this.id = id;
            this.name = name;
        },
        logout() {
            this.id = "";
            this.name = "";
        },
        setName(name) {
            this.name = name;
        },
    },
});
