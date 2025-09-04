import { createClient } from '@sanity/client';

// Create Sanity client
export const sanityClient = createClient({
    projectId: "80yxq4ba",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});

// Export default client
export default sanityClient;
