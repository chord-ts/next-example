'use client';
import { useEffect, useState } from 'react';
import { client } from '@chord-ts/rpc/client';
import type { Client } from './rpc/route';

const rpc = client<Client>({ endpoint: '/rpc' });

export default function HelloPage() {
  const [res, setRes] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await rpc.Say.hello('world');
      setRes(result);
      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-sm text-blue-600">Test Endpoint</h1>
      <p>{res}</p>
    </div>
  );
}