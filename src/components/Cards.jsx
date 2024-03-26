import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Cards = ({ data }) => {
    return (
        <motion.div drag className='relative top-0 left-0 z-20 w-60 h-72 bg-zinc-900/100 rounded-[45px] text-white text-base px-6 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 leading-tight '>
                {data.content}
            </p>
            <div className='footer absolute w-full bottom-0 left-0'>
                <div className='py-5 flex justify-between px-7'>
                    <p className='text-sm'>{data.fileSize}</p>
                    <span className='w-5 h-5 rounded-full bg-white flex justify-center items-center'>
                        {data.isClose ? <IoClose color='black' size={13} /> : <LuDownload color='black' size={13} />}
                    </span>
                </div>
                {data.download.toDownload ? <div className={`py-2 flex justify-center ${data.download.color == 'blue' ? 'bg-blue-600' : 'bg-green-600'}`}>
                    {data.download.text}
                </div> : null}
                
            </div>
        </motion.div>
    )
}

export default Cards