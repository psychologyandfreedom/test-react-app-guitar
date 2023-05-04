import React from 'react'

const DownloadButton = ({styles}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Download Roman Guitars App
    </button>
  )
}

export default DownloadButton