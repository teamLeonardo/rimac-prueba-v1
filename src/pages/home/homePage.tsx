import React from 'react'

import imgFam from '@/shared/assets/Frame 1000004298.webp'
import { FloatHome } from '@/shared/components/widgets/float-home/FloatHome'

const FormHome = React.lazy(() => import('@/shared/components/modules/FormHome'))
const HomePage = () => (
  <>
    <FloatHome></FloatHome>
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center p-8 md:grid-cols-2 md:flex-row">
      <div className="mb-8 md:mb-0 ">
        <img
          src={imgFam}
          alt="Happy family"
          width={480}
          height={560}
          className="relative z-10 hidden rounded-lg shadow-lg md:block"
        />
      </div>
      <div className="self-baseline md:mr-[9rem] md:pl-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 ">
          <div className="flex flex-col justify-center gap-4 ">
            <div className="badge badge-lg rounded-md bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] text-xs font-bold md:text-sm">
              Seguro Salud Flexible
            </div>
            <h1 className="mb-4 mt-4 text-2xl font-bold md:text-4xl">
              Creado para ti y tu familia
            </h1>
          </div>
          <img
            src={imgFam}
            alt="Happy family"
            width="136px"
            height="160px"
            className="relative z-10 rounded-lg shadow-lg  md:hidden"
          />
        </div>
        <div className="divider relative md:hidden "></div>
        <p className="mb-6 text-sm font-bold md:text-base">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
        </p>
        <FormHome />
      </div>
    </div>
  </>
)

export default HomePage
