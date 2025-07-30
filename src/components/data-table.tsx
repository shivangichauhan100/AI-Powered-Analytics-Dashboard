'use client'

import { useState, useMemo } from 'react'
import { 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Search, 
  Filter,
  MoreHorizontal
} from 'lucide-react'
import { Campaign } from '@/lib/mock-data'
import { formatCurrency, formatNumber, formatPercentage, formatDate } from '@/lib/utils'

interface DataTableProps {
  data: Campaign[]
}

type SortField = keyof Campaign
type SortDirection = 'asc' | 'desc'

export function DataTable({ data }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortField, setSortField] = useState<SortField>('name')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
    )

    filtered.sort((a, b) => {
      const aValue = a[sortField]
      const bValue = b[sortField]
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue
      }
      
      return 0
    })

    return filtered
  }, [data, searchTerm, sortField, sortDirection])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage)
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const exportToCSV = () => {
    const headers = ['Name', 'Status', 'Budget', 'Spent', 'Impressions', 'Clicks', 'Conversions', 'CTR', 'CPC', 'CPA', 'ROAS']
    const csvContent = [
      headers.join(','),
      ...filteredAndSortedData.map(item => [
        item.name,
        item.status,
        item.budget,
        item.spent,
        item.impressions,
        item.clicks,
        item.conversions,
        item.ctr,
        item.cpc,
        item.cpa,
        item.roas
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'campaign-data.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'paused':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'completed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  return (
    <div className="space-y-4">
      {/* Table Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <button className="btn-secondary h-10 px-4">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button 
            onClick={exportToCSV}
            className="btn-primary h-10 px-4"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                {[
                  { key: 'name', label: 'Campaign Name' },
                  { key: 'status', label: 'Status' },
                  { key: 'budget', label: 'Budget' },
                  { key: 'spent', label: 'Spent' },
                  { key: 'impressions', label: 'Impressions' },
                  { key: 'clicks', label: 'Clicks' },
                  { key: 'conversions', label: 'Conversions' },
                  { key: 'ctr', label: 'CTR' },
                  { key: 'cpc', label: 'CPC' },
                  { key: 'roas', label: 'ROAS' }
                ].map(({ key, label }) => (
                  <th key={key} className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                    <button
                      onClick={() => handleSort(key as SortField)}
                      className="flex items-center gap-1 hover:text-foreground transition-colors"
                    >
                      {label}
                      {sortField === key && (
                        sortDirection === 'asc' ? 
                          <ChevronUp className="h-4 w-4" /> : 
                          <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  </th>
                ))}
                <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {paginatedData.map((campaign) => (
                <tr key={campaign.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                    <div className="font-medium">{campaign.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                    </div>
                  </td>
                  <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                    {formatCurrency(campaign.budget)}
                  </td>
                  <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                    {formatCurrency(campaign.spent)}
                  </td>
                  <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                    {formatNumber(campaign.impressions)}
                  </td>
                  <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                    {formatNumber(campaign.clicks)}
                  </td>
                  <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                    {formatNumber(campaign.conversions)}
                  </td>
                  <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                    {formatPercentage(campaign.ctr)}
                  </td>
                  <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                    {formatCurrency(campaign.cpc)}
                  </td>
                  <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                    {campaign.roas.toFixed(2)}x
                  </td>
                  <td className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                    <button className="rounded-md p-1 hover:bg-accent hover:text-accent-foreground">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)} of {filteredAndSortedData.length} results
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
          >
            Previous
          </button>
          
          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-8 w-8 ${
                  currentPage === page
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-background hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
} 