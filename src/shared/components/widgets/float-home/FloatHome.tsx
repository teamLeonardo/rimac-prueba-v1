import React from 'react'
const FloatHome = () => {
  return (
    <>
      <div className="absolute left-0 top-[30%] z-[-1]  h-screen w-[500px] -translate-x-[70%] md:top-0 md:-translate-x-[50%] ">
        <div className="absolute left-[0%] top-[40vh] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#C333FF90_10%,_transparent_70%)]" />
        <div className="absolute left-[10%] top-[30vh] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#C333FF90_10%,_transparent_70%)]" />
        <div className="absolute left-[-10%] top-[17vh] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#C333FF90_10%,_transparent_70%)]" />
      </div>
      <div className="absolute right-0 top-[-30%] z-[-1] h-screen w-[500px] translate-x-[70%] md:top-0  md:translate-x-[50%]">
        <div className="absolute left-[10%] top-[2vh] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#00F4E290_10%,_transparent_70%)]" />
        <div className="absolute left-[10%] top-[2vh] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#00F4E290_10%,_transparent_70%)]" />
        <div className="absolute left-[-10%] top-[10vh] h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#00F4E290_10%,_transparent_70%)]" />
      </div>
    </>
  )
}

export default FloatHome