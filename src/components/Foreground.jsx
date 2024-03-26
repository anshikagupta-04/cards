import React from 'react'
import Cards from './Cards'

const Foreground = () => {
  const data = [{
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    fileSize: '.9mb',
    isClose: true,
    download: {
      toDownload: true,
      text: 'Download Now',
      color: 'green'
    },
  },
  {
    content: 'Lorem ipsum dolor sit amet.',
    fileSize: '.4mb',
    isClose: false,
    download: {
      toDownload: true,
      text: 'Update',
      color: 'blue'
    },
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    fileSize: '.9mb',
    isClose: false,
    download: {
      toDownload: false,
      text: 'Download Now',
      color: 'blue'
    },
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi vero, ea iste beatae id.',
    fileSize: '.9mb',
    isClose: true,
    download: {
      toDownload: true,
      text: 'Download Now',
      color: 'green'
    },
  }
];
  return (
    <div className='fixed top-0 left-0 w-full h-full z-10 flex gap-5 px-5 py-5 shrink-0 flex-wrap'>
      {data.map((item, index) => (
        <Cards data={item} />
      ))}
    </div>
  )
}

export default Foreground