'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { MetricCards } from '@/components/metric-cards'
import { ChartsSection } from '@/components/charts-section'
import { DataTable } from '@/components/data-table'
import { DateRangeFilter } from '@/components/date-range-filter'
import { LoadingSkeleton } from '@/components/loading-skeleton'
import { ErrorBoundary } from '@/components/error-boundary'
import { mockData } from '@/lib/mock-data'

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    to: new Date()
  })
  const [data, setData] = useState(mockData)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Show loading for 1.5 seconds

    return () => clearTimeout(timer)
  }, [])

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        metrics: {
          ...prevData.metrics,
          revenue: prevData.metrics.revenue + Math.random() * 1000,
          users: prevData.metrics.users + Math.floor(Math.random() * 50),
          conversions: prevData.metrics.conversions + Math.floor(Math.random() * 10),
        }
      }))
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

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
          <div className="mx-auto max-w-7xl space-y-12">
            {/* Page Header */}
                          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between animate-fade-in">
                <div className="space-y-3 -ml-2">
                  <h1 className="text-5xl font-bold tracking-tight gradient-text">
                    Analytics Dashboard
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    AI-powered insights and real-time marketing analytics
                  </p>
                </div>
              <DateRangeFilter 
                dateRange={dateRange} 
                setDateRange={setDateRange} 
              />
            </div>

              {isLoading ? (
                <LoadingSkeleton />
              ) : (
                <>
                  {/* Metric Cards */}
                  <MetricCards data={data.metrics} />

                  {/* Charts Section */}
                  <ChartsSection 
                    revenueData={data.revenueData}
                    userGrowthData={data.userGrowthData}
                    conversionSources={data.conversionSources}
                  />

                  {/* Data Table */}
                  <div className="card">
                    <div className="card-header">
                      <h2 className="card-title">Campaign Performance</h2>
                      <p className="card-description">
                        Detailed view of all marketing campaigns and their performance metrics
                      </p>
                    </div>
                    <div className="card-content">
                      <DataTable data={data.campaigns} />
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