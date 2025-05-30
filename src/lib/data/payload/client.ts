// // lib/cms/client.ts
// type CMSEndpoint = 'promotion-banners' | 'featured-products' | 'marketing-content';

// export class CMSClient {
//   private baseUrl: string;
//   private defaultHeaders: Record<string, string>;

//   constructor() {
//     this.baseUrl = process.env.PAYLOAD_API_URL || 'https://c2b-cms.vercel.app/api';
//     this.defaultHeaders = {
//       'Content-Type': 'application/json'
//     };
//   }

//   async fetch<T>(endpoint: CMSEndpoint): Promise<T> {
//     try {
//       const response = await fetch(`${this.baseUrl}/${endpoint}`, {
//         headers: this.defaultHeaders,
//         // next: { revalidate: 3600 } // ISR: Revalidate every hour
//       });

//       if (!response.ok) {
//         throw new Error(`CMS request failed: ${response.statusText}`);
//       }

//       return await response.json();
//     } catch (error) {
//       console.error(`CMS fetch error for ${endpoint}:`, error);
//       throw error;
//     }
//   }
// }

// export const cms = new CMSClient();


export type PayloadEndpoint = string;

const BASE_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'https://c2b-cms.vercel.app/api';

export async function fetchPayloadData<T>(endpoint: PayloadEndpoint): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }, // Optional: ISR support
    });

    if (!response.ok) {
      throw new Error(`CMS request failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`CMS fetch error for ${endpoint}:`, error);
    throw error;
  }
}
