import Head from 'next/head'
import React from 'react'
import useSWR from 'swr'


async function fetcher(...arg){
  const res = await fetch(...arg);

  return res.json();
}

const Home = () => {
  
  const { data, error } = useSWR('api/github', fetcher);
  if (error) {
    console.log(error)
  }

  return (
    <>
      <Head>
        <title>
          Telkom Frontend Task
        </title>
      </Head>

      <div className='h-fit w-full flex justify-center bg-[#121417] pb-24' >
        <div className='flex flex-col w-[70%] items-center'>
          <div className='text-slate-100 text-2xl font-medium mt-12'>
            <h1>Yuwan's Github Dashboard</h1>
          </div>
          <div className='flex flex-row gap-x-5 items-center justify-center w-full mt-10'>
            <div className='flex flex-col justify-center p-3 gap-y-2 h-24 w-52 border-2 border-cyan-300 rounded-md text-slate-300'>
              <h1 className='font-medium text-slate-200'>Github Stars</h1>
              <p>{data?.starsCount}</p>
            </div>
            <div className='flex flex-col justify-center p-3 gap-y-2 h-24 w-52 border-2 border-purple-400 rounded-md text-slate-300'>
              <h1 className='font-medium text-slate-200'>Github Repos</h1>
              <p>{data?.reposCount}</p>
            </div>
            <div className='flex flex-col justify-center p-3 gap-y-2 h-24 w-52 border-2 border-amber-300 rounded-md text-slate-300'>
              <h1 className='font-medium text-slate-200'>Repos Starred</h1>
              <p>{data?.starredCount}</p>
            </div>
            
          </div>
          <div className='w-full border-b border-slate-300 mt-10'></div>
          <div className='flex flex-col gap-y-5 items-center w-full mt-10'>

          {data ? data.dataRepos.map(item => {
                    return (
                      <>
                        <div key={item.id} className='flex flex-col justify-between p-5 w-[90%] h-32 border-2 border-gray-300 rounded-md hover:bg-gray-500 hover:bg-opacity-40'>
                          <a href={item.svn_url} rel="noreferrer" className="cursor-pointer hover:underline hover:underline-offset-1 hover:decoration-pink-500" target='_blank'>
                            <h1 className='text-slate-100 text-xl font-medium'>{item.name}</h1>
                          </a>
                          <p className='font-normal text-sm text-gray-300'>{item.created_at.slice(0, 10)}</p>
                        </div>
                      </>
                    )
                  }) : "loading"}
          </div>
        </div>
      </div>

      <div className='w-full bg-[#393E46] pt-8 pb-8 flex justify-center'>
          <h1 className='text-white text-base'><span className='text-pink-600 font-medium'>Yuwan Samega</span> made with ❤️ &copy;2022 | All Right Reserved. </h1>
      </div>  
      
      
    </>
  )
}

export default Home