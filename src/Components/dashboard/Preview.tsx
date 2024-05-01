import { PreviewSocial } from '@/constants/constants'
import { AstroIcon, NotificationIcon3, TwitchIcon, VerifiedIcon, YoutubeIcon2 } from '@/icons'
import React from 'react'

const Preview = () => {
  return (
    <>
            <p className="text-secondary-500   mt-6 mb-2 text-[1.375rem] font-semibold">
              Preview
            </p>
            <div className="bg-light-100 rounded-xl  py-4">
              <span className='flex items-center justify-center ml-auto mr-4  h-10 w-10 rounded-full bg-secondary-150 border border-secondary-50'><NotificationIcon3/></span>
              <div className="flex flex-col items-center justify-center">
                <img src="/assets/insights/user.jpeg" className='w-[5.5rem] h-[5.5rem] rounded-full' alt="" />
                <h3 className='text-2xl font-semibold text-dark-80 flex items-center gap-2 mt-5 ml-4'><span className='text-center'>AstroFunk</span> <VerifiedIcon/> </h3>
                <p className='font-medium text-dark-80 mb-4'>@astrofunk_93</p>
                <div className='flex items-center gap-2'>
                  {
                    PreviewSocial.map((data,idx)=>(
                      <span key={idx}>{data}</span>
                    ))
                  }
                </div>
                <h3 className='font-semibold text-dark-90 mt-4'>Thumbnail preview</h3>
                <div className='flex items-center gap-4 mt-4 bg-danger-10 py-2 pr-6 pl-2 rounded-full'>
                  <TwitchIcon/>
                  <span className='font-medium text-dark-80'>Join Me on Twitch!️</span>
                </div>
                <h3 className='font-semibold text-dark-90 mt-4'>Sample links</h3>
                <div className='flex items-center gap-4 mt-4 bg-danger-10 py-2 pr-[4.3rem] pl-2 rounded-full'>
                <img src="/assets/insights/user.jpeg" className='w-[3rem] h-[3rem] rounded-full' alt="" />
                  <span className='font-medium text-dark-80'>astrofunk.lol</span>
                </div>
                <div className='flex items-center gap-2 mt-4 bg-danger-10 py-2 pr-4 pl-2 rounded-full'>
                  <YoutubeIcon2/>
                  <span className='font-medium text-dark-80'>Latest YouTube Video</span>
                </div>
              </div>
            </div>
    </>
  )
}

export default Preview