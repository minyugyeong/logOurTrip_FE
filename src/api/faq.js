import { backendAPI } from "./instances";

const fetchGetFAQList = (userType) =>
  backendAPI.post("/faq/faqList", { userType });

const fetchGetFAQDetail = (id) => backendAPI.post("/faq/detailFaq", { id });

export { fetchGetFAQList, fetchGetFAQDetail };
