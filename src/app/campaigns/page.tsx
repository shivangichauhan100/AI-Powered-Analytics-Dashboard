'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { LoadingSkeleton } from '@/components/loading-skeleton'
import { ErrorBoundary } from '@/components/error-boundary'
import { DataTable } from '@/components/data-table'
import { MetricCards } from '@/components/metric-cards'
import { mockData } from '@/lib/mock-data'
import { Plus, Target, TrendingUp, Users } from 'lucide-react'

export default function CampaignsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const campaignMetrics = {
    revenue: 124500.50,
    users: 45678,
    conversions: 2341,
    growth: 12.5
  }

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
                    Campaigns
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Manage and monitor your marketing campaigns
                  </p>
                </div>
                <button className="btn-primary h-11 px-6">
                  <Plus className="h-4 w-4 mr-2" />
                  New Campaign
                </button>
              </div>

              {isLoading ? (
                <LoadingSkeleton />
              ) : (
                <>
                  {/* Campaign Metrics */}
                  <MetricCards data={campaignMetrics} />

                  {/* Campaign Performance Table */}
                  <div className="card">
                    <div className="card-header">
                      <h2 className="card-title">Campaign Performance</h2>
                      <p className="card-description">
                        Detailed view of all marketing campaigns and their performance metrics
                      </p>
                    </div>
                    <div className="card-content">
                      <DataTable data={mockData.campaigns} />
                    </div>
                  </div>

                  {/* Campaign Insights */}
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="card">
                      <div className="card-header">
                        <div className="flex items-center space-x-2">
                          <Target className="h-5 w-5 text-blue-600" />
                          <h3 className="card-title">Active Campaigns</h3>
                        </div>
                      </div>
                      <div className="card-content">
                        <p className="text-3xl font-bold">3</p>
                        <p className="text-sm text-muted-foreground">Currently running</p>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                          <h3 className="card-title">Best Performer</h3>
                        </div>
                      </div>
                      <div className="card-content">
                        <p className="text-lg font-semibold">Summer Sale Campaign</p>
                        <p className="text-sm text-muted-foreground">ROAS: 3.84x</p>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-purple-600" />
                          <h3 className="card-title">Total Reach</h3>
                        </div>
                      </div>
                      <div className="card-content">
                        <p className="text-3xl font-bold">2.3M</p>
                        <p className="text-sm text-muted-foreground">Impressions</p>
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