import React from 'react'
import TrendingNews from './TrendingNews'
import TrendingMusic from './TrendingMusic'

const TrendingSection = () => {
  return (
    <div className='my-[5rem] w-[80vw] flex flex-col justify-center items-center space-y-8'>
        <TrendingNews />
        <TrendingMusic />
    </div>
  )
}

export default TrendingSection