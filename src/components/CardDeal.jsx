import React from 'react'
import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'
import DownloadButton from '../components/DownloadButton'
import Image from 'next/image'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Download the Roman Guitars App <br className='sm:block hidden' /> in a few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our application gives you the ability to review past orders, purchase itmes from our current inventory, or make payments towards your custom build.</p>
        <DownloadButton styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <Image src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
      
    </section>
  )

export default CardDeal