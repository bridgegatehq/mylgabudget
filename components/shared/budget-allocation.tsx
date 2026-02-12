'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Download, BarChart3 } from 'lucide-react'
import { mockBudgetData } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const NIGERIAN_STATES = ['Lagos', 'Oyo', 'Rivers', 'Kano', 'Abuja', 'Katsina', 'Bauchi', 'Osun']
const LGAS_BY_STATE: { [key: string]: string[] } = {
  'Lagos': ['Ikeja', 'Lagos Island', 'Epe', 'Ikorodu', 'Badagry'],
  'Oyo': ['Ibadan', 'Abeokuta', 'Oyo', 'Ogbomoso'],
  'Rivers': ['Port Harcourt', 'Obio-Akpor', 'Bonny'],
}

export const BudgetAllocation = () => {
  const [selectedState, setSelectedState] = useState('Oyo')
  const [selectedLga, setSelectedLga] = useState('Ibadan')
  const [selectedYear, setSelectedYear] = useState('2024')
  const [activeTab, setActiveTab] = useState('budget')

  const lgas = LGAS_BY_STATE[selectedState] || []
  const data = mockBudgetData

  const formatCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `₦${(value / 1000000000).toFixed(1)}B`
    }
    if (value >= 1000000) {
      return `₦${(value / 1000000).toFixed(1)}M`
    }
    return `₦${value.toLocaleString()}`
  }

  return (
       <div className="bg-white p-4 rounded-md border space-y-8">
        {/* Header with Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-3 w-full md:w-auto">
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {NIGERIAN_STATES.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLga} onValueChange={setSelectedLga}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select LGA" />
                </SelectTrigger>
                <SelectContent>
                  {lgas.map((lga) => (
                    <SelectItem key={lga} value={lga}>
                      {lga}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {[2022, 2023, 2024, 2025].map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Get Budget
            </button>
          </div>
        </div>

        {/* Leadership Section */}
        <Card className="bg-white">
          <CardHeader className="border-b border-slate-200">
            <CardTitle className="text-lg font-semibold text-slate-900">LEADERSHIP</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Governor */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-slate-200">
                  <Image src={data.governor.image} alt={data.governor.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Governor</p>
                  <p className="font-semibold text-slate-900">{data.governor.name}</p>
                  <p className="text-sm text-slate-600">{data.governor.party}</p>
                </div>
              </div>

              {/* LG Chairman */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-slate-200">
                  <Image src={data.lgChairman.image} alt={data.lgChairman.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Local Government Chairman</p>
                  <p className="font-semibold text-slate-900">{data.lgChairman.name}</p>
                  <p className="text-xs text-slate-600">{data.lgChairman.party} • {data.lgChairman.startDate}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Budget Allocation Tabs */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-900">BUDGET ALLOCATION</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-5 w-full bg-transparent p-0 border-b border-slate-200 h-auto gap-0">
                {[
                  { id: 'budget', label: 'Budget' },
                  { id: 'monthly', label: 'Monthly Allocation' },
                  { id: 'performance', label: 'Budget Performance' },
                  { id: 'implementation', label: 'Budget Implementation' },
                  { id: 'revenue', label: 'Internally Revenue' },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="px-4 py-3 text-sm font-medium text-slate-600 border-b-2 border-transparent rounded-none data-[state=active]:border-teal-600 data-[state=active]:text-teal-600 data-[state=active]:bg-transparent hover:text-slate-900"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="budget" className="mt-6 space-y-6">
                {/* Total Budget Display */}
                <div className="bg-linear-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-6">
                  <p className="text-sm text-slate-600 font-medium">TOTAL BUDGET:</p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    {formatCurrency(data.totalBudget)} <span className="text-lg text-slate-700">( {(data.totalBudget).toLocaleString()} )</span>
                  </p>
                </div>

                {/* Sector Allocation */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-slate-900 uppercase">Sector Allocated To</p>
                  {data.sectors.map((sector) => (
                    <div key={sector.id} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600">{sector.name}</span>
                        <span className="font-semibold text-slate-900">{sector.percentage}%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-slate-200 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-linear-to-r ${sector.color} rounded-full`}
                            style={{ width: `${sector.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-slate-600 font-medium">{formatCurrency(sector.amount)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="monthly" className="mt-6">
                <p className="text-center text-slate-500 py-8">Monthly allocation data coming soon</p>
              </TabsContent>
              <TabsContent value="performance" className="mt-6">
                <p className="text-center text-slate-500 py-8">Budget performance data coming soon</p>
              </TabsContent>
              <TabsContent value="implementation" className="mt-6">
                <p className="text-center text-slate-500 py-8">Implementation data coming soon</p>
              </TabsContent>
              <TabsContent value="revenue" className="mt-6">
                <p className="text-center text-slate-500 py-8">Revenue data coming soon</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Allocation Trend Chart */}
        <Card className="bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-slate-900">ALLOCATION TREND FOR EACH SECTOR</CardTitle>
              <div className="flex gap-2">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                  <span className="text-xs text-slate-600">2025</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="text-xs text-slate-600">2024</span>
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="2025"
                  stroke="#2563eb"
                  dot={{ fill: '#2563eb', r: 4 }}
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="2024"
                  stroke="#eab308"
                  dot={{ fill: '#eab308', r: 4 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Detailed Expenses Table */}
        <Card className="bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-slate-900">DETAILED EXPENSES</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase">S/N</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase">SECTOR</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase">ALLOCATED AMOUNT</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase">% OF TOTAL</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase">NOTE</th>
                  </tr>
                </thead>
                <tbody>
                  {data.expenses.map((expense, idx) => (
                    <tr key={expense.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 text-slate-900 font-medium">{idx + 1}</td>
                      <td className="px-4 py-3 text-slate-900 font-medium">{expense.sector}</td>
                      <td className="px-4 py-3 text-slate-900 font-medium">{formatCurrency(expense.amount)}</td>
                      <td className="px-4 py-3 text-slate-900 font-medium">{expense.percentage}%</td>
                      <td className="px-4 py-3 text-slate-600 text-xs">{expense.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Supporting Documents */}
        <Card className="bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-slate-900">SUPPORTING DOCUMENTS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.documents.map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">{doc.name}</p>
                      <p className="text-xs text-slate-500">{doc.size}</p>
                    </div>
                  </div>
                  <button className="text-teal-600 hover:text-teal-700 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
  )
}
