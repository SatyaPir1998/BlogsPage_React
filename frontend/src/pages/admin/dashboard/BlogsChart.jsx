import React from 'react'
import { formatDate } from '../../../utilis/formateDate'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'

const formatData = (blogs) => {
    return blogs.map(blog => ({
        name: formatDate(blog.createdAt),
        post: blog.title.length,
        pv: blog.pageViews || 0,
        amt: blog.amt || 0
    }))
}

const BlogsChart = ({blogs}) => {
    const data = formatData(blogs)
  return (
    <div className='p-6 bg-bgPrimary rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Blogs Chart!</h2>
        <div className='h-80'>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    bottom: 0,
                    left: 0
                }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type="monotone" dataKey="post" stroke='#8884d8' fill='#8884d8'/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BlogsChart
