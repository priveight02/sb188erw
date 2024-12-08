import React from 'react';
import { ThankYouHero } from './components/ThankYouHero';
import { AIPresentation } from './components/AIPresentation';
import { NextSteps } from './components/NextSteps';
import { CallToAction } from './components/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <ThankYouHero />
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-900">
            Your Path to Marketing Excellence
          </h2>
          <AIPresentation />
        </div>
      </div>
      <NextSteps />
      <CallToAction />
    </div>
  );
}