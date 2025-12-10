import React from 'react'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import BlogCard from '@/components/shared/blog-card'

const BlogsPage = () => {
  return (
    <main className='space-y-12'>
      <div className='bg-main-light-gray p-4 pb-12 space-y-4 rounded-b-xl container'>
        <CustomBreadcrumbs items={[
          { label: 'المدونة' },
        ]} />
        <h1 className='text-main-navy text-2xl font-bold'>المدونة</h1>
      </div>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {Array.from({ length: 12 }).map((_, index) => (
          <BlogCard key={index} />
        ))}

      </div>
    </main>
  )
}

export default BlogsPage
