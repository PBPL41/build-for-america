
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CallToAction from '@/components/ui/CallToAction';
import { Card } from '@/components/ui/card';
import YouTubeEmbed from '@/components/ui/YouTubeEmbed';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import FeatureCard from '@/components/ui/FeatureCard';

const WhyItMatters = () => {
  return <main>
      {/* Hero Section */}
      <section className="bg-bfa-earth text-white py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Why It Matters</h1>
            <p className="text-xl">
              The housing crisis affects millions of Americans, from essential workers to young families to seniors on fixed incomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          {/* Human Story */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-bfa-gray-light rounded-lg overflow-hidden h-80">
                <img alt="Teacher working from home" className="w-full h-full object-cover" src="/lovable-uploads/867536c5-50cf-4c0f-8fdf-7e1f645524b4.png" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-bfa-blue-dark">The Housing Crisis Is Undeniable</h2>
                <p className="text-lg mb-4">America's housing shortage is reshaping communities, pushing essential workers, young families, and seniors further from opportunity, stability, and belonging. This crisis isn't abstract — it's on every block where teachers, nurses, and service workers are commuting longer, paying more, and living with less.</p>
                
                
              </div>
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Watch: The Housing Crisis Explained</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A clear explanation of how we got here and what we can do about it
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <YouTubeEmbed 
                videoId="0Flsg_mzG-M" 
                title="Housing Crisis Explained" 
                start={34}
                end={357}
              />
            </div>
          </div>

          {/* Housing Data */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">The Housing Crisis By The Numbers</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The data tells a clear story about America's housing challenges
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
                <p className="text-4xl font-bold text-bfa-red mb-2">3.7M</p>
                <p className="text-gray-600">Unit housing shortage nationwide</p>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
                <p className="text-4xl font-bold text-bfa-red mb-2">50%</p>
                <p className="text-gray-600">Of renters are cost-burdened</p>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
                <p className="text-4xl font-bold text-bfa-red mb-2">76%</p>
                <p className="text-gray-600">Of Americans believe housing affordability is a growing problem</p>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm text-center">
                <p className="text-4xl font-bold text-bfa-red mb-2">12M+</p>
                <p className="text-gray-600">Households spend more than half of their income on housing</p>
              </div>
            </div>
          </div>

          {/* Podcast Section */}
          <div className="mb-16 bg-bfa-gray-light p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Listen to Our Podcast</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Exploring America's housing challenges and innovative solutions
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  {/* Replace placeholder with actual image */}
                  <div className="rounded-lg overflow-hidden aspect-square">
                    <AspectRatio ratio={1}>
                      <img 
                        src="/lovable-uploads/370b5102-86af-4d54-973f-dd3889dc8a32.png" 
                        alt="Podcast host" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Episode 1: America's Housing Crisis Explained</h3>
                  <p className="text-gray-600 mb-4">
                    In this inaugural episode, we break down the complex factors driving America's housing shortage and explore how zoning reform can help communities address this growing challenge.
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-500">
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="bg-bfa-blue hover:bg-bfa-blue-dark text-white">Play Episode</Button>
                    <Button variant="outline" className="border-bfa-blue text-bfa-blue hover:bg-bfa-blue hover:text-white">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials - First Row */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Voices from Your Communities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">What does your city government have to say about zoning reform?</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <TestimonialCard 
                quote="Zoning should reflect the shared vision of our future growth. It should fit together the pieces of where we are now, where we're trying to go, and how we get there. We plan to transform Boston's zoning code into one that enables Boston to be a family-first, thriving city that is bustling with innovation." 
                name="Mayor Wu's Planning Department" 
                title="City of Boston" 
                organization="" />
              
              <TestimonialCard 
                quote="The shortage of affordable housing hurts everyone. Not just the homeless, but everyone from the elderly on fixed incomes to young people who want to live and raise their children in the city where they grew up, and the firemen, teachers and nurses we all depend on who can't afford to live where they work." 
                name="Paul Krekorian" 
                title="Former Council President" 
                organization="Los Angeles City Council" />
              
              <TestimonialCard 
                quote="For too long, restrictive, outdated zoning has held our city and our neighborhoods back. To address the city's decades-long housing crisis and make New York City the best place to raise a family, we must take bold, transformational action to build more homes in transit-rich areas near New Yorkers' jobs and services." 
                name="Eric Adams" 
                title="Mayor" 
                organization="New York City" />
            </div>
            
            {/* Added Second Row of Testimonials */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard 
                quote="I'm very glad to have another opportunity to vote for more housing options in our city. I look forward to continuing conversations about how we can address our housing shortage and ensure that Portland is a place where people from all different backgrounds have the opportunity to live." 
                name="Ted Wheeler" 
                title="Former Mayor" 
                organization="Portland" />
              
              <TestimonialCard 
                quote="San Francisco should be a city with space for more families, more workers, and more dreams. Our administration wants to build enough housing for the next generation of San Franciscans, so that kids who grow up here have the same opportunity to raise their own children here. For too long, San Francisco has made it easier to block new homes than to build them. And while our needs have changed since the 1970s, much of our zoning hasn't." 
                name="Daniel Lurie" 
                title="Mayor" 
                organization="San Francisco" />
              
              <TestimonialCard 
                quote="To bring down costs, support current residents, and prepare for future growth, Seattle needs more housing and more housing choices – it's that simple." 
                name="Bruce Harrell" 
                title="Mayor" 
                organization="Seattle" />
            </div>
          </div>

          {/* Impact Section - IMPROVED LAYOUT */}
          <div className="bg-bfa-sand p-6 md:p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-bfa-blue-dark text-center">The Impact of Zoning Reform</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                title="Housing Supply"
                description="Zoning reforms can increase housing units by 9-13% after 10 years."
                className="p-0 h-full flex flex-col"
              />
              
              <FeatureCard
                title="Affordability"
                className="p-0 h-full flex flex-col overflow-hidden md:col-span-2 lg:col-span-1"
                contentClassName="flex-grow"
              >
                <div className="h-auto md:h-64 lg:h-56 overflow-hidden">
                  <img 
                    src="/lovable-uploads/cac904b2-9a17-473a-b79b-fc0b053caf38.png" 
                    alt="Chart showing rent growth is slower in jurisdictions that have allowed more housing" 
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              </FeatureCard>
              
              <FeatureCard
                title="Economic Growth"
                description="Studies estimate that restrictive zoning reduced U.S. GDP growth by more than 50% from 1964 to 2009."
                className="p-0 h-full flex flex-col"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction title="Join the Movement for Housing Opportunity" subtitle="Add your voice to the growing coalition supporting zoning reform" buttonText="Join the Coalition" buttonLink="/coalition" />
    </main>;
};
export default WhyItMatters;
