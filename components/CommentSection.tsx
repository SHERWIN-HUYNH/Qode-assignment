'use client';

import { Comment } from '@/types';
import { Input, Button, ConfigProvider } from 'antd';

const { TextArea } = Input;

interface CommentSectionProps {
  comments: Comment[];
}

export default function CommentSection({ comments }: CommentSectionProps) {
  return (
    <div className="lg:col-span-4 flex flex-col gap-6">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-8">
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex flex-col">
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-sm text-gray-600">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Add Comment Section */}
        <div className="mt-12 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold mb-4 text-gray-900">Write a comment...</h3>
          <ConfigProvider theme={{ token: { colorPrimary: '#4f46e5', borderRadius: 12, fontFamily: 'inherit' } }}>
            <div className="flex flex-col gap-4">
              <TextArea
                className="bg-gray-50 text-sm py-4 px-5"
                placeholder="Share your thoughts on this photo..."
                rows={4}
                style={{ resize: 'none' }}
              />
              <div className="flex justify-end">
                <Button 
                  type="primary" 
                  size="large" 
                  className="bg-indigo-600 h-11 px-10 rounded-xl font-bold text-sm shadow-md"
                >
                  Post Comment
                </Button>
              </div>
            </div>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}
