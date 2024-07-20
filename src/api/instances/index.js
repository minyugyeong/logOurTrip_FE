import axios from "axios";
import backendConfig from "./backend";

const success = (config) => config;
const fail = (error) => Promise.reject(error);

function createInstance(createConfig = {}, interceptors = {}) {
  const instance = axios.create(createConfig);
  const setInterceptor = (http) =>
    instance.interceptors[http].use(
      interceptors[http]?.success || success,
      interceptors[http]?.fail || fail
    );
  setInterceptor("request");
  setInterceptor("response");
  return instance;
}

const backendAPI = createInstance(...backendConfig);

export { backendAPI };
