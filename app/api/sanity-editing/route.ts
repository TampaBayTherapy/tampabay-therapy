// app/api/sanity-editing/route.ts

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const isEditing = searchParams.get('editing') === 'true';
  
  const cookieStore =await cookies();
  
  if (isEditing) {
    // Set a cookie that expires in 24 hours when editing mode is activated
    cookieStore.set('sanity-editing', 'true', { 
      maxAge: 86400,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    });
    return NextResponse.json({ status: 'editing mode activated' });
  } else {
    // Remove the cookie when editing mode is deactivated
    cookieStore.delete('sanity-editing');
    return NextResponse.json({ status: 'editing mode deactivated' });
  }
}