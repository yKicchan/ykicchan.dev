import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "ykicchan-blog",
  apiKey: process.env.API_KEY ?? "",
});
