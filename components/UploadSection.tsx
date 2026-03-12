'use client';

import { ImagePlus, Upload as UploadIcon, FileEdit, Send } from 'lucide-react';
import { Upload, Input, Button, ConfigProvider } from 'antd';

const { Dragger } = Upload;
const { TextArea } = Input;

export default function UploadSection() {
  return (
    <section className="mb-16 flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">Explore Community Photos</h1>
        <p className="text-gray-500 text-lg">Browse stunning imagery shared by photographers around the world</p>
      </div>
      <div className="w-full max-w-5xl bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
        {/* Gradient Header */}
        <div className="bg-linear-to-r from-indigo-500 to-fuchsia-500 px-8 py-5 flex items-center space-x-4">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <ImagePlus className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg leading-tight">Share Your Moments</h2>
            <p className="text-white/80 text-sm">Upload high-quality photos and add meaningful captions</p>
          </div>
        </div>
        {/* Content Area */}
        <ConfigProvider theme={{ token: { colorPrimary: '#4f46e5', borderRadius: 12, fontFamily: 'inherit' } }}>
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Share a Photo */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-7 h-7 bg-indigo-50 rounded flex items-center justify-center">
                  <UploadIcon className="text-indigo-600 w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Share a Photo</h3>
              </div>
              <div className="flex-1 min-h-[180px] flex flex-col">
                <Dragger multiple={false} className="bg-gray-50/50" style={{ padding: '2rem' }}>
                  <div className="ant-upload-drag-icon flex justify-center">
                    <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center border border-gray-100">
                      <UploadIcon className="text-indigo-600 w-8 h-8" />
                    </div>
                  </div>
                  <p className="ant-upload-text font-bold text-gray-900 mt-4">Upload Image</p>
                  <p className="ant-upload-hint text-xs text-gray-400 mt-1">Click or drag to upload</p>
                  <p className="ant-upload-hint text-[10px] text-gray-400">JPG, PNG (Max 10MB)</p>
                </Dragger>
              </div>
            </div>
            {/* Add a caption... */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-7 h-7 bg-indigo-50 rounded flex items-center justify-center">
                  <FileEdit className="text-indigo-600 w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Add a caption...</h3>
              </div>
              <div className="flex-1 flex flex-col">
                <TextArea
                  className="flex-1 text-sm py-4 px-5"
                  placeholder="Tell a story about this photo..."
                  style={{ resize: 'none' }}
                />
              </div>
            </div>
          </div>
          {/* Action Area */}
          <div className="px-8 pb-8 pt-2 flex justify-end">
            <Button 
              type="primary" 
              size="large" 
              icon={<Send className="w-4 h-4" />} 
              className="bg-linear-to-r from-indigo-500 to-fuchsia-500 border-0 h-12 px-10 rounded-xl font-bold text-base shadow-lg shadow-indigo-200 flex items-center"
            >
              Post Photo
            </Button>
          </div>
        </ConfigProvider>
      </div>
    </section>
  );
}
