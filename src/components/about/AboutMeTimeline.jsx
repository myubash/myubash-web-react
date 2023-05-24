import React from 'react'

const Timeline = () => {

  const timelineList = [
    {
      profession: 'Front-end Web Developer',
      company: 'PT Star Karlo Indonesia',
      contract: 'Full-time',
      period: '2020 - 2021',
      place: 'Bandung, Indonesia',
      type: 'Hybrid'
    },
    {
      profession: 'Back-end Web Developer',
      company: 'PT Star Karlo Indonesia',
      contract: 'Full-time',
      period: '2021 - 2022',
      place: 'Bandung, Indonesia',
      type: 'Hybrid'
    },
    {
      profession: 'Lead Web Developer',
      company: 'PT Star Karlo Indonesia',
      contract: 'Full-time',
      period: '2022 - Present',
      place: 'Bandung, Indonesia',
      type: 'Hybrid'
    },
  ]

  return (
    <div
      className='block items-center self-center mx-auto justify-between sm:flex sm:space-x-4'
    >
      {/* left bar */}
      <div
        className='w-full items-baseline space-y-3 sm:w-2/6 md:flex md:justify-start'
      >
        <h1
          className='general-sans-medium rounded-sm border-l-2 border-zinc-100 pl-3  text-2xl text-zinc-700 dark:border-zinc-800/80 dark:text-zinc-100 sm:text-3xl '
        >
          Career
        </h1>
      </div>
      {/* right bar */}
      <div
        className='relative mt-5 md:w-3/4 space-y-3 border-l border-zinc-200/50 dark:border-zinc-800/50 sm:mt-0 sm:w-5/6'
      >
        {
          timelineList.slice(0).reverse().map(timeline => {
            const {
              profession,
              company,
              contract,
              period,
              place,
              type,
            } = timeline
            return (
              <div class="ml-4 space-y-2 rounded-lg border-opacity-10 p-4 ">
                <div class="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-zinc-200/50 bg-zinc-100 dark:border-zinc-800/50 dark:bg-zinc-800/50">
  
                </div>
                <h1 classNae="general-sans-medium text-lg text-secondary-dark dark:text-primary-light sm:text-xl">{profession}</h1>
                <p classNae="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                  <a href="https://gulzadgroup.com" classNae="museo-sans-regular pb-2 text-zinc-700 underline decoration-slate-500 decoration-1 underline-offset-4 hover:text-primary-dark dark:text-zinc-300 dark:decoration-slate-300 hover:dark:text-secondary-light" target="_blank" rel='noreferrer'>
                    {company}
                  </a>
                  · {contract}
                </p>
                <p classNae="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                  {period}
                </p>
                <p classNae="text-md museo-sans-regular text-zinc-500 dark:text-zinc-400">
                  {place} · {type}
                </p>
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default Timeline