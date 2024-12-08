import React from 'react';
import { CheckCircle } from 'lucide-react';

export function ThankYouHero() {
  return (
    <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <CheckCircle className="w-20 h-20 mx-auto mb-8 text-red-300" />
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-200 to-red-300 bg-clip-text text-transparent">
          Thank You for Choosing OFM Extended
        </h1>
        <p className="text-xl text-red-50 max-w-2xl mx-auto">
          Your journey to exceptional marketing success begins now. We're excited to help you achieve your business goals.
        </p>
      </div>
    </div>
  );
}