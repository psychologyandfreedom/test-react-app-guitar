import React from 'react'
import styles from '../style'
import {discount, robot} from '../assets'
import Image from 'next/image'
import GetStarted from './GetStarted'

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Discount Off Your  {" "}
            <span className='text-white'>First Purchase</span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>The next <br className='sm:block hidden' /> {" "}
            <span
            className='text-gradient'
            >
            Generation</span> {" "}</h1>

            <div className='ss:flex hidden md:mr-4 mr-0'>
              <GetStarted />
            </div>

          </div>

          <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Of Custom Guitars</h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Roman Guitars is a leading manufacture of custom USA made guitars. Our guitars are built in-house at our custom guitar shop and built to last many lifetimes with proper care! We can build ANY guitar that you can think of, and I mean ANY. The only limitation is your imgagination! Give us a call for a free consulatation so we can start planning on the perfect custom guitar for your playing needs!</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient' />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

    </section>
  )

export default Hero