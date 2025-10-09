// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
// Please ensure you are using the correct API from next-sanity.
// If you want to use live content, you may need to use 'createClient' and 'useLiveMode' or similar APIs.
// Here is an example using createClient (adjust according to your actual usage):

import { createClient } from "next-sanity";
import { client } from "./client";

// Export your configured client for use elsewhere
export const sanityClient = createClient({
  ...client.config(),
  apiVersion: "vX", // Replace 'vX' with your actual API version, e.g., '2023-03-25'
});
