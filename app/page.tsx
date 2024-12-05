'use client'

import { GlobeLock, University } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 justify-center items-center sm:items-start">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div>
          <Image
            className="rounded-full filter grayscale-[60%] contrast-200 transition duration-300 hover:filter-none"
            src="/me.jpg"
            alt=""
            width={180}
            height={38}
            priority
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[1.5rem] md:text-[3rem] lg:text-[4rem]  tracking-wider">
            Seo Jiyoung
          </h1>

          <div className="flex gap-10 items-start md:items-center lg:items-center">
            <div className="flex gap-2">
              <Link
                href="https://www.joongbu.ac.kr/home/"
                className="flex items-center gap-2"
              >
                <University size={30} />
                <p className="text-[0.9rem] md:text-[1.5rem] ld:text-[1.1rem] tracking-widest">
                  Student
                </p>
              </Link>
            </div>
            <div className="flex gap-2">
              <Link
                href="https://www.joongbu.ac.kr/is/"
                className="flex items-center gap-2"
              >
                <GlobeLock size={30} />
                <p className="text-[0.9rem] md:text-[1.5rem] ld:text-[1.1rem] tracking-widest">
                  Security
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
