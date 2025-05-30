'use client';

import React, { useEffect, useState } from 'react';
import { fetchPayloadData, PayloadEndpoint } from '@lib/data/payload/client';

type PayloadFetcherProps<T> = {
  endpoint: PayloadEndpoint;
  render: (data: T) => React.ReactNode;
};

// export function PayloadFetcher<T>({ endpoint, render }: PayloadFetcherProps<T>) {
//   const [data, setData] = useState<T | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetchPayloadData<T>(endpoint)
//       .then((res) => {
//         setData(res);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message || 'Fetch error');
//         setLoading(false);
//       });
//   }, [endpoint]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data: {error}</p>;
//   if (!data) return null;

//   return <>
//   {render(data)}</>;
// }

export async function PayloadFetcher(orderId: string) {
//   const cookies = await nextCookies()
//   cookies.set("_medusa_onboarding", "false", { maxAge: -1 })
//   redirect(`http://localhost:7001/a/orders/${orderId}`)
    fetchPayloadData(`promotion-banners`)
  .then((res) => {
    return res;
  })
  .catch((err) => {
    console.error('Fetch error:', err);
    return [];
  });
}
