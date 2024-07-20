// import { useComponent } from "@stores";
// import { storeToRefs } from 'pinia';

export default [
    {
        baseURL: "/api",
        headers: {
            "Content-type": "application/json",
        },
    },
    {
        request: {
            success(config) {
                // const user = useUser();
                // const { memNo, sessionId, token } = storeToRefs(user);

                // config.params = config.params || {};

                // switch (config.method) {
                //     case "get":
                //         if (memNo.value) {
                //             config.params.memNo = memNo.value;
                //             config.params.sessionId = sessionId.value;
                //             config.params.token = token.value;
                //         }

                //         break;
                //     case "post":
                //         if (memNo.value) {
                //             config.data = config.data || {};
                //             config.data.memNo = memNo.value;
                //             config.data.sessionId = sessionId.value;
                //             config.data.token = token.value;
                //         } else if (config?.data instanceof FormData) {
                //             config.data.append("memNo", memNo.value);
                //             config.data.append("sessionId", sessionId.value);
                //             config.data.append("token", token.value);
                //         }

                //         break;
                // }

                return config;
            },
        },
        response: {
            success(axiosResponse) {
                const data = axiosResponse.data;

                // if (status === 'F') {
                //     const user = useUser();
                //     user.logout();

                //     return { status: '00' };
                // } else if (status === 'OUT') {
                //     const component = useComponent();
                //     component.setMultiLogin(true);
                // }

                return data;
            },
            fail(response) {
                return response.response.data;
            },
        },
    },
];
