'use client'

import { useState } from 'react'
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  Target, 
  Settings, 
  HelpCircle,
  TrendingUp,
  PieChart,
  Calendar
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const menuItems = [
  {
    title: 'Dashboard',
    icon: BarChart3,
    href: '/',
    active: false
  },
  {
    title: 'Analytics',
    icon: TrendingUp,
    href: '/analytics',
    active: false
  },
  {
    title: 'Campaigns',
    icon: Target,
    href: '/campaigns',
    active: false
  },
  {
    title: 'Audience',
    icon: Users,
    href: '/audience',
    active: false
  },
  {
    title: 'Revenue',
    icon: DollarSign,
    href: '/revenue',
    active: false
  },
  {
    title: 'Reports',
    icon: PieChart,
    href: '/reports',
    active: false
  },
  {
    title: 'Calendar',
    icon: Calendar,
    href: '/calendar',
    active: false
  }
]

const bottomMenuItems = [
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings'
  },
  {
    title: 'Help',
    icon: HelpCircle,
    href: '/help'
  }
]

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-64 border-r bg-background/95 backdrop-blur transition-transform duration-300 ease-in-out md:translate-x-0 shadow-lg",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-full flex-col">
          {/* Navigation */}
          <nav className="flex-1 space-y-4 p-6">
            <div className="space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "sidebar-item",
                    item.active ? "active" : "text-muted-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </nav>
          
          {/* Bottom menu */}
          <div className="border-t p-4">
            <div className="space-y-1">
              {bottomMenuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
} 