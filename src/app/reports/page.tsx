'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { LoadingSkeleton } from '@/components/loading-skeleton'
import { ErrorBoundary } from '@/components/error-boundary'
import { Download, FileText, BarChart3, Calendar, TrendingUp } from 'lucide-react'

export default function ReportsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const reports = [
    {
      id: 1,
      title: 'Monthly Performance Report',
      description: 'Comprehensive overview of monthly marketing performance',
      type: 'PDF',
      size: '2.4 MB',
      date: '2024-01-30',
      icon: FileText
    },
    {
      id: 2,
      title: 'Campaign Analysis Report',
      description: 'Detailed analysis of all active campaigns',
      type: 'PDF',
      size: '1.8 MB',
      date: '2024-01-29',
      icon: BarChart3
    },
    {
      id: 3,
      title: 'Revenue Forecast Report',
      description: 'Revenue projections and forecasting analysis',
      type: 'Excel',
      size: '3.2 MB',
      date: '2024-01-28',
      icon: TrendingUp
    },
    {
      id: 4,
      title: 'Audience Insights Report',
      description: 'Deep dive into audience demographics and behavior',
      type: 'PDF',
      size: '2.1 MB',
      date: '2024-01-27',
      icon: BarChart3
    }
  ]

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
                    Reports
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Generate and download comprehensive marketing reports
                  </p>
                </div>
                <button className="btn-primary h-11 px-6">
                  <Download className="h-4 w-4 mr-2" />
                  Generate Report
                </button>
              </div>

              {isLoading ? (
                <LoadingSkeleton />
              ) : (
                <>
                  {/* Quick Stats */}
                  <div className="grid gap-6 md:grid-cols-4">
                    <div className="card">
                      <div className="card-content">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-medium">Total Reports</span>
                        </div>
                        <p className="text-2xl font-bold mt-2">24</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-content">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-medium">This Month</span>
                        </div>
                        <p className="text-2xl font-bold mt-2">8</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-content">
                        <div className="flex items-center space-x-2">
                          <Download className="h-5 w-5 text-purple-600" />
                          <span className="text-sm font-medium">Downloads</span>
                        </div>
                        <p className="text-2xl font-bold mt-2">156</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-content">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-orange-600" />
                          <span className="text-sm font-medium">Growth</span>
                        </div>
                        <p className="text-2xl font-bold mt-2">+23%</p>
                      </div>
                    </div>
                  </div>

                  {/* Available Reports */}
                  <div className="card">
                    <div className="card-header">
                      <h2 className="card-title">Available Reports</h2>
                      <p className="card-description">
                        Download comprehensive reports and analytics summaries
                      </p>
                    </div>
                    <div className="card-content">
                      <div className="grid gap-4">
                        {reports.map((report) => {
                          const Icon = report.icon
                          return (
                            <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                              <div className="flex items-center space-x-4">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                                  <Icon className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                  <h3 className="font-semibold">{report.title}</h3>
                                  <p className="text-sm text-muted-foreground">{report.description}</p>
                                  <div className="flex items-center space-x-4 mt-1">
                                    <span className="text-xs text-muted-foreground">{report.type}</span>
                                    <span className="text-xs text-muted-foreground">{report.size}</span>
                                    <span className="text-xs text-muted-foreground">{report.date}</span>
                                  </div>
                                </div>
                              </div>
                              <button className="btn-secondary h-9 px-3">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </button>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Report Templates */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Report Templates</h3>
                        <p className="card-description">Pre-built templates for common reports</p>
                      </div>
                      <div className="card-content">
                        <div className="space-y-3">
                          <button className="w-full text-left p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                            <div className="font-medium">Executive Summary</div>
                            <div className="text-sm text-muted-foreground">High-level overview for stakeholders</div>
                          </button>
                          <button className="w-full text-left p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                            <div className="font-medium">Campaign Performance</div>
                            <div className="text-sm text-muted-foreground">Detailed campaign analysis</div>
                          </button>
                          <button className="w-full text-left p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                            <div className="font-medium">ROI Analysis</div>
                            <div className="text-sm text-muted-foreground">Return on investment breakdown</div>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Scheduled Reports</h3>
                        <p className="card-description">Automatically generated reports</p>
                      </div>
                      <div className="card-content">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 rounded-lg border">
                            <div>
                              <div className="font-medium">Weekly Summary</div>
                              <div className="text-sm text-muted-foreground">Every Monday at 9 AM</div>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg border">
                            <div>
                              <div className="font-medium">Monthly Report</div>
                              <div className="text-sm text-muted-foreground">1st of each month</div>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg border">
                            <div>
                              <div className="font-medium">Quarterly Review</div>
                              <div className="text-sm text-muted-foreground">End of each quarter</div>
                            </div>
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Paused</span>
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