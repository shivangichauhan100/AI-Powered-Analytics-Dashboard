'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { LoadingSkeleton } from '@/components/loading-skeleton'
import { ErrorBoundary } from '@/components/error-boundary'
import { ChartsSection } from '@/components/charts-section'
import { mockData } from '@/lib/mock-data'

export default function RevenuePage() {
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
                    Revenue
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Track your revenue performance and financial metrics
                  </p>
                </div>
              </div>

              {isLoading ? (
                <LoadingSkeleton />
              ) : (
                <>
                  {/* Revenue Charts */}
                  <ChartsSection 
                    revenueData={mockData.revenueData}
                    userGrowthData={mockData.userGrowthData}
                    conversionSources={mockData.conversionSources}
                  />

                  {/* Revenue Metrics */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Monthly Revenue</h3>
                      </div>
                      <div className="card-content">
                        <p className="text-3xl font-bold text-green-600">$124,500</p>
                        <p className="text-sm text-muted-foreground">+12.5% vs last month</p>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Average Order Value</h3>
                      </div>
                      <div className="card-content">
                        <p className="text-3xl font-bold">$127.50</p>
                        <p className="text-sm text-muted-foreground">+8.2% vs last month</p>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Customer Lifetime Value</h3>
                      </div>
                      <div className="card-content">
                        <p className="text-3xl font-bold">$1,240</p>
                        <p className="text-sm text-muted-foreground">+15.3% vs last month</p>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Revenue per User</h3>
                      </div>
                      <div className="card-content">
                        <p className="text-3xl font-bold">$2.73</p>
                        <p className="text-sm text-muted-foreground">+5.7% vs last month</p>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Breakdown */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Revenue Breakdown</h3>
                      <p className="card-description">Revenue by product category and channel</p>
                    </div>
                    <div className="card-content">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                          <h4 className="font-semibold">By Product Category</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Electronics</span>
                              <span className="font-semibold">$45,200</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Clothing</span>
                              <span className="font-semibold">$38,500</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Home & Garden</span>
                              <span className="font-semibold">$25,800</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Books</span>
                              <span className="font-semibold">$15,000</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold">By Channel</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Direct Sales</span>
                              <span className="font-semibold">$52,300</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Online Ads</span>
                              <span className="font-semibold">$41,200</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Social Media</span>
                              <span className="font-semibold">$18,500</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Email Marketing</span>
                              <span className="font-semibold">$12,500</span>
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