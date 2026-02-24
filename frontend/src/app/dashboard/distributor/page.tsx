'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Package, 
  Users, 
  TrendingUp, 
  MapPin,
  Truck,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

// Mock data
const stats = [
  {
    title: 'Active Batches',
    value: '12',
    change: '+3',
    trend: 'up',
    icon: Package,
  },
  {
    title: 'Total Retailers',
    value: '48',
    change: '+5',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Pending Orders',
    value: '23',
    change: '-8',
    trend: 'down',
    icon: Clock,
  },
  {
    title: 'Deliveries Today',
    value: '15',
    change: '+2',
    trend: 'up',
    icon: Truck,
  },
]

const recentBatches = [
  { id: 'B001', name: 'Batch A', retailers: 5, items: 150, status: 'preparing', eta: '2 hours' },
  { id: 'B002', name: 'Batch B', retailers: 8, items: 280, status: 'ready', eta: '1 hour' },
  { id: 'B003', name: 'Batch C', retailers: 3, items: 95, status: 'delivering', eta: '30 mins' },
]

const retailerOrders = [
  { id: 'R1', name: 'Retail Store A', items: 45, status: 'confirmed', amount: '₹1,350' },
  { id: 'R2', name: 'Retail Store B', items: 32, status: 'pending', amount: '₹960' },
  { id: 'R3', name: 'Retail Store C', items: 58, status: 'confirmed', amount: '₹1,740' },
  { id: 'R4', name: 'Retail Store D', items: 21, status: 'processing', amount: '₹630' },
]

export default function DistributorDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-3 w-3 text-green-600" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-600" />
                  )}
                  <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                    {stat.change}
                  </span>
                  <span>from last week</span>
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Batches */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Batches</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBatches.map((batch) => (
                <div
                  key={batch.id}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div>
                    <p className="font-medium">{batch.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {batch.retailers} retailers • {batch.items} items
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        batch.status === 'ready' ? 'success' :
                        batch.status === 'delivering' ? 'info' : 'warning'
                      }
                    >
                      {batch.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">ETA: {batch.eta}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Live Feed */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Retailer Orders</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {retailerOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{order.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {order.items} items • {order.amount}
                    </p>
                  </div>
                  <Badge
                    variant={
                      order.status === 'confirmed' ? 'success' :
                      order.status === 'processing' ? 'info' : 'warning'
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Delivery Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-muted-foreground">Map view coming soon</p>
              <p className="text-sm text-muted-foreground">Live delivery tracking</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
