import Image from 'next/image';
import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import CommentSection from '@/components/CommentSection';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { Photo, Comment } from '@/types';

// Mock data for the detail page
const mockPhoto: Photo = {
  id: '1',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn2DWCuojo9IpsrA9NK5s7Yl4gxBigyBJT39YBX51Hudr1bAJsqeu2bG3VtAL4WGT_ObtKKDUNLRQnZjL8997B4ZSrH9L-C8ahydSlR0gPmm4FblRy_3mIl4-b7p6Kgb0mLPcHczUXbb_gkOGWcgF5GQMQ642Ad4FvIKvy1-aBlbqLdAl3xgGdOA0JdxgmMlgbAcc_qJdJT6r0T-Qb3S0ob72utzAYudUj1YYAl1pH1Sk45768jPRbhHTvdt-6SO-v3xdyKa3ZpNGt',
  caption: 'Beautiful mountain landscape at sunrise',
  commentsCount: 48,
  likesCount: '1.2k',
};

const mockComments: Comment[] = [
  { id: 'c1', text: 'The lighting in this is absolutely incredible. What lens did you use for this shot?' },
  { id: 'c2', text: 'Stunning composition. The reflection is crystal clear.' },
  { id: 'c3', text: 'This makes me want to visit this place immediately. Great work!' },
];

export default function PhotoDetail() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Left Column: Photo Display */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="w-full aspect-4/3 bg-gray-100 relative">
                <Image
                  src={mockPhoto.imageUrl}
                  alt={mockPhoto.caption}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="font-bold">{mockPhoto.likesCount}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-bold">{mockPhoto.commentsCount}</span>
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
          
          {/* Right Column: Comments Section */}
          <CommentSection comments={mockComments} />
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
