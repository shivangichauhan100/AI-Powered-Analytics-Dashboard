'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { LoadingSkeleton } from '@/components/loading-skeleton'
import { ErrorBoundary } from '@/components/error-boundary'
import { ChartsSection } from '@/components/charts-section'
import { mockData } from '@/lib/mock-data'

export default function AudiencePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Header 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen} 
        />
        
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          
          <main className="flex-1 p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
              {/* Page Header */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between animate-fade-in">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Audience
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Understand your audience demographics and behavior
                  </p>
                </div>
              </div>

              {isLoading ? (
                <LoadingSkeleton />
              ) : (
                <>
                  {/* Audience Charts */}
                  <ChartsSection 
                    revenueData={mockData.revenueData}
                    userGrowthData={mockData.userGrowthData}
                    conversionSources={mockData.conversionSources}
                  />

                  {/* Audience Demographics */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Age Groups</h3>
                      </div>
                      <div className="card-content">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm">18-24</span>
                            <span className="font-semibold">25%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">25-34</span>
                            <span className="font-semibold">35%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">35-44</span>
                            <span className="font-semibold">22%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">45+</span>
                            <span className="font-semibold">18%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Gender</h3>
                      </div>
                      <div className="card-content">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm">Female</span>
                            <span className="font-semibold">58%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Male</span>
                            <span className="font-semibold">42%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Location</h3>
                      </div>
                      <div className="card-content">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm">United States</span>
                            <span className="font-semibold">45%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Europe</span>
                            <span className="font-semibold">28%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Asia</span>
                            <span className="font-semibold">18%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Other</span>
                            <span className="font-semibold">9%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Device Type</h3>
                      </div>
                      <div className="card-content">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm">Mobile</span>
                            <span className="font-semibold">62%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Desktop</span>
                            <span className="font-semibold">32%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Tablet</span>
                            <span className="font-semibold">6%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Audience Insights */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Audience Insights</h3>
                      <p className="card-description">Key behavioral patterns and preferences</p>
                    </div>
                    <div className="card-content">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                          <h4 className="font-semibold">Top Interests</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">Technology</span>
                              <span className="font-semibold">78%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Fashion</span>
                              <span className="font-semibold">65%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Travel</span>
                              <span className="font-semibold">52%</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold">Engagement Patterns</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">Peak Hours</span>
                              <span className="font-semibold">7-9 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Avg. Session</span>
                              <span className="font-semibold">4m 32s</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Bounce Rate</span>
                              <span className="font-semibold">23%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </ErrorBoundary>
  )
} 