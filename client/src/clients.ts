import {createClient}  from "@sanity/client";

const backendClient = createClient ({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
  apiVersion: '2021-08-31'
});

export default backendClient