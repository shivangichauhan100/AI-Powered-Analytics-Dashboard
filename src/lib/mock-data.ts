export interface Metrics {
  revenue: number
  users: number
  conversions: number
  growth: number
}

export interface RevenueData {
  date: string
  revenue: number
}

export interface UserGrowthData {
  month: string
  users: number
}

export interface ConversionSource {
  source: string
  value: number
  color: string
}

export interface Campaign {
  id: string
  name: string
  status: 'active' | 'paused' | 'completed'
  budget: number
  spent: number
  impressions: number
  clicks: number
  conversions: number
  ctr: number
  cpc: number
  cpa: number
  roas: number
  startDate: string
  endDate: string
}

export interface DashboardData {
  metrics: Metrics
  revenueData: RevenueData[]
  userGrowthData: UserGrowthData[]
  conversionSources: ConversionSource[]
  campaigns: Campaign[]
}

export const mockData: DashboardData = {
  metrics: {
    revenue: 124500.50,
    users: 45678,
    conversions: 2341,
    growth: 12.5
  },
  revenueData: [
    { date: '2024-01-01', revenue: 8500 },
    { date: '2024-01-02', revenue: 9200 },
    { date: '2024-01-03', revenue: 8800 },
    { date: '2024-01-04', revenue: 10500 },
    { date: '2024-01-05', revenue: 11200 },
    { date: '2024-01-06', revenue: 9800 },
    { date: '2024-01-07', revenue: 13400 },
    { date: '2024-01-08', revenue: 12100 },
    { date: '2024-01-09', revenue: 11800 },
    { date: '2024-01-10', revenue: 14200 },
    { date: '2024-01-11', revenue: 13800 },
    { date: '2024-01-12', revenue: 15600 },
    { date: '2024-01-13', revenue: 14900 },
    { date: '2024-01-14', revenue: 16200 },
    { date: '2024-01-15', revenue: 15800 },
    { date: '2024-01-16', revenue: 17500 },
    { date: '2024-01-17', revenue: 16800 },
    { date: '2024-01-18', revenue: 18200 },
    { date: '2024-01-19', revenue: 17600 },
    { date: '2024-01-20', revenue: 19400 },
    { date: '2024-01-21', revenue: 18700 },
    { date: '2024-01-22', revenue: 20100 },
    { date: '2024-01-23', revenue: 19500 },
    { date: '2024-01-24', revenue: 21800 },
    { date: '2024-01-25', revenue: 21200 },
    { date: '2024-01-26', revenue: 22500 },
    { date: '2024-01-27', revenue: 21900 },
    { date: '2024-01-28', revenue: 23200 },
    { date: '2024-01-29', revenue: 22800 },
    { date: '2024-01-30', revenue: 24100 }
  ],
  userGrowthData: [
    { month: 'Jan', users: 12000 },
    { month: 'Feb', users: 15000 },
    { month: 'Mar', users: 18000 },
    { month: 'Apr', users: 22000 },
    { month: 'May', users: 26000 },
    { month: 'Jun', users: 30000 },
    { month: 'Jul', users: 34000 },
    { month: 'Aug', users: 38000 },
    { month: 'Sep', users: 42000 },
    { month: 'Oct', users: 45000 },
    { month: 'Nov', users: 48000 },
    { month: 'Dec', users: 52000 }
  ],
  conversionSources: [
    { source: 'Google Ads', value: 45, color: '#3B82F6' },
    { source: 'Facebook Ads', value: 25, color: '#8B5CF6' },
    { source: 'Organic Search', value: 15, color: '#10B981' },
    { source: 'Email Marketing', value: 10, color: '#F59E0B' },
    { source: 'Direct Traffic', value: 5, color: '#EF4444' }
  ],
  campaigns: [
    {
      id: '1',
      name: 'Summer Sale Campaign',
      status: 'active',
      budget: 50000,
      spent: 32450,
      impressions: 1250000,
      clicks: 45600,
      conversions: 2340,
      ctr: 3.65,
      cpc: 0.71,
      cpa: 13.87,
      roas: 3.84,
      startDate: '2024-01-01',
      endDate: '2024-01-31'
    },
    {
      id: '2',
      name: 'Brand Awareness Q1',
      status: 'active',
      budget: 30000,
      spent: 18750,
      impressions: 890000,
      clicks: 23400,
      conversions: 890,
      ctr: 2.63,
      cpc: 0.80,
      cpa: 21.07,
      roas: 2.13,
      startDate: '2024-01-01',
      endDate: '2024-03-31'
    },
    {
      id: '3',
      name: 'Product Launch',
      status: 'completed',
      budget: 25000,
      spent: 25000,
      impressions: 650000,
      clicks: 18900,
      conversions: 1250,
      ctr: 2.91,
      cpc: 1.32,
      cpa: 20.00,
      roas: 2.50,
      startDate: '2023-12-01',
      endDate: '2023-12-31'
    },
    {
      id: '4',
      name: 'Holiday Special',
      status: 'paused',
      budget: 40000,
      spent: 15600,
      impressions: 420000,
      clicks: 12300,
      conversions: 670,
      ctr: 2.93,
      cpc: 1.27,
      cpa: 23.28,
      roas: 1.72,
      startDate: '2024-01-15',
      endDate: '2024-02-15'
    },
    {
      id: '5',
      name: 'Retargeting Campaign',
      status: 'active',
      budget: 15000,
      spent: 8900,
      impressions: 280000,
      clicks: 15600,
      conversions: 890,
      ctr: 5.57,
      cpc: 0.57,
      cpa: 10.00,
      roas: 4.50,
      startDate: '2024-01-01',
      endDate: '2024-01-31'
    }
  ]
} 