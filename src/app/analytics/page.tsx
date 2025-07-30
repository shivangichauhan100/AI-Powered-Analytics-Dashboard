'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { LoadingSkeleton } from '@/components/loading-skeleton'
import { ErrorBoundary } from '@/components/error-boundary'
import { ChartsSection } from '@/components/charts-section'
import { mockData } from '@/lib/mock-data'

export default function AnalyticsPage() {
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
                    Analytics
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Deep dive into your marketing performance metrics
                  </p>
                </div>
              </div>

              {isLoading ? (
                <LoadingSkeleton />
              ) : (
                <>
                  {/* Advanced Analytics Charts */}
                  <ChartsSection 
                    revenueData={mockData.revenueData}
                    userGrowthData={mockData.userGrowthData}
                    conversionSources={mockData.conversionSources}
                  />

                  {/* Additional Analytics Content */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Performance Insights</h3>
                        <p className="card-description">AI-powered recommendations</p>
                      </div>
                      <div className="card-content">
                        <div className="space-y-4">
                          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <h4 className="font-semibold text-green-800 dark:text-green-200">Positive Trend</h4>
                            <p className="text-sm text-green-700 dark:text-green-300">Revenue increased by 15% this month</p>
                          </div>
                          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Recommendation</h4>
                            <p className="text-sm text-blue-700 dark:text-blue-300">Consider increasing budget for Google Ads campaigns</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Key Metrics</h3>
                        <p className="card-description">Important performance indicators</p>
                      </div>
                      <div className="card-content">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Conversion Rate</span>
                            <span className="font-semibold">3.2%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Average Order Value</span>
                            <span className="font-semibold">$127.50</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Customer Lifetime Value</span>
                            <span className="font-semibold">$1,240</span>
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