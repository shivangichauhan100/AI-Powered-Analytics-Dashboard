'use client'

import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts'
import { RevenueData, UserGrowthData, ConversionSource } from '@/lib/mock-data'
import { formatCurrency, formatNumber } from '@/lib/utils'

interface ChartsSectionProps {
  revenueData: RevenueData[]
  userGrowthData: UserGrowthData[]
  conversionSources: ConversionSource[]
}

export function ChartsSection({ 
  revenueData, 
  userGrowthData, 
  conversionSources 
}: ChartsSectionProps) {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
      {/* Revenue Line Chart */}
              <div className="card lg:col-span-2">
          <div className="card-header">
            <h3 className="card-title">Revenue Over Time</h3>
            <p className="card-description">Daily revenue trends for the last 30 days</p>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={320}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
              <Tooltip 
                formatter={(value: number) => [formatCurrency(value), 'Revenue']}
                labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* User Growth Bar Chart */}
              <div className="card">
          <div className="card-header">
            <h3 className="card-title">User Growth</h3>
            <p className="card-description">Monthly user acquisition</p>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={320}>
            <BarChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
              <Tooltip 
                formatter={(value: number) => [formatNumber(value), 'Users']}
              />
              <Bar 
                dataKey="users" 
                fill="#10B981"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Conversion Sources Pie Chart */}
              <div className="card">
          <div className="card-header">
            <h3 className="card-title">Conversion Sources</h3>
            <p className="card-description">Traffic sources breakdown</p>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={conversionSources}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ source, percent }) => `${source} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {conversionSources.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Share']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
} 