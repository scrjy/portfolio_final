'use client'

import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="w-full h-full flex gap-16 justify-center items-center">
      <div className="px-8 py-8 max-w-[40rem] glassmorphism max-h-max">
        <h1 className="text-4xl font-extrabold tracking-widest mb-2 ">
          Seo Jiyoung
        </h1>
        <p className="text-lg tracking-wide leading-8">
          안녕하세요! 현재 중부대학교 정보보호학과에 재학중인 서지영입니다. 저는
          파이썬을 가장 좋아하며, 현재 디지털 포렌식과 개발 분야에 관심을 두고
          공부하고 있습니다. 끊임없이 새로운 것을 배우고 탐구하는 과정을 즐기며,
          앞으로 이 두 분야에서 더 깊이 있는 경험을 쌓아가고 싶습니다.
        </p>
      </div>
      <div className="w-[400px] h-[300px] rounded-xl overflow-hidden flex justify-center items-center">
        <Image
          className="object-contain rounded-xl"
          src={'/future.png'}
          alt="future.png"
          width={400}
          height={300}
        />
        <div className="flex gap-2 px-2 py-1 absolute top-2 right-2 z-10 glassmorphism"></div>
      </div>
    </div>
  )
}

export default About
