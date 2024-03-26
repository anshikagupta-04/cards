import React from 'react'

function Background() {
    return (
        <div className='relative w-full h-screen bg-zinc-800 z-0'>
            <div className='w-full py-10 flex justify-center items-center text-s  text-zinc-500'>Documents.</div>
            <h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[200px] font-semibold leading-none tracking-tight text-zinc-900'>Docs.</h1>
        </div>
    )
}

export default Background