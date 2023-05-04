import React from 'react'
import {apple, bill, google} from '../assets'
import styles, {layout} from '../style'
import Image from 'next/image'

const Billing = () => (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <Image src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily Control your <br className='sm:block hidden' /> billing & invoicing </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> If there is an instrument you're passionate about or a custom guitar that you would love for us to build, we will do what we can to make sure it ends up in your hands. We offer many different payment plans so that you get the instrument you DESERVE. We accept all major credit/debit cards including AMEX! You can conveniently make purchases or payments towards products/custom builds by using our new Roman Guitar app! We also have layaway options that are in the best interest of the player.</p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <Image src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <Image src={google} alt="google_play" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )

export default Billing