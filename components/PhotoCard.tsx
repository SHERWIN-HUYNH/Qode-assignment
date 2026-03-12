import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Photo } from '@/types';

interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group">
      <Link href={`/photo/${photo.id}`} className="relative aspect-4/3 overflow-hidden block">
        <Image
          src={photo.imageUrl}
          alt={photo.caption}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </Link>
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">
          {photo.caption}
        </p>
        <Link href={`/photo/${photo.id}`} className="flex items-center text-xs font-bold text-indigo-600 cursor-pointer hover:underline">
          <MessageCircle className="w-4 h-4 mr-1" />
          View {photo.commentsCount} comments
        </Link>
      </div>
    </article>
  );
}
