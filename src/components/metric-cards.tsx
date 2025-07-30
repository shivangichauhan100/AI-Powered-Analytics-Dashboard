'use client'

import { DollarSign, Users, Target, TrendingUp } from 'lucide-react'
import { Metrics } from '@/lib/mock-data'
import { formatCurrency, formatNumber, formatPercentage } from '@/lib/utils'

interface MetricCardsProps {
  data: Metrics
}

const metricConfig = [
  {
    title: 'Total Revenue',
    value: (data: Metrics) => formatCurrency(data.revenue),
    icon: DollarSign,
    description: 'Total revenue generated',
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/20'
  },
  {
    title: 'Active Users',
    value: (data: Metrics) => formatNumber(data.users),
    icon: Users,
    description: 'Total active users',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20'
  },
  {
    title: 'Conversions',
    value: (data: Metrics) => formatNumber(data.conversions),
    icon: Target,
    description: 'Total conversions',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/20'
  },
  {
    title: 'Growth Rate',
    value: (data: Metrics) => formatPercentage(data.growth),
    icon: TrendingUp,
    description: 'Month over month growth',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/20'
  }
]

export function MetricCards({ data }: MetricCardsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {metricConfig.map((metric, index) => {
        const Icon = metric.icon
        return (
          <div
            key={metric.title}
            className="metric-card group animate-fade-in"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {metric.title}
                </p>
                <p className="text-4xl font-bold gradient-text leading-tight">
                  {metric.value(data)}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </div>
              <div className={cn(
                "rounded-2xl p-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg",
                metric.bgColor
              )}>
                <Icon className={cn("h-8 w-8", metric.color)} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
} 