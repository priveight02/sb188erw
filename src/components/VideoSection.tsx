import React from 'react';
import { AIPresentation } from './AIPresentation';
import { VideoScript } from './VideoScript';

export function VideoSection() {
  return (
    <div className="bg-gradient-to-b from-amber-900 to-amber-950 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-100 text-center mb-12">
            Your Path to Marketing Excellence
          </h2>
          <AIPresentation />
          <div className="mt-12">
            <VideoScript />
          </div>
        </div>
      </div>
    </div>
  );
}