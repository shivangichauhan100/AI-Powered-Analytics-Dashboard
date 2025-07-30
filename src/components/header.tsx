'use client'

import { useState } from 'react'
import { Menu, X, Sun, Moon, Bell, Search, User } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

interface HeaderProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (open: boolean) => void
}

export function Header({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center px-8">
        <div className="mr-6 flex">
          <button
            className="mr-4 rounded-xl p-2.5 text-base hover:bg-accent hover:text-accent-foreground transition-all duration-200 md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <a href="/" className="mr-10 flex items-center space-x-4 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg group-hover:shadow-xl transition-all duration-300"></div>
            <span className="hidden font-bold text-lg bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent sm:inline-block">
              Analytics Dashboard
            </span>
          </a>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search..."
                className="input-field pl-10 md:w-[340px]"
              />
            </div>
          </div>
          
          <nav className="flex items-center space-x-4">
            <button className="relative rounded-xl p-2.5 hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-destructive animate-pulse"></span>
            </button>
            
            <ThemeToggle />
            
            <button className="rounded-xl p-2.5 hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105">
              <User className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
} 