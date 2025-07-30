'use client'

import { useState } from 'react'
import { Calendar, ChevronDown } from 'lucide-react'
import { format } from 'date-fns'

interface DateRangeFilterProps {
  dateRange: {
    from: Date
    to: Date
  }
  setDateRange: (range: { from: Date; to: Date }) => void
}

const presetRanges = [
  {
    label: 'Last 7 days',
    value: '7d',
    getRange: () => ({
      from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      to: new Date()
    })
  },
  {
    label: 'Last 30 days',
    value: '30d',
    getRange: () => ({
      from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      to: new Date()
    })
  },
  {
    label: 'Last 90 days',
    value: '90d',
    getRange: () => ({
      from: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
      to: new Date()
    })
  },
  {
    label: 'This month',
    value: 'month',
    getRange: () => {
      const now = new Date()
      return {
        from: new Date(now.getFullYear(), now.getMonth(), 1),
        to: new Date()
      }
    }
  },
  {
    label: 'This quarter',
    value: 'quarter',
    getRange: () => {
      const now = new Date()
      const quarter = Math.floor(now.getMonth() / 3)
      return {
        from: new Date(now.getFullYear(), quarter * 3, 1),
        to: new Date()
      }
    }
  }
]

export function DateRangeFilter({ dateRange, setDateRange }: DateRangeFilterProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handlePresetSelect = (preset: typeof presetRanges[0]) => {
    setDateRange(preset.getRange())
    setIsOpen(false)
  }

  const handleCustomRange = () => {
    // In a real app, you'd open a date picker modal here
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-secondary h-11 px-4"
      >
        <Calendar className="h-4 w-4 mr-2" />
        {format(dateRange.from, 'MMM d')} - {format(dateRange.to, 'MMM d, yyyy')}
        <ChevronDown className="h-4 w-4 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-56 rounded-md border bg-popover p-1 shadow-md z-50">
          <div className="space-y-1">
            {presetRanges.map((preset) => (
              <button
                key={preset.value}
                onClick={() => handlePresetSelect(preset)}
                className="w-full text-left px-2 py-1.5 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {preset.label}
              </button>
            ))}
            <div className="border-t my-1" />
            <button
              onClick={handleCustomRange}
              className="w-full text-left px-2 py-1.5 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Custom range...
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 