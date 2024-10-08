import Image from 'next/image'
import React from 'react'
import person_img from '../../assets/banner.png'
import Link from 'next/link'
import appStoreBtn from '../../assets/appstore-btn.png'
import playStoreBtn from '../../assets/google-play-btn.png'
import { ArrowRight } from 'lucide-react'
import SupportCard from '@/components/SupportCard'
import GetInTouch from '@/components/GetInTouch'
import FrequentlyAsked from '@/components/FrequentlyAsked'
import banner from '../../assets/bg-banner.png'
import Footer from '@/components/Footer'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import NewsLetterComponent from '@/components/NewsLetterComponent'

function page() {
  return (
    <div className='mt-8 lg:mt-24 w-full h-max'>
        <div className='flex justify-between bg-gradient-to-b from-transparent via-transparent to-[#8BAFA0]/35'> 
            <div className='flex flex-col lg:mx-40 mx-4 md:mx-20 xl:mx-auto xl:ml-20'>
                <div className='lg:w-full'>
                    <p className='text-green-800 text-lg mb-2'>──── Get in Touch</p>
                    <h1 className='text-4xl md:text-7xl text-[#024430] font-semibold'>We&apos;d love to hear
                    from you.</h1>
                    <p className='text-gray-600 my-6 text-lg'>Explore our rental car service for a seamless travel experience. Whether you need a car for a day, a week, or longer, we&apos;ve got you covered.</p>
                </div>
                <div className='flex flex-col space-y-6'>
                    <div>
                        <p className='text-xl text-gray-700 font-semibold'>
                            Install App
                        </p>
                    </div>
                    <div className='flex space-x-4 items-center pb-4 md:pb-8 xl:pb-0'>
                        <Link href=''>
                            <Image src={appStoreBtn} alt='appStore-btn' className=' hover:-translate-y-1 transition-transform duration-500' />
                        </Link>
                        <Link href=''>
                            <Image src={playStoreBtn} alt='PlayStore-btn' className=' hover:-translate-y-1 transition-transform duration-500' />
                        </Link>
                        <div className='hidden md:flex cursor-pointer group hover:-translate-y-1 transition-transform duration-500'>
                            <p className='text-base font-semibold flex items-center hover:text-[#0ea17c]'>
                                Learn more
                                 <span className='ml-1 transform transition-transform text-black duration-500 group-hover:-rotate-45 mt-1'>
                                    <ArrowRight size={20} />
                                 </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden xl:flex mt-36 relative w-full h-[420px]">
                <div className="relative w-full h-full flex items-end justify-end">
                    <div className="absolute bottom-6 left-0 w-full h-full">
                        <Image
                            src={banner}
                            alt="Design"
                            layout="fill"
                            objectFit="contain"
                            className="relative bottom-12 z-0"
                        />
                    </div>
                    <div className="relative w-full h-full flex items-end justify-end">
                        <Image
                            src={person_img}
                            alt="Person"
                            layout="fill"
                            objectFit="contain"
                            className="relative z-10"
                        />
                    </div>
                </div>
            </div>

        </div>

        <SupportCard />
        <GetInTouch />
        <FrequentlyAsked />
        <NewsLetterComponent />
        <Footer />
        <PrivacyPolicy />
    </div>
  )
}

export default page