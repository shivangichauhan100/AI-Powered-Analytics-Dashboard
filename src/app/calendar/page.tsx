'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { LoadingSkeleton } from '@/components/loading-skeleton'
import { ErrorBoundary } from '@/components/error-boundary'
import { Calendar, Plus, Target, Users, TrendingUp } from 'lucide-react'

export default function CalendarPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const events = [
    {
      id: 1,
      title: 'Summer Sale Campaign Launch',
      date: '2024-02-15',
      type: 'campaign',
      status: 'upcoming',
      description: 'Launch of the major summer sale campaign'
    },
    {
      id: 2,
      title: 'Q1 Performance Review',
      date: '2024-03-31',
      type: 'meeting',
      status: 'scheduled',
      description: 'Quarterly performance review meeting'
    },
    {
      id: 3,
      title: 'New Product Launch',
      date: '2024-02-28',
      type: 'launch',
      status: 'upcoming',
      description: 'Launch of new product line'
    },
    {
      id: 4,
      title: 'Marketing Team Meeting',
      date: '2024-02-20',
      type: 'meeting',
      status: 'scheduled',
      description: 'Weekly marketing team sync'
    }
  ]

  const getEventColor = (type: string) => {
    switch (type) {
      case 'campaign':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'meeting':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'launch':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'campaign':
        return Target
      case 'meeting':
        return Users
      case 'launch':
        return TrendingUp
      default:
        return Calendar
    }
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
                    Calendar
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Schedule and manage marketing events and campaigns
                  </p>
                </div>
                <button className="btn-primary h-11 px-6">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </button>
              </div>

              {isLoading ? (
                <LoadingSkeleton />
              ) : (
                <>
                  {/* Calendar Stats */}
                  <div className="grid gap-6 md:grid-cols-4">
                    <div className="card">
                      <div className="card-content">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-medium">Total Events</span>
                        </div>
                        <p className="text-2xl font-bold mt-2">24</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-content">
                        <div className="flex items-center space-x-2">
                          <Target className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-medium">Campaigns</span>
                        </div>
                        <p className="text-2xl font-bold mt-2">8</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-content">
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-purple-600" />
                          <span className="text-sm font-medium">Meetings</span>
                        </div>
                        <p className="text-2xl font-bold mt-2">12</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-content">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-orange-600" />
                          <span className="text-sm font-medium">Launches</span>
                        </div>
                        <p className="text-2xl font-bold mt-2">4</p>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Events */}
                  <div className="card">
                    <div className="card-header">
                      <h2 className="card-title">Upcoming Events</h2>
                      <p className="card-description">
                        Your scheduled marketing events and campaigns
                      </p>
                    </div>
                    <div className="card-content">
                      <div className="grid gap-4">
                        {events.map((event) => {
                          const Icon = getEventIcon(event.type)
                          return (
                            <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                              <div className="flex items-center space-x-4">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                                  <Icon className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                  <h3 className="font-semibold">{event.title}</h3>
                                  <p className="text-sm text-muted-foreground">{event.description}</p>
                                  <div className="flex items-center space-x-4 mt-1">
                                    <span className="text-xs text-muted-foreground">{event.date}</span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${getEventColor(event.type)}`}>
                                      {event.type}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <button className="btn-secondary h-8 px-3 text-xs">
                                  Edit
                                </button>
                                <button className="btn-primary h-8 px-3 text-xs">
                                  View
                                </button>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Calendar View */}
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="card md:col-span-2">
                      <div className="card-header">
                        <h3 className="card-title">Calendar View</h3>
                        <p className="card-description">Monthly calendar overview</p>
                      </div>
                      <div className="card-content">
                        <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground">Calendar view coming soon</p>
                            <p className="text-sm text-muted-foreground">Interactive calendar with drag & drop</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Quick Actions</h3>
                        <p className="card-description">Common calendar actions</p>
                      </div>
                      <div className="card-content">
                        <div className="space-y-3">
                          <button className="w-full btn-secondary justify-start">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Campaign
                          </button>
                          <button className="w-full btn-secondary justify-start">
                            <Users className="h-4 w-4 mr-2" />
                            Schedule Meeting
                          </button>
                          <button className="w-full btn-secondary justify-start">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            Plan Launch
                          </button>
                          <button className="w-full btn-secondary justify-start">
                            <Calendar className="h-4 w-4 mr-2" />
                            View All Events
                          </button>
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