// utils/contentful.js

import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchAllProductSlugs() {
  try {
    const response = await client.getEntries({
      content_type: 'clothes', // Adjust this according to your Content Type ID
      select: 'fields.slug', // Assuming you have a field named 'slug' for your products
    });

    return response.items.map((item) => item.fields.slug);
  } catch (error) {
    console.error('Error fetching product slugs:', error);
    return [];
  }
}
