import Head from 'next/head'
import React from 'react'

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Repository List
        </title>
      </Head>

      <div className='h-screen w-full flex justify-center bg-gray-900' >
        <div className='flex flex-col w-[70%] items-center'>
          <div className='text-slate-100 text-2xl font-medium mt-12'>
            <h1>Yuwan's Repository</h1>
          </div>
          <div className='w-full border-b border-slate-300 mt-5'></div>
          <div className='flex gap-y-5 flex-col items-center w-full mt-10'>
            <div className='p-5 text-white w-full h-32 border border-slate-300 rounded-lg tex-white'>
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere quod eos?</p>
            </div>
            <div className='p-5 text-white w-full h-32 border border-slate-300 rounded-lg tex-white'>
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere quod eos?</p>
            </div>
          </div>
        </div>
      </div>  
      
      
    </>
  )
}

export default Home