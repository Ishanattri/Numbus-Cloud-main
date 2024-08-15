import React from 'react'

import {partnerList} from "./partnersList"

import "./partners.css"

const Partners = () =>{
    console.log(partnerList)
    return(
        <section className='bg-blue1 px-16 sm:px-5'>
            <hr />
        <div className="partner_container py-10">
            <div className="text_partners pb-28  px-[7%] pt-10 sm:px-0 sm:text-left sm:pb-16">
                
                <span className='text-white text-6xl leading-tight font-bold uppercase sm:text-3xl '>Check out just a few of the brands we’ve worked with.</span>
            </div>
            <div className="grid grid-cols-4 gap-20 px-16 py-10 relative sm:grid-cols-2 sm:gap-0 sm:justify-items-center sm:items-center sm:gap-x-28 sm:gap-y-10">
                {partnerList.map((data)=>{
                    return(
                    <div className='flex items-center justify-center h-40 company_card '>
                        <div>
                            <div className={`${data.name}-logo logo px-10 sm:px-0`}>
                                <img src={data.logo} alt="" />
                            </div>
                            <div className="dis sm:text-xs">
                                {data.discription}
                            </div>
                        </div>
                        
                    </div>
                    )
                })}
                <div className='line1 absolute h-full w-[0.0625rem] left-1/4 bg-gray-50 sm:top-1/4 sm:left-0 sm:w-full sm:h-[0.0625rem]'></div>
                <div className='line1 absolute h-full w-[0.0625rem] left-2/4 bg-gray-50 sm:top-2/4 sm:left-0 sm:w-full sm:h-[0.0625rem]'></div>
                <div className='line1 absolute h-full w-[0.0625rem] left-3/4 bg-gray-50 sm:top-3/4 sm:left-0 sm:w-full sm:h-[0.0625rem]'></div>
                <div className='line1 absolute h-[0.0625rem] w-full top-2/4 bg-gray-50 left-0 sm:top-0 sm:left-2/4 sm:w-[0.0625rem] sm:h-full'></div>

            </div>
        </div>
        </section>

    )
}

export default Partners;