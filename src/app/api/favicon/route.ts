import { NextRequest } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const theme = url.searchParams.get('theme') || 'light';
  const fileName = theme === 'dark' ? 'terminal_black.png' : 'terminal_white.png';
  const filePath = path.join(process.cwd(), 'assets', fileName);
  try {
    const buffer = await readFile(filePath);
    const bytes = new Uint8Array(buffer);
    return new Response(bytes, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'no-cache',
      },
    });
  } catch {
    return new Response('Not Found', { status: 404 });
  }
}
