'use client'

export function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      {/* Metric Cards Skeleton */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <div className="h-4 w-24 bg-muted rounded" />
                <div className="h-10 w-32 bg-muted rounded" />
                <div className="h-3 w-40 bg-muted rounded" />
              </div>
              <div className="h-14 w-14 bg-muted rounded-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Charts Skeleton */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <div className="card-header">
            <div className="h-7 w-36 bg-muted rounded mb-2" />
            <div className="h-4 w-56 bg-muted rounded" />
          </div>
          <div className="card-content">
            <div className="h-[300px] bg-muted rounded-lg" />
          </div>
        </div>
        
        <div className="card">
          <div className="card-header">
            <div className="h-7 w-28 bg-muted rounded mb-2" />
            <div className="h-4 w-40 bg-muted rounded" />
          </div>
          <div className="card-content">
            <div className="h-[300px] bg-muted rounded-lg" />
          </div>
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="card">
        <div className="card-header">
          <div className="h-6 w-40 bg-muted rounded mb-2" />
          <div className="h-4 w-64 bg-muted rounded" />
        </div>
        <div className="card-content">
          <div className="space-y-4">
            {/* Table Controls */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="h-9 w-64 bg-muted rounded" />
              <div className="flex gap-2">
                <div className="h-9 w-20 bg-muted rounded" />
                <div className="h-9 w-24 bg-muted rounded" />
              </div>
            </div>

            {/* Table */}
            <div className="rounded-md border">
              <div className="p-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center space-x-4 py-3">
                    <div className="h-4 w-32 bg-muted rounded" />
                    <div className="h-4 w-16 bg-muted rounded" />
                    <div className="h-4 w-20 bg-muted rounded" />
                    <div className="h-4 w-20 bg-muted rounded" />
                    <div className="h-4 w-24 bg-muted rounded" />
                    <div className="h-4 w-16 bg-muted rounded" />
                    <div className="h-4 w-20 bg-muted rounded" />
                    <div className="h-4 w-12 bg-muted rounded" />
                    <div className="h-4 w-16 bg-muted rounded" />
                    <div className="h-4 w-12 bg-muted rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <div className="h-4 w-32 bg-muted rounded" />
              <div className="flex gap-2">
                <div className="h-8 w-16 bg-muted rounded" />
                <div className="h-8 w-8 bg-muted rounded" />
                <div className="h-8 w-8 bg-muted rounded" />
                <div className="h-8 w-16 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 