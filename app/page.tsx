'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import UploadSection from '@/components/UploadSection';
import PhotoCard from '@/components/PhotoCard';
import { ChevronDown } from 'lucide-react';
import { Photo } from '@/types';
import { Pagination, ConfigProvider, Spin } from 'antd';

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 9;

  const fetchImages = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/images?page=${page}&limit=${pageSize}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const data = await response.json();
      setPhotos(data.images);
      setTotal(data.total);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(currentPage);
  }, [currentPage]);

  const handleUploadSuccess = () => {
    setCurrentPage(1);
    fetchImages(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
        <UploadSection onUploadSuccess={handleUploadSuccess} />
        
        {/* Feed Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Recent Photo Feed</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Sort by:</span>
            <button className="text-indigo-600 font-semibold flex items-center hover:text-indigo-700 transition-colors">
              Newest First
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Photo Feed */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Spin size="large" />
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No photos yet. Be the first to upload!</p>
          </div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </section>
        )}

        {/* Pagination */}
        {!loading && total > 0 && (
          <div className="mt-12 flex justify-center">
            <ConfigProvider theme={{ token: { colorPrimary: '#4f46e5' } }}>
              <Pagination
                current={currentPage}
                total={total}
                pageSize={pageSize}
                showSizeChanger={false}
                onChange={handlePageChange}
              />
            </ConfigProvider>
          </div>
        )}
      </main>
    </div>
  );
}
