import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: imageId } = await params;
    const { content } = await request.json();

    if (!content || content.trim().length === 0) {
      return NextResponse.json(
        { error: 'Comment content is required' },
        { status: 400 }
      );
    }

    const imageExists = await prisma.image.findUnique({
      where: { id: imageId },
    });

    if (!imageExists) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        imageId,
        content: content.trim(),
      },
    });

    return NextResponse.json({ comment });
  } catch (error: unknown) {
    console.error('Create comment error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create comment';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
