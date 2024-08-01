export const dynamic = 'force-dynamic';

export async function GET() {
  return new Response(JSON.stringify([{name:`entry from ${new Date().toISOString()}`}]));
}