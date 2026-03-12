'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import CommentSection from '@/components/CommentSection';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { ImageWithComments } from '@/types';
import { Spin } from 'antd';

export default function PhotoDetail() {
  const params = useParams();
  const imageId = params.id as string;
  
  const [image, setImage] = useState<ImageWithComments | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImage = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/images/${imageId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      
      const data = await response.json();
      setImage(data.image);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load image');
    } finally {
      setLoading(false);
    }
  }, [imageId]);

  useEffect(() => {
    if (imageId) {
      fetchImage();
    }
  }, [imageId, fetchImage]);

  const handleCommentAdded = () => {
    // Refresh the image data to show new comment
    fetchImage();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Spin size="large" />
        </main>
      </div>
    );
  }

  if (error || !image) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500 text-lg">{error || 'Image not found'}</p>
          </div>
        </main>
      </div>
    );
  }

  const caption = image.comments[0]?.content || 'No caption';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Photo Display */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="w-full aspect-4/3 bg-gray-100 relative">
                <Image
                  src={image.cloudinaryUrl}
                  alt={caption}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-800 mb-4">{caption}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-bold">{image.comments.length} comments</span>
                    </button>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Comments Section */}
          <CommentSection 
            comments={image.comments} 
            imageId={image.id}
            onCommentAdded={handleCommentAdded}
          />
        </div>
      </main>
    </div>
  );
}
