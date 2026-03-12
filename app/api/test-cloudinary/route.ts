import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function GET() {
  try {
    const config = cloudinary.config();
    console.log('Cloudinary configured with cloud:', config.cloud_name);

    const result = await cloudinary.uploader.upload(
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      {
        folder: 'test',
        public_id: 'test-image',
      }
    );

    return NextResponse.json({
      success: true,
      message: 'Cloudinary connection successful!',
      cloudName: config.cloud_name,
      uploadedImage: {
        public_id: result.public_id,
        url: result.secure_url,
        width: result.width,
        height: result.height,
      },
    });
  } catch (error: unknown) {
    console.error('Cloudinary test failed:', error);
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}