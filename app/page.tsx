'use client';

import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import UploadSection from '@/components/UploadSection';
import PhotoCard from '@/components/PhotoCard';
import { ChevronDown } from 'lucide-react';
import { Photo } from '@/types';
import { Pagination, ConfigProvider } from 'antd';

const mockPhotos: Photo[] = [
  {
    id: '1',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBegldGPFtTX8GEV19XQfQ2AnB8oSXt5J7Mc510k7_TB45Xp5utcdAVhjt11JxXO9TtyIw0zWufKl6HllHYUxbskWDSH5CcKqlJbliiXHUrteIPkD2aCvFb10hUxOek0E_IJ7gjIaBGYVl1fUlkKVyJk9Kp34Wibb0l65gk2BDroAhyyj2MdOYz59S9LYZJb9Rf-FNhauT9I8fvRtxfG1h_hfJQFzZyyvS1ssN3u5vOqxhAuG4f5yZxDcI4qbvVrzubpZSFGNqYURRf',
    caption: 'Woke up at 4 AM to catch this breathtaking view. The fog rolling over the valley was absolutely magical.',
    commentsCount: 12,
  },
  {
    id: '2',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsb05N12eFyv4CGkmW0-l-D-K-A6aUAtPSphGNFtw3RkqHiDPP4H2c76jruKf1WB-nbi1tWX1X3a1dZs8lU4y4_5Z7LJlqD2MQtf9Z8n2gpbax_KdnJ7aIu-VcGiDIvN2wCMeXtGgofq_K22blyZMVsbqI3VNLKPCntJjriNOKM-7lvFl32sau_-4OhixTQkAoAtNCKXbcVU7HBopXgd2HCNecqb69o4KaZlu9PSfX8z6iOhSjFmQjWOTSQN8-fRLeMDv0NUPKzxV_',
    caption: 'Exploring the geometric patterns in the downtown business district. Modern glass facades are perfect for reflections.',
    commentsCount: 8,
  },
  {
    id: '3',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQRJGCuTUrYVAiLAWVyKcpkjeBgGS7dAbpLTsZc2sgmcU5Ny1_zfvNoeGg1Skel58WFbUp5bbXGmceguphmAqOuOL0IXg_D3vBLkvWV9HPusbAGqMNGedSBuUEdJJrWiMGvDjgNTNWI8MfTWMR6p7A5kx7xzQvPmpPiXIcCH_3L9XYQUHaMcX3taxYIxsH-Kn-AfqwPmBipS5JqUxC_Mlf09HY87_hsGDnOxSC2jMCyc38Tm511tZSgobHooxP2h-565PMT1A7eqeo',
    caption: 'The clarity of the water at this hidden cove was unreal. You could see all the way to the sandy bottom.',
    commentsCount: 5,
  },
  {
    id: '4',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLYrlyif48r7p3g2gvdM3YxiCEHI_7SDE9EQZ76iqcwlXQ83qYJNTYe9WTePcF7hees5c3GNlQv1P4l9237vwbBRIamfGwW-hAgLFtgKrhWZd35Cm4fK5C9rzopturn3-T50mazydVuq09a-cBhtlVSQ8Db9kxLQ2RYQmxXdwSP45WMXZxRb9b1Z07gEzISd01lkG4VaUtIP3RM7eZpD9kLDof3_pSwX_N-Gv1yPeSOCCqrsIfcSk2EiRXI1UpdZwYarlXWs4_r3rh',
    caption: 'Sunlight filtering through the canopy of old-growth redwoods. A truly peaceful moment in nature.',
    commentsCount: 15,
  },
  {
    id: '5',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwUfkuDLzJNePFSHLafM_FLVTmQxVASLID4KrGnxDnSVVG_8YXhtaOd7tDZBQRVrSqZS5ho9JpUj5Bpwn5CyxuzgEeLO35U8T5y0YYnFcCVD4DjYChwOUJ6gKhemZ-6DkRl7v2xS626QXiYpPJ6uSiAx_4ZaXOd8KRiI33uT_DP1WlPNdsU0_n2g7AX5dBRvoAFkicXjpL2V1ji0GmvlWtNsjIfufdyP2Buw_tYTe58MItWIjmatleQWH10iFnWDddiAunuSzDicJZ',
    caption: 'The sky turned impossible shades of pink and orange over the dunes tonight. Nature\'s best show.',
    commentsCount: 21,
  },
  {
    id: '6',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEMdVeowtFNlsYqVRRRe6ISAoo_dlG0v7zIgWZbCCZpBREapPu6koTfv9jC_EkWGNMD4s1UaUuK0n_bRXQqFt0vyEo2IX76WYBRpd5S9WmKvSifqTKfAfRqhZ5xfuGVExLHCPu5FZkS-gRPhteMeRb5GGvSxzR3RjoF8S5QV8Yr7cFXyGWQZlI8EbT0NjqeO61WiuRGBk69Od8MAfJlocEuWg816jzdIjUBuspTm0NY1UUHuweKei1C8iowWCL1idzu-XAks8H77GN',
    caption: 'Testing out my new macro lens on some garden blossoms. The detail in the petals is fascinating.',
    commentsCount: 3,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
        <UploadSection />
        
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
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </section>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <ConfigProvider theme={{ token: { colorPrimary: '#4f46e5' } }}>
            <Pagination defaultCurrent={1} total={500} showSizeChanger={false} />
          </ConfigProvider>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
