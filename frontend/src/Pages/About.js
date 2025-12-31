import React from 'react'
import image from '../../src/image/Rectangle 3605.png'
import underline from '../../src/image/hero-image.png'
import image1 from '../../src/image/aboutma.webp'


function About() {
  return (
    <div className='h-[1000px] w-full  bg-gradient-to-r from-orange-100 to-orange-100'>
      
      <div className='w-[1110px]  ml-[85px]'><img src={underline} alt='hi'/></div>
<div className='flex flex-row ml-[550px] gap-[10px] mt-[130px]'>
  <div className='font-bold  text-blue-800 text-2xl'><h2>ABOUT</h2></div>
  <div className='text-blue-600 font-semibold text-2xl'><h2>US</h2></div>
  <div className=' mt-[15px]'><img src={image} alt=''/></div>
</div>
<div className='flex flex-row gap-[100px] mt-[-20px]'>
  <div ><img src={image1} alt='' className='w-[350px] h-[350px] ml-[85px] '/></div>
  <div className='flex flex-col gap-[70px] mt-[40px]'>
  <span className='text-xs text-blue-600 font-montserrat cd frontend
  npm start-[60px] w-[470px] '><p>MA Perfect Fix Technical LLC is a Dubai
based technical services company
specializing in luxury residential,
commercial, and high-end property
maintenance.</p></span>
  <span className='text-xs text-blue-600 font-montserrat mt-[-40px] w-[470px] '><p>We deliver comprehensive, precision
driven maintenance solutions for exclusive
villas, premium apartments, offices, and
commercial spaces, with a strong focus on
reliability, discretion, and long-term asset
protection.</p></span>
  <span className='text-medium text-blue-600 font-bold mt-[-30px]'><h2>Our Mission</h2></span>
  <span className='text-xs text-blue-600 font-montserrat w-[470px] mt-[-40px]'><p>Our approach combines expert
engineering, preventive maintenance, and
white-glove service standards to ensure
properties operate flawlessly while
preserving their value and aesthetics.</p></span>
</div></div>


<div>
    <div className='flex flex-row  gap-[10px] ml-[85px] mt-[70px]'>
  <div className='text-blue-600 font-semibold text-2xl'><h2>WHY</h2></div>
  <div className='font-bold text-blue-600 text-2xl'><h2>CHOOSE US</h2></div>
  <div className='mt-[15px]'><img src={image} alt=''/></div>
  </div>
</div>

<div className='flex flex-row  '>
<div className='flex flex-col mt-[30px] ml-[85px] border-2 border-gray-300 w-[350px] h-[250px]'>
<div className='font-semibold text-blue-500 text-m mt-[60px] ml-[60px]'><h2>QUALITY ASSURANCE:</h2></div>
<div className='text-xs text-blue-600 mt-[30px] ml-[60px] mr-[80px] '><p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p></div>
</div>
<div className='flex flex-col mt-[30px]  border-t-2 border-l-1 border-r-1 border-b-2 border-gray-300 w-[350px] h-[250px]'>
  <div className='font-semibold text-blue-500 text-m mt-[60px] ml-[60px]'><h2>CONVENIENCE: </h2></div>
  <div className='text-xs text-blue-600 mt-[30px] ml-[60px] mr-[80px] '><p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p></div>
</div>
<div className='flex flex-col mt-[30px] border-2 border-gray-300 w-[350px] h-[250px]'>
<div className='font-semibold text-blue-500 text-m mt-[60px] ml-[60px]'><h2>EXCEPTIONAL CUSTOMER SERVICE:</h2></div>
<div className='text-xs text-blue-600 mt-[30px] ml-[60px] mr-[80px] '><p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p></div>
</div>

</div>


    </div>
  )
}

export default About