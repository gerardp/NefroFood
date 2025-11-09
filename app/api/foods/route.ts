import { NextRequest, NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const dbPath = path.join(process.cwd(), 'database.sqlite');
    const db = new Database(dbPath, { readonly: true });
    
    const foods = db.prepare('SELECT * FROM foods').all();
    db.close();
    
    return NextResponse.json(foods);
  } catch (error) {
    console.error('Error fetching foods:', error);
    return NextResponse.json({ error: 'Failed to fetch foods' }, { status: 500 });
  }
}