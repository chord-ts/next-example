// src/app/api/rpc/route.ts
import { type NextRequest } from 'next/server';
import { Composer, toRPC } from '@chord-ts/rpc';

class Say {
  hello(name: string): string {
    return `Hello, ${name}!`;
  }
}

const composer = Composer.init({
  Say: toRPC(new Say()),
});

export type Client = typeof composer.clientType;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = await composer.exec(body);
  return Response.json(result); 
}