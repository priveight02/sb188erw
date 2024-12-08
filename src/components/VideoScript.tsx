import React from 'react';
import { videoSections } from '../data/videoSections';

export function VideoScript() {
  return (
    <div className="bg-zinc-800 rounded-xl p-6 text-white">
      <h3 className="text-2xl font-bold mb-6 text-center">Video Overview</h3>
      <div className="space-y-6">
        {videoSections.map((section, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-zinc-700/50 rounded-lg hover:bg-zinc-700 transition-all">
            <div className="flex-shrink-0">
              <section.icon className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-lg">{section.title}</h4>
                <span className="text-sm text-emerald-400">{section.timestamp}</span>
              </div>
              <p className="text-zinc-300 text-sm">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}