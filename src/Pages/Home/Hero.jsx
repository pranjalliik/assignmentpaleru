import React from 'react'
import { Fragment } from 'react'
import feedback from '../../assets/feedback.png'
import vocab from '../../assets/vocab.png'
import reading from '../../assets/reading.png'
import confidence from '../../assets/confidence.png'
import phone from '../../assets/phone.png'
import rnt from '../../assets/rabbitNturtle.png'
import target from '../../assets/target.png'
import speaking from '../../assets/speaking.png'
function Hero() {
  return (
    <Fragment>
    <div className='flex  items-center font-sans justify-center gap-x-8  flex-col md:flex-row'>
         <video width="500" height="400" className='m	'  autoPlay 
  muted 
   
  playsInline>
      <source src='https://www.praccel.com/static/media/studentsVideo.5c6d3028dfee8a5aafd3.mp4' type="video/mp4"/>
     </video>
     <div>
        <h1  className='font-semibold mx-2 md:mx-0 md:text-[2.7rem] text-[1.7rem] md:font-bold'>Your <span className='text-[#0b57ff] '>Read Aloud </span>app
        </h1>
        <p className='text-md mx-2 md:mx-0 md:text-2xl mt-3 font-'>Get short reading passages in English regularly.<br/>
        Read, get feedback, improve your reading.</p>
     </div>
    </div>
    <div className='flex justify-around mt-12   items-center flex-col lg:flex-row'>
    <video width="600" height="400" className='m'  autoPlay 
  muted 
   loop
  playsInline>
      <source src='https://www.praccel.com/static/media/feedbackVideo.50f5fde707f090c30368.mp4' type="video/mp4"/>
     </video>
     <div>
     <div className='text-left text-5xl font-semibold '>Get Feedback</div>
     <div className='text-left mt-4 text-2xl '>
     The app will highlight the mistakes<br/> and give you a score
     </div>
     
    </div>
    </div>
    <div className='mt-24'>
   <div className='text-center text-4xl font-semibold'>Benefits for Students</div>
   <div className='flex flex-wrap justify-center gap-x-32 mt-4 gap-y-6' >
    <div className='text-center w-[350px]'>
        <div className='flex justify-center'>
        <img src={feedback} className='h-20 w-20'/>
        </div>
     <div className='text-xl font-semibold'>Immediate feedback</div>
     <div className='mt-1 text-lg '>Students get to know their mistakes after every reading.</div>
    </div>

    <div className='text-center w-[350px]'>
        <div className='flex justify-center'>
        <img src={vocab} className='h-20 w-20'/>
        </div>
     <div className='text-xl font-semibold'>Immediate feedback</div>
     <div className='mt-1 text-lg '>Students get to know their mistakes after every reading.</div>
    </div>
     
    <div className='text-center w-[350px]'>
        <div className='flex justify-center'>
        <img src={reading} className='h-20 w-20'/>
        </div>
     <div className='text-xl font-semibold'>Immediate feedback</div>
     <div className='mt-1 text-lg '>Students get to know their mistakes after every reading.</div>
    </div>

    <div className='text-center w-[350px]'>
        <div className='flex justify-center'>
        <img src={confidence} className='h-20 w-20'/>
        </div>
     <div className='text-xl font-semibold'>Immediate feedback</div>
     <div className='mt-1 text-lg '>Students get to know their mistakes after every reading.</div>
    </div>

   
   </div>


    
    </div>

    <div className='mt-8 p-6 bg-[#eef3ff]'>
    <div className='text-center text-4xl font-semibold'>Features    </div>
    <div className='flex flex-wrap justify-center gap-x-32 mt-8 gap-y-6 '>
      

    

        <div className='gap-x-4 flex border border-[#0b57ff] w-[350px] rounded-lg justify-center min-h-48 overflow-auto items-center '>
        <img src={phone} className='h-20 w-20'/> 
        <div>
            <div className='text-2xl font-semibold'>Get Feedback</div>
            <div className='mt-3 text-lg '>The app will highlight <br/> the mistakes and give<br/> you a score.</div>
        </div>
        </div>
        <div className=' gap-x-4 flex border border-[#0b57ff] w-[350px] rounded-lg justify-center min-h-48 overflow-auto items-center '>
        <img src={rnt} className='h-20 w-20'/> 
        <div>
            <div className='text-2xl font-semibold'>Get Feedback</div>
            <div className='mt-3 text-lg '>The app will highlight <br/> the mistakes and give<br/> you a score.</div>
        </div>
        </div>


        <div className='gap-x-4 flex border border-[#0b57ff] w-[350px] rounded-lg justify-center min-h-48 overflow-auto items-center '>
        <img src={speaking} className='h-20 w-20'/> 
        <div>
            <div className='text-2xl font-semibold'>Get Feedback</div>
            <div className='mt-3 text-lg '>The app will highlight <br/> the mistakes and give<br/> you a score.</div>
        </div>
        </div>



        <div className='flex gap-x-4 border border-[#0b57ff] w-[350px] rounded-lg justify-center min-h-48 overflow-auto items-center '>
        <img src={target} className='h-20 w-20'/> 
        <div>
            <div className='text-2xl font-semibold'>Get Feedback</div>
            <div className='mt-3 text-lg '>The app will highlight <br/> the mistakes and give<br/> you a score.</div>
        </div>
        </div>
    </div>
    
    </div>

    <div className='mt-20'>
        <div className='text-center text-4xl font-semibold'>Performance</div>
        <div className='mt-6 flex flex-col md:flex-row justify-around items-center md:items-start mx-2 md:mx-0	'>
            <div className='w-full md:w-2/5 '>
                <div className='font-bold text-6xl text-[#9cbcfc] '>Score</div>
                <div className='mt-4 text-3xl font-semibold'>Students read multiple times to improve their <span className='text-[#0b57ff]'>score</span>.</div>
                <div className='mt-1 text-lg'>On average, a student scores 73 in the 1st attempt. But they jump to 93 in the latest attempt.</div>
                <div className='text-gray-700 text-lg'>For more results, check out our Performance page</div>
            </div>
            <video width="300" height="400" className='m'  autoPlay 
              muted 
                  loop
                 playsInline>
      <source src='https://www.praccel.com/static/media/scoreVideo.b5c4a12caabd53e3bd1a.mp4' type="video/mp4"/>
     </video>
        </div>
    </div>
    </Fragment>
  )
}

export default Hero