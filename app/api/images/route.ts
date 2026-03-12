import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '9');
    const skip = (page - 1) * limit;

    const [images, total] = await Promise.all([
      prisma.image.findMany({
        include: {
          comments: {
            select: {
              id: true,
              content: true,
              createdAt: true,
            },
            orderBy: {
              createdAt: 'asc', 
            },
          },
        },
        orderBy: {
          createdAt: 'desc', 
        },
        skip,
        take: limit,
      }),
      prisma.image.count(),
    ]);

    const transformedImages = images.map((image) => ({
      id: image.id,
      imageUrl: image.cloudinaryUrl,
      caption: image.comments[0]?.content || '',
      commentsCount: image.comments.length,
      createdAt: image.createdAt,
    }));

    return NextResponse.json({
      images: transformedImages,
      total,
      page,
      pageSize: limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error: unknown) {
    console.error('Fetch images error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch images';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
