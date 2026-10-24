import { NextResponse } from 'next/server';
import { PRESET_BRANDS } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json({ presets: PRESET_BRANDS });
}
