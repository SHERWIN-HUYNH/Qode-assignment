'use client';

import { useState } from 'react';
import { Comment } from '@/types';
import { Input, Button, ConfigProvider, App } from 'antd';

const { TextArea } = Input;

interface CommentSectionProps {
  comments: Comment[];
  imageId: string;
  onCommentAdded?: () => void;
}

export default function CommentSection({ comments, imageId, onCommentAdded }: CommentSectionProps) {
  const { message } = App.useApp();
  const [newComment, setNewComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!newComment.trim()) {
      message.error('Please enter a comment');
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch(`/api/images/${imageId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment }),
      });

      if (!response.ok) {
        throw new Error('Failed to post comment');
      }

      message.success('Comment posted successfully!');
      setNewComment('');
      
      if (onCommentAdded) {
        onCommentAdded();
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to post comment';
      message.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-4 flex flex-col gap-6">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 space-y-8">
        <div className="space-y-6">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="flex flex-col">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600">{comment.content}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center py-4">No comments yet. Be the first to comment!</p>
          )}
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
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                disabled={submitting}
              />
              <div className="flex justify-end">
                <Button 
                  type="primary" 
                  size="large" 
                  className="bg-indigo-600 h-11 px-10 rounded-xl font-bold text-sm shadow-md"
                  onClick={handleSubmit}
                  loading={submitting}
                  disabled={!newComment.trim()}
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
