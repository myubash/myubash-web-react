import React from 'react'

const Credits = () => {
  const list = [
    {
      link: 'https://www.freepik.com/free-vector/code-typing-concept-illustration_9712737.htm#query=coding&position=46&from_view=search&track=sph',
      text: 'Image by storyset on Freepik'
    },
    {
      link: 'https://github.com/realstoman/react-tailwindcss-portfolio',
      text: 'React & Tailwind CSS Portfolio Stoman'
    }
  ]

  return (
    <div
      className='w-1/2 justify-center mx-auto'
    >
      <ul>
        {
          list.map(credit => (
            <li>
              <a
                href={credit.link}
                target="__blank"
                className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
              >
                {credit.text}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Credits