import { NextRequest, NextResponse } from 'next/server';
import { runGeoAudit } from '@/lib/auditRunner';
import { AuditRequestPayload } from '@/types/geo';

export async function POST(req: NextRequest) {
  try {
    const body: AuditRequestPayload = await req.json();

    if (!body.url) {
      return NextResponse.json(
        { error: 'A valid target URL or brand identifier is required.' },
        { status: 400 }
      );
    }

    const report = await runGeoAudit(body);
    return NextResponse.json(report);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown server error';
    return NextResponse.json(
      { error: 'Failed to process GEO audit', details: message },
      { status: 500 }
    );
  }
}
